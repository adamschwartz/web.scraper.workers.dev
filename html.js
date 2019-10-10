export default `<!doctype html>
<html lang="en" with-selection-styled>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Web Scraper · By Adam Schwartz · Powered by Cloudflare Workers®</title>

    <meta name="description" content="A simple web scraper powered by Cloudflare Workers®.">
    <meta name="keywords" content="Web scraper, screen scraper, scraper, Cloudflare Workers®, app">
    <meta name="author" content="Adam Schwartz">
    <meta name="generator" content="Adam Schwartz">

    <meta property="og:type" content="website">
    <meta property="og:title" content="Web Scraper">
    <meta property="og:description" content="A simple web scraper powered by Cloudflare Workers®.">
    <meta property="og:url" content="https://web.scraper.workers.dev">

    <meta name="twitter:site" content="@adamfschwartz">
    <meta name="twitter:creator" content="@adamfschwartz">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Web Scraper">
    <meta name="twitter:description" content="A simple web scraper powered by Cloudflare Workers®.">
    <meta name="twitter:url" content="https://web.scraper.workers.dev">

    <link href="https://ui.adam.workers.dev/?components=link,button,input,dialog" rel="stylesheet">
    <script>/* focus-visible polyfill */!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()}(0,function(){"use strict";"undefined"!=typeof document&&function(t){var e;function n(){e||(e=!0,t())}["interactive","complete"].indexOf(document.readyState)>=0?t():(e=!1,document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1))}(function(){var t=!0,e=!1,n=null,o={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function r(t){return!!(t&&t!==document&&"HTML"!==t.nodeName&&"BODY"!==t.nodeName&&"classList"in t&&"contains"in t.classList)}function i(t){""!==t.getAttribute("is-focus-visible")&&t.setAttribute("is-focus-visible","")}function u(e){t=!1}function c(){document.addEventListener("mousemove",s),document.addEventListener("mousedown",s),document.addEventListener("mouseup",s),document.addEventListener("pointermove",s),document.addEventListener("pointerdown",s),document.addEventListener("pointerup",s),document.addEventListener("touchmove",s),document.addEventListener("touchstart",s),document.addEventListener("touchend",s)}function s(e){"html"!==e.target.nodeName.toLowerCase()&&(t=!1,document.removeEventListener("mousemove",s),document.removeEventListener("mousedown",s),document.removeEventListener("mouseup",s),document.removeEventListener("pointermove",s),document.removeEventListener("pointerdown",s),document.removeEventListener("pointerup",s),document.removeEventListener("touchmove",s),document.removeEventListener("touchstart",s),document.removeEventListener("touchend",s))}document.addEventListener("keydown",function(e){r(document.activeElement)&&i(document.activeElement),t=!0},!0),document.addEventListener("mousedown",u,!0),document.addEventListener("pointerdown",u,!0),document.addEventListener("touchstart",u,!0),document.addEventListener("focus",function(e){var n,u,c;r(e.target)&&(t||(n=e.target,u=n.type,"INPUT"==(c=n.tagName)&&o[u]&&!n.readOnly||"TEXTAREA"==c&&!n.readOnly||n.isContentEditable))&&i(e.target)},!0),document.addEventListener("blur",function(t){var o;r(t.target)&&t.target.hasAttribute("is-focus-visible")&&(e=!0,window.clearTimeout(n),n=window.setTimeout(function(){e=!1,window.clearTimeout(n)},100),""===(o=t.target).getAttribute("is-focus-visible")&&o.removeAttribute("is-focus-visible"))},!0),document.addEventListener("visibilitychange",function(n){"hidden"==document.visibilityState&&(e&&(t=!0),c())},!0),c(),document.documentElement.setAttribute("js-focus-visible-polyfill-available","")})})</script>
    <script>/* dialog */const Dialog=(()=>{const a=a=>{this.el.contains(a.target)||(this.el.previousElementSibling===a.target?this.el.querySelector("[dialog-close-x]").focus():this.el.querySelector("[dialog-autofocus], [dialog-close]").focus())},b=a=>{"Escape"===a.key&&d()},c=()=>{document.querySelectorAll("[dialog-close]").forEach(a=>{""===a.getAttribute("dialog-close-handled")||(a.setAttribute("dialog-close-handled",""),a.addEventListener("click",b=>{(null===a.getAttribute("dialog-close-self-only")||b.target===a)&&d()}))})},d=()=>{document.documentElement.removeAttribute("is-dialog"),document.removeEventListener("focus",a,!0),document.removeEventListener("keyup",b,!0)};return{init:a=>{this.el=a},open:()=>{document.documentElement.setAttribute("is-dialog",""),document.addEventListener("focus",a,!0),document.addEventListener("keyup",b,!0),c(),this.el.querySelector("[dialog-autofocus], [dialog-close]").focus()},close:d}})();</script>

    <style>
      html {
        --font-family: Avenir, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        --monospace-font-family: Monaco, monospace;
        --color-rgb: 8, 10, 60;
        --accent-color-rgb: 74, 76, 105;
      }

      @media(min-width: 84em) {
        body {
          font-size: 1.2em;
        }
      }

      a {
        color: rgb(var(--accent-color-rgb));
      }

      html {
        background: #fff;
      }

      html, body {
        overscroll-behavior: none;
      }

      body {
        margin: 0;
      }

      html, body, .Surface {
        height: 100%;
      }

      .Stack > * + * {
        margin-top: 1.5em;
      }

      .Surface {
        display: flex;
      }

      h1 {
        margin: 0;
        font-weight: bold;
        font-size: 1.25em;
      }

      h1 + .Button {
        margin-left: auto;
      }

      .Button-is-help {
        margin: -.5em 0;
        padding: 0;
        font-size: 1.1em;
        font-weight: bold;
        text-align: center;
        width: 1.75em;
        height: 1.75em;
        line-height: 1.9;
        border-radius: 50%;
      }

      .Input--label {
        font-weight: 500;
      }

      .Panel {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        width: 28em;
        background: #efefef;
        box-shadow: 0 0 1em rgba(0, 0, 0, .5);
      }

      .Panel--top, .Panel--main, .Panel--bottom {
        box-sizing: border-box;
        padding-left: 1.5em;
        padding-right: 1.5em;
      }

      .Panel--top {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        padding-top: 1em;
        padding-bottom: 1em;
        background: #fff;
        box-shadow: 0 1px rgba(0, 0, 0, .07), 0 3px 3px -2px rgba(0, 0, 0, .09);
        flex-shrink: 0;
      }

      .Panel--main {
        padding-top: 1.5em;
        padding-bottom: 1.5em;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      .Panel--deemphasized {
        position: relative;
      }

      .Panel--deemphasized::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #efefef;
        opacity: .3;
      }

      .Panel--bottom {
        position: relative;
        z-index: 1;
        margin-top: auto;
        padding-top: 1em;
        padding-bottom: 1em;
        background: #fff;
        box-shadow: 0 -1px rgba(0, 0, 0, .07), 0 -3px 3px -2px rgba(0, 0, 0, .09);
        flex-shrink: 0;
      }

      .Preview {
        flex: 1;
        margin: 0;
      }

      /* TODO */
      .Preview .CodeBlock, .Preview .CodeBlock--code {
        display: block;
        height: 100%;
        width: 100%;
        margin: 0;
      }

      /* TODO */
      .CodeBlock {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        display: block;
        white-space: pre-wrap;
        word-break: break-word;
        font-family: var(--monospace-font-family);
        padding: 1.5em;
        font-size: .9em;
        background: var(--primary-background-color);
        color: #fff;
        cursor: text;
        overflow: auto;
      }

      .CodeBlock::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        transition: opacity .5s ease;
      }

      .CodeBlock:not(:hover)::-webkit-scrollbar {
        opacity: 0;
      }

      .CodeBlock::-webkit-scrollbar-track-piece {
        background: transparent;
        border-radius: .5em;
      }

      .CodeBlock::-webkit-scrollbar-thumb {
        border-radius: .5em;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, .05);
        border: 2px solid var(--primary-background-color);
        background: rgba(255, 255, 255, .1);
      }

      .Actions {
        display: flex;
      }

      .Actions > * + * {
        margin-left: 1em;
      }

      .WebScraperLogo > span {
        display: inline-block;
      }

      .WebScraperLogo--muted {
        position: relative;
      }

      .WebScraperLogo--muted::after {
        content: "";
        display: block;
        position: absolute;
        top: 3px;
        right: 0;
        bottom: 3px;
        left: 0;
        background: #fff;
        opacity: .5;
      }

      @media (max-width: 319px) {
        .WebScraperLogo > .WebScraperLogo--muted {
          display: none;
        }
      }

      .Panel--bottom .Actions .Button-is-primary .mobile-only {
        display: none;
      }

      @media (max-width: 800px) {
        .Panel {
          width: 100%;
        }

        .Preview,
        .Panel--bottom .Actions .Button-is-primary .desktop-only,
        .Panel--bottom .Actions .Button-is-bordered {
          display: none;
        }

        .Panel--bottom .Actions .Button-is-primary .mobile-only {
          display: inline;
        }
      }

      .Dialog--content pre { /* TODO */
        white-space: pre-wrap;
        word-wrap: break-word;
        font-family: Menlo, monospace;
        font-size: .9em;
      }

      .Dialog--content .Link:not(.Link-with-right-arrow) { /* TODO */
        display: inline-block;
        --underline-size: 1px;
        line-height: 1.1;
      }
    </style>
  </head>

  <body>
    <div class="Surface">
      <div class="Panel">
        <div class="Panel--top">
          <h1><a href="https://web.scraper.workers.dev" class="Link Link-without-underline"><span class="WebScraperLogo"><span>web.scraper</span><span class="WebScraperLogo--muted">.workers.dev</span></span></a></h1>
          <button data-js-dialog-open class="Button Button-is-help Button-is-bordered" type="button" aria-label="Help">?</button>
        </div>

        <main class="Panel--main" is-smooth-scrolling>
          <form id="form" class="Stack" method="GET" action="https://web.scraper.workers.dev">
            <div class="Input">
              <label class="Input--label" for="url">URL</label>
              <input class="Input--input" id="url" type="text" name="url" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" autofocus />
            </div>

            <div class="Input">
              <label class="Input--label" for="selector">Selector</label>
              <input class="Input--input" id="selector" type="text" name="selector" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />
            </div>
          </form>
        </main>

        <div class="Panel--bottom">
          <div class="Actions">
            <button class="Button Button-is-primary" type="submit" form="form"><span class="desktop-only">Update preview</span><span class="mobile-only">Scrape</span></button>
            <a data-js-permalink href="https://web.scraper.workers.dev" class="Button Button-is-bordered" type="button">Permalink</a>
          </div>
        </div>
      </div>

      <figure class="Preview">
        <pre class="CodeBlock"><code class="CodeBlock--code" language="json" data-js-json-preview></code></pre>
      </figure>
    </div>

    <div class="Dialog---backdrop" dialog-close dialog-close-self-only>
      <div tabindex="0"></div>
      <div class="Dialog" role="dialog" aria-labelledby="dialog-title" dialog>
        <h2 class="Dialog--title" id="dialog-title">About</h2>

        <div class="Dialog--content">
          <p>Web Scraper makes it effortless to scrape websites. You provide a URL and selector and it will return you JSON containing the text contents of the matching elements.</p>

          <p>Built by <a class="Link" href="https://adamschwartz.co" target="_blank" rel="noopener">Adam Schwartz</a> using <a class="Link" href="https://workers.cloudflare.com" target="_blank" rel="noopener">Cloudflare Workers</a>.</p>
        </div>

        <div class="Dialog--actions">
          <div class="Actions">
            <button class="Button Button-is-primary" dialog-close dialog-close-x dialog-autofocus>Done</button>
            <button class="Button Button-is-bordered" dialog-close dialog-close-x dialog-autofocus data-js-fill-example>View example</button>
          </div>
        </div>

        <div class="Dialog--close-positioner">
          <button class="Button Button-is-close" aria-label="Close" dialog-close>
            <svg viewBox="0 0 8 8"><path stroke="currentColor" stroke-width=".75" d="M0 0 L8 8 M8 0 L0 8"/></svg>
          </button>
        </div>
      </div>
      <div tabindex="0"></div>
    </div>

    <script>
      const Debounce = (fn, delay) => {
        let timeout

        return () => {
          clearTimeout(timeout)
          timeout = setTimeout(() => fn(), delay)
        }
      }

      const form = document.querySelector('form')
      const openDialog = document.querySelector('[data-js-dialog-open]')
      const fillExample = document.querySelector('[data-js-fill-example]')
      const permalink = document.querySelector('[data-js-permalink]')
      const jsonPreview = document.querySelector('[data-js-json-preview]')

      const mobileQuery = window.matchMedia('(max-width: 800px)')

      Dialog.init(document.querySelector('[dialog]'))
      openDialog.addEventListener('click', Dialog.open)

      fillExample.addEventListener('click', () => {
        const data = {
          url: 'https://example.com',
          selector: 'h1'
        }

        const getFieldEl = id => form.querySelector(\`#\${ id }\`)

        let pristine = true
        for (property in data) {
          const fieldEl = getFieldEl(property)
          if (fieldEl && fieldEl.value !== '') pristine = false
        }

        if (pristine === false) {
          const confirmValue = confirm('Are you sure you want to replace all of the entries in the form with the example values?')
          if (!confirmValue) return
        }

        for (property in data) {
          const fieldEl = getFieldEl(property)
          if (fieldEl) fieldEl.value = data[property]
        }

        update()
      })

      let lastPermalink = permalink.href
      const update = () => {
        const data = new FormData(form)
        const queryString = new URLSearchParams(data).toString()
        const url = \`\${ form.action }?\${ queryString }\`

        if (url === lastPermalink) return
        lastPermalink = url

        if (data.get('url') && data.get('selector')) {
          permalink.href = url
          updatePreview(url)
        }
      }

      async function updatePreview(url) {
        const response = await fetch(url)
        const json = await response.json()
        jsonPreview.textContent = JSON.stringify(json, null, 2)
      }

      form.addEventListener('submit', event => {
        if (mobileQuery.matches) return

        event.preventDefault()
        update()
      })

      const events = ['input', 'change']
      const debouncedUpdateFn = Debounce(update, 380)

      document.querySelectorAll('input').forEach(el => {
        events.forEach(eventName => {
          el.addEventListener(eventName, event => {
            if (mobileQuery.matches) return
            debouncedUpdateFn()
          })
        })
      })
    </script>
  </body>
</html>`