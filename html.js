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

    <link href="https://ui.components.workers.dev/?helpers=with-selection-styled,is-smooth-scrolling&components=Link,Button,FormField,Input,Checkbox,Radio,Stack,Row,Dialog" rel="stylesheet">
    <script>/* focus-visible polyfill */!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()}(0,function(){"use strict";"undefined"!=typeof document&&function(t){var e;function n(){e||(e=!0,t())}["interactive","complete"].indexOf(document.readyState)>=0?t():(e=!1,document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1))}(function(){var t=!0,e=!1,n=null,o={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function r(t){return!!(t&&t!==document&&"HTML"!==t.nodeName&&"BODY"!==t.nodeName&&"classList"in t&&"contains"in t.classList)}function i(t){""!==t.getAttribute("is-focus-visible")&&t.setAttribute("is-focus-visible","")}function u(e){t=!1}function c(){document.addEventListener("mousemove",s),document.addEventListener("mousedown",s),document.addEventListener("mouseup",s),document.addEventListener("pointermove",s),document.addEventListener("pointerdown",s),document.addEventListener("pointerup",s),document.addEventListener("touchmove",s),document.addEventListener("touchstart",s),document.addEventListener("touchend",s)}function s(e){"html"!==e.target.nodeName.toLowerCase()&&(t=!1,document.removeEventListener("mousemove",s),document.removeEventListener("mousedown",s),document.removeEventListener("mouseup",s),document.removeEventListener("pointermove",s),document.removeEventListener("pointerdown",s),document.removeEventListener("pointerup",s),document.removeEventListener("touchmove",s),document.removeEventListener("touchstart",s),document.removeEventListener("touchend",s))}document.addEventListener("keydown",function(e){r(document.activeElement)&&i(document.activeElement),t=!0},!0),document.addEventListener("mousedown",u,!0),document.addEventListener("pointerdown",u,!0),document.addEventListener("touchstart",u,!0),document.addEventListener("focus",function(e){var n,u,c;r(e.target)&&(t||(n=e.target,u=n.type,"INPUT"==(c=n.tagName)&&o[u]&&!n.readOnly||"TEXTAREA"==c&&!n.readOnly||n.isContentEditable))&&i(e.target)},!0),document.addEventListener("blur",function(t){var o;r(t.target)&&t.target.hasAttribute("is-focus-visible")&&(e=!0,window.clearTimeout(n),n=window.setTimeout(function(){e=!1,window.clearTimeout(n)},100),""===(o=t.target).getAttribute("is-focus-visible")&&o.removeAttribute("is-focus-visible"))},!0),document.addEventListener("visibilitychange",function(n){"hidden"==document.visibilityState&&(e&&(t=!0),c())},!0),c(),document.documentElement.setAttribute("js-focus-visible-polyfill-available","")})})</script>
    <script>/* dialog */(()=>{const t='*[tabindex]:not([tabindex="-1"]),a[href]:not([tabindex="-1"]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled])',e=e=>{e.querySelectorAll(t).forEach(t=>{if(t.setAttribute("data-inert",""),t.matches("[tabindex]")){const e=t.getAttribute("tabindex");e&&t.setAttribute("data-original-tabindex",e),t.setAttribute("tabindex",-1)}else t.setAttribute("disabled","")})},i=(t=>{let e=!1;return()=>{e||(t(),e=!0)}})(()=>{let t;document.documentElement.addEventListener("dialogOpen",({detail:{dialog:e}})=>{t&&(t.originalActiveElement=null,t.close()),t=e}),document.documentElement.addEventListener("dialogClose",({detail:{dialog:e}})=>{t=null})});window.Dialog=class{constructor(t){this.el=t,this.el.setAttribute("tabindex",0),this.backdropEl=t.closest("[dialog-backdrop]"),this.setupARIA(),this.prepareFocusTrap(),this.checkForEscape=(t=>e=>{e.target.matches("input[type=text],input[type=email],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=url],textarea")||"Escape"===e.key&&t.close()})(this),this.setupClosers(),e(this.backdropEl),this.isOpen=!1,i()}setupARIA(){this.el.setAttribute("role","dialog"),this.el.setAttribute("aria-modal",!0)}prepareFocusTrap(){const e='<div tabindex="0"></div>';this.el.insertAdjacentHTML("beforebegin",e),this.el.insertAdjacentHTML("afterend",e),this.trapFocus=(e=>i=>{if(e.contains(i.target))return;const s=Array.from(e.querySelectorAll(t));s.unshift(e),e.previousElementSibling===i.target?s[s.length-1].focus():e.nextElementSibling===i.target&&s[0].focus()})(this.el)}setupClosers(){this.backdropEl.addEventListener("click",t=>{const e=t.target;(e===this.backdropEl||e.matches("[dialog-close]")||e.closest("[dialog-close]"))&&this.close()})}dispatch(t){this.el.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:{dialog:this}}))}open(){if(this.isOpen)return;this.isOpen=!0,this.backdropEl.querySelectorAll("[data-inert]").forEach(t=>{if(t.matches("[tabindex]")){const e=t.getAttribute("data-original-tabindex");t.removeAttribute("tabindex"),null!==e&&t.setAttribute("tabindex",e)}else t.removeAttribute("disabled");t.removeAttribute("data-inert")}),this.originalActiveElement=document.activeElement,this.backdropEl.setAttribute("is-active",""),document.documentElement.setAttribute("is-dialog",""),document.addEventListener("focus",this.trapFocus,!0),document.addEventListener("keyup",this.checkForEscape,!0);const t=this.el.querySelector("[dialog-autofocus]");t?t.focus():matchMedia("(hover: hover) and (pointer: fine)").matches&&(this.el.focus({preventScroll:!0}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.backdropEl.scrollTo(0,0)})})),this.dispatch("dialogOpen")}close(){this.isOpen&&(this.isOpen=!1,e(this.backdropEl),this.backdropEl.removeAttribute("is-active",""),document.documentElement.removeAttribute("is-dialog"),document.removeEventListener("focus",this.trapFocus,!0),document.removeEventListener("keyup",this.checkForEscape,!0),this.originalActiveElement&&this.originalActiveElement.focus(),this.dispatch("dialogClose"))}}})()</script>

    <style>
      html {
        --font-family: Avenir, system-ui, sans-serif;
        --color-rgb: 8, 10, 60;
        --accent-color-rgb: 74, 76, 105;
        --error-color-rgb: 206, 0, 88;
      }

      @media(min-width: 84em) {
        body {
          font-size: 1.2em;
        }
      }

      [is-hidden] {
        display: none;
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

      .Surface {
        display: flex;
      }

      h1 {
        margin: 0;
        font-weight: bold;
        font-size: 1.25em;
      }

      @media (max-width: 360px) {
        h1 {
          font-size: 1.15em;
        }
      }

      h1 + .Button {
        margin-left: auto;
      }

      .Button-is-help {
        margin: -.5em 0;
        padding: 0;
        font-size: 1.1em;
        font-size: 1.0625em;
        font-weight: bold;
        text-align: center;
        width: 1.76470588236em;
        height: 1.76470588236em;
        line-height: 1.9;
        border-radius: 50%;
      }

      .FormField--label {
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

      .Panel--bottom .Button-is-primary .mobile-only {
        display: none;
      }

      @media (max-width: 800px) {
        .Panel {
          width: 100%;
        }

        .Preview,
        .Panel--bottom .Button-is-primary .desktop-only,
        .Panel--bottom .Button-is-bordered {
          display: none;
        }

        .Panel--bottom .Button-is-primary .mobile-only {
          display: inline;
        }
      }

      .Dialog--content .Link {
        --underline-size: 1px;
        --underline-color: rgba(var(--accent-color-rgb), .7);
        display: inline-block;
        line-height: 1.1;
      }

      .Input:not([is-pristine]):not(:focus):invalid {
        --focus-color: rgba(var(--error-color-rgb), .5);
        --border-color: rgba(var(--error-color-rgb), .4);
        --border-top-color: rgb(var(--error-color-rgb));
      }

      .Input:not([is-pristine]):focus:invalid {
        color: rgb(var(--error-color-rgb));
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
            <div class="FormField">
              <div class="FormField--text">
                <label class="FormField--label" for="url">URL</label>
              </div>
              <input class="Input" is-pristine id="url" type="text" inputmode="url" name="url" pattern="(?:(?:https?):\\/\\/)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:\\/\\S*)?" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" required autofocus />
            </div>

            <div class="FormField">
              <div class="FormField--text">
                <label class="FormField--label" for="selector">Selector</label>
              </div>
              <input class="Input" is-pristine id="selector" type="text" name="selector" pattern="(?:\\*|(?:[#.]?[a-zA-Z0-9_-])+)(?:\\[(?:\\S.*)=(?:\\S.*)\\])?(?::\\S*)?(?:(?:\\s+)?(?:,|>)?(?:\\s+)?(?:\\*|(?:\\.?[a-zA-Z0-9_-])+)(?:\\[(?:\\S.*)~?\\^?=(?:\\S.*)\\])?(?::\\S*)?)*" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" required />
            </div>

            <div class="FormField">
              <div class="Radio---list">
                <div class="Radio">
                  <input class="Radio--input" type="radio" name="scrape" id="scrape-text" value="text" checked/>
                  <label class="Radio--label" for="scrape-text">Scrape the text contents of matched nodes</label>
                </div>
                <div class="Radio">
                  <input class="Radio--input" type="radio" name="scrape" id="scrape-attr" value="attr"/>
                  <label class="Radio--label" for="scrape-attr">Scrape an attribute from the last matched node</label>
                </div>
              </div>
            </div>

            <div class="FormField" show-if-scrape="text">
              <div class="Checkbox">
                <input class="Checkbox--input" type="checkbox" name="spaced" id="spaced"/>
                <label class="Checkbox--label" for="spaced">Add a space between children of matched nodes</label>
              </div>
            </div>

            <div class="FormField" show-if-scrape="attr" is-hidden>
              <div class="FormField--text">
                <label class="FormField--label" for="selector">Attribute</label>
              </div>
              <input class="Input" is-pristine id="attr" type="text" name="attr" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"/>
            </div>

            <div class="FormField">
              <div class="Checkbox">
                <input class="Checkbox--input" type="checkbox" name="pretty" id="pretty" checked/>
                <label class="Checkbox--label" for="pretty">Prettify the JSON output</label>
              </div>
            </div>
          </form>
        </main>

        <div class="Panel--bottom">
          <div class="Row">
            <button class="Button Button-is-primary" type="submit" form="form"><span class="desktop-only">Update preview</span><span class="mobile-only">Scrape</span></button>
            <a data-js-permalink href="https://web.scraper.workers.dev" class="Button Button-is-bordered" type="button">Permalink</a>
          </div>
        </div>
      </div>

      <figure class="Preview">
        <pre class="CodeBlock"><code class="CodeBlock--code" language="json" data-js-json-preview></code></pre>
      </figure>
    </div>

    <div class="Dialog---backdrop" dialog-backdrop>
      <div tabindex="0"></div>
      <div class="Dialog Dialog-is-medium" role="dialog" aria-modal="true" aria-labelledby="dialog-title" dialog>
        <h2 class="Dialog--title" id="dialog-title">About</h2>

        <div class="Dialog--content">
          <p>Web Scraper makes it effortless to scrape websites. Just provide a URL and CSS selector and it will return JSON containing the text contents of the matching elements.</p>

          <p>Built by <a class="Link" href="https://adamschwartz.co" target="_blank" rel="noopener">Adam Schwartz</a> using <a class="Link" href="https://workers.cloudflare.com" target="_blank" rel="noopener">Cloudflare Workers</a>, open-source and available on <a class="Link" href="https://github.com/adamschwartz/web.scraper.workers.dev" target="_blank" rel="noopener">GitHub</a>.</p>
        </div>

        <div class="Dialog--actions">
          <div class="Row">
            <button class="Button Button-is-primary" dialog-close dialog-autofocus>Done</button>
            <button class="Button Button-is-bordered" dialog-close data-js-fill-example>View example</button>
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

      const dialog = new Dialog(document.querySelector('[dialog]'))
      openDialog.addEventListener('click', () => dialog.open())

      fillExample.addEventListener('click', () => {
        const data = {
          url: 'example.com',
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

        setURLCustomValidity()
        setSelectorCustomValidity()

        update()
      })

      let lastPermalink = permalink.href
      const update = () => {
        if (form.checkValidity && !form.checkValidity()) return
        const data = new FormData(form)

        const booleans = ['pretty', 'spaced']
        booleans.forEach(b => {
          if (data.get(b) === 'on') data.set(b, 'true')
        })

        if (data.get('scrape') !== 'attr') {
          data.delete('attr')
        }

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
        const pretty = !!form.querySelector('#pretty').checked
        const response = await fetch(url)
        const json = await response.json()
        jsonPreview.textContent = JSON.stringify(json, null, pretty ? 2 : 0)
      }

      form.addEventListener('submit', event => {
        if (mobileQuery.matches) return

        event.preventDefault()
        update()
      })

      const formInputChangeEvents = ['input', 'change']
      const debouncedUpdate = Debounce(update, 100)

      document.querySelectorAll('input[type="text"]').forEach(el => {
        formInputChangeEvents.forEach(eventName => {
          el.addEventListener(eventName, event => {
            if (mobileQuery.matches) return
            debouncedUpdate()
          })
        })

        const dirty = event => {
          el.removeEventListener('change', dirty)
          el.removeAttribute('is-pristine')
        }

        el.addEventListener('change', dirty)
      })

      const handleScrapeRadioUpdate = () => {
        document.querySelectorAll('[show-if-scrape]').forEach(el => {
          const scrapeValue = document.querySelector('input[name="scrape"]:checked').value

          if (el.getAttribute('show-if-scrape') === scrapeValue) {
            el.removeAttribute('is-hidden')
          } else {
            el.setAttribute('is-hidden', '')
          }
        })
      }

      document.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(el => {
        el.addEventListener('change', event => {
          handleScrapeRadioUpdate()
          if (mobileQuery.matches) return
          update()
        })
      })

      const setURLCustomValidity = () => {
        if (url.validity.valueMissing) {
          url.setCustomValidity('Enter the URL you’d like to scrape.')
        } else if (url.validity.patternMismatch) {
          url.setCustomValidity('Enter a valid URL.')
        } else {
          url.setCustomValidity('')
        }
      }

      formInputChangeEvents.forEach(eventName => {
        url.addEventListener(eventName, event => {
          setURLCustomValidity()
        })
      })

      setURLCustomValidity()

      const setSelectorCustomValidity = () => {
        if (selector.validity.valueMissing) {
          selector.setCustomValidity('Enter a CSS selector to scrape.')
        } else if (selector.validity.patternMismatch) {
          selector.setCustomValidity('Enter a valid CSS selector.')
        } else {
          selector.setCustomValidity('')
        }
      }

      formInputChangeEvents.forEach(eventName => {
        selector.addEventListener(eventName, event => {
          setSelectorCustomValidity()
        })
      })

      setSelectorCustomValidity()
    </script>
  </body>
</html>`
