import html from './html.js'

const contentTypes = {
  html: 'text/html;charset=UTF-8',
  json: 'application/json;charset=UTF-8'
}

const cleanText = s => s.trim().replace(/\s\s+/g, ' ')

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const searchParams = new URL(request.url).searchParams

  let url = searchParams.get('url')
  if (url && !url.match(/^[a-zA-Z]+:\/\//)) url = 'http://' + url

  const selector = searchParams.get('selector')
  const pretty = searchParams.get('pretty')
  const spaced = searchParams.get('spaced') // Adds spaces between tags

  if (url && selector) {
    const response = await fetch(url)

    const rewriter = new HTMLRewriter()

    const matches = {}
    const selectors = selector.split(',').map(s => s.trim())

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

    const json = {
      result: selectors.length === 1 ? matches[selectors[0]] : matches
    }

    const jsonString = JSON.stringify(json, null, pretty ? 2 : 0)

    return new Response(jsonString, {
      headers: { 'content-type': contentTypes.json }
    })

  } else {
    const url = new URL(request.url)

    if (url.pathname === '/' || url.pathname === '') {
      return new Response(html, {
        headers: { 'content-type': contentTypes.html }
      })

    } else {
      // TODO - handle other paths?
      return new Response('Not found', { status: 404 })
    }

    addEventListener('fetch', event => {
      event.respondWith(handleRequest(event.request))
    })
  }
}
