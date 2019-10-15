# Web Scraper

Web Scraper makes it effortless to scrape websites. You provide a URL and CSS selector and it will return you JSON containing the text contents of the matching elements.

[Website →](http://web.scraper.workers.dev)


## Examples

### Heading from example.com

[web.scraper.workers.dev/?url=example.com&selector=h1](https://web.scraper.workers.dev/?url=example.com&selector=h1)

```JSON
{"result":["Example Domain"]}
```

### Profile details from github.com profile page

[web.scraper.workers.dev/?url=github.com/adamschwartz&selector=.vcard-fullname,.d-md-block+[itemprop=worksFor],.d-md-block+[itemprop=homeLocation]&pretty=true](https://web.scraper.workers.dev/?url=https://github.com/adamschwartz&selector=.vcard-fullname,.d-md-block+[itemprop=worksFor],.d-md-block+[itemprop=homeLocation]&pretty=true)

```JSON
{
  "result": {
    ".vcard-fullname": [
      "Adam Schwartz"
    ],
    ".d-md-block [itemprop=worksFor]": [
      "@cloudflare"
    ],
    ".d-md-block [itemprop=homeLocation]": [
      "Boston, MA"
    ]
  }
}
```

### Random quote/author from quotes.net

[web.scraper.workers.dev/?url=quotes.net/random.php&selector=%23disp-quote-body,.author&pretty=true](https://web.scraper.workers.dev/?url=quotes.net/random.php&selector=%23disp-quote-body,.author&pretty=true)

```JSON
{
  "result": {
    "#disp-quote-body": [
      "We are advertis'd by our loving friends."
    ],
    ".author": [
      "William Shakespeare"
    ]
  }
}
```


## API

  - Requests are made as `GET` against `http://web.scraper.workers.dev`.
  - There are <strong>two required</strong> query params, `url` and `selector`.
  - There are two optional query params, `pretty` and `spaced`.

<pre><code>http://web.scraper.workers.dev
  ?<strong>url</strong>=https://example.com
  &<strong>selector</strong>=p
  &<strong>pretty</strong>=true
  &<strong>spaced</strong>=true</code></pre>

### Query params

#### `url` (required)

  - Supports `https://` and `http://` protocols.
  - If a protocol isn’t found, `http://` is prepended.
    - e.g. `https://web.scraper.workers.dev/?url=example.com&selector=p`

#### `selector` (required)

  - Supports the same set of CSS selectors as Cloudflare Workers' [`HTMLRewriter` class](https://developers.cloudflare.com/workers/reference/apis/html-rewriter/#selectors)
    - As of Oct 10, 2019, this includes:
      - `*` – any element
      - `E` – any element of type E
      - `E:not(s)` – an E element that does not match either compound selector s
      - `E.warning` – an E element belonging to the class warning
      - `E#myid` – an E element with ID equal to myid.
      - `E[foo]` – an E element with a foo attribute
      - `E[foo="bar"]` – an E element whose foo attribute value is exactly equal to bar
      - `E[foo="bar" i]` – an E element whose foo attribute value is exactly equal to any (ASCII-range) case-permutation of bar
      - `E[foo="bar" s]` – an E element whose foo attribute value is exactly and case-sensitively equal to bar
      - `E[foo~="bar"]` – an E element whose foo attribute value is a list of whitespace-separated values, one of which is exactly equal to bar
      - `E[foo^="bar"]` – an E element whose foo attribute value begins exactly with the string bar
      - `E[foo$="bar"]` – an E element whose foo attribute value ends exactly with the string bar
      - `E[foo*="bar"]` – an E element whose foo attribute value contains the substring bar
      - `E[foo|="en"]` – an E element whose foo attribute value is a hyphen-separated list of values beginning with en
      - `E F` – an F element descendant of an E element
      - `E > F` – an F element child of an E element
  - Supports multiple selectors delimited with a comma.

#### `pretty` (optional)

  - When `false` or not included, JSON is minified.
  - When `true`, JSON is formatted using `JSON.stringify(json, null, 2)`.

#### `spaced` (optional)

  - When `false` or not included, the text nodes of children of the nodes matching `selector` will be concatenated raw.
  - When `true`, a single space character is added after the end tag of each child node found.

##### Examples

Consider the following DOM structure:

```
<div><p>This is the first paragraph.</p><p>This is another paragraph.</p></div>
```

If the `selector` is set to match `div`, by default the resulting text will be:

```This is the first paragraph.This is another paragraph.```

This is because there is no space character between `</p>` and `<p>`.

With `spaced` set to `true`, the result is:

```This is the first paragraph. This is another paragraph.```


## Development

Web Scraper is powered by [Cloudflare Workers](https://workers.cloudflare.com), heavilly utilizing [HTMLRewriter](https://developers.cloudflare.com/workers/reference/apis/html-rewriter/) for parsing the HTML and scraping the text.

To develop Web Scraper locally, pull down the repo, and follow these steps:

1. Installing the Workers CLI globally.

```
npm i @cloudflare/wrangler@1.4.0-rc.7 -g
```

2. Run the preview/watcher inside the repo:

```
wrangler preview --watch
```

This will open up the Workers preview experience so you can test and debug the site. The main source can be found in `index.js`. As you make changes you’ll see them live in the previewer.


## Deploying

Web Scraper is deployed automatically when changes are pushed to master using a [Github Action](https://github.com/features/actions) and the [Workers CLI](https://github.com/cloudflare/wrangler).


## Author

Web Scraper was created by [Adam Schwartz](https://adamschwartz.co).
