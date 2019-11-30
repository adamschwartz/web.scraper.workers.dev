import html from './html.js'

const contentTypes = {
  html: 'text/html;charset=UTF-8',
  json: 'application/json;charset=UTF-8'
}

const cleanText = s => s.trim().replace(/\s\s+/g, ' ')

const formatJSON = (obj, pretty) => JSON.stringify(obj, null, pretty ? 2 : 0)

const generateJSONResponse = (obj, pretty) => {
  return new Response(formatJSON(obj, pretty), {
    headers: {
      'content-type': contentTypes.json,
      'Access-Control-Allow-Origin': '*'
    }
  })
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const searchParams = new URL(request.url).searchParams

  let url = searchParams.get('url')
  if (url && !url.match(/^[a-zA-Z]+:\/\//)) url = 'http://' + url

  const selector = searchParams.get('selector')
  const spaced = searchParams.get('spaced') // Adds spaces between tags
  const pretty = searchParams.get('pretty')

  if (!url || !selector) {
    return handleSiteRequest(request)
  }

  return handleAPIRequest({ url, selector, spaced, pretty })
}

async function handleSiteRequest(request) {
  const url = new URL(request.url)

  if (url.pathname === '/' || url.pathname === '') {
    return new Response(html, {
      headers: { 'content-type': contentTypes.html }
    })
  }

  return new Response('Not found', { status: 404 })
}

async function handleAPIRequest({ url, selector, spaced, pretty }) {
  const response = await fetch(url)

  const server = response.headers.get('server')

  const isThisWorkerErrorNotErrorWithinScrapedSite = (
    [530, 503, 502, 403, 400].includes(response.status) &&
    (server === 'cloudflare' || !server /* Workers preview editor */)
  )

  if (isThisWorkerErrorNotErrorWithinScrapedSite) {
    return generateJSONResponse({
      error: `Status ${ response.status } requesting ${ url }`
    }, pretty)
  }

  const rewriter = new HTMLRewriter()

  const matches = {}
  const selectors = new Set(selector.split(',').map(s => s.trim()))

  try {
    selectors.forEach((selector) => {
      matches[selector] = []

      let nextText = ''

      rewriter.on(selector, {
        element(element) {
          matches[selector].push(true)
          nextText = ''
        },

        text(text) {
          nextText += text.text

          if (text.lastInTextNode) {
            if (spaced) nextText += ' '
            matches[selector].push(nextText)
            nextText = ''
          }
        }
      })
    })

  } catch (error) {
    return generateJSONResponse({
        error: `The selector \`${ selector }\` is invalid or another HTML parsing error occured`
    }, pretty)
  }

  const transformed = rewriter.transform(response)

  await transformed.text()

  selectors.forEach((selector) => {
    const nodeCompleteTexts = []

    let nextText = ''

    matches[selector].forEach(text => {
      if (text === true) {
        if (nextText.trim() !== '') {
          nodeCompleteTexts.push(cleanText(nextText))
          nextText = ''
        }
      } else {
        nextText += text
      }
    })

    const lastText = cleanText(nextText)
    if (lastText !== '') nodeCompleteTexts.push(lastText)
    matches[selector] = nodeCompleteTexts
  })

  return generateJSONResponse({
    result: selectors.length === 1 ? matches[selectors[0]] : matches
  }, pretty)
}
