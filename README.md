<p align="center">
    <img src="/demo.png">
<p>

<h1 align="center">
    Console Colors <br/>
    <a href="https://www.npmjs.com/package/@yaireo/console-colors">
        <img src="https://img.shields.io/npm/v/@yaireo/console-colors.svg">
    </a>
    <a href="https://unpkg.com/@yaireo/console-colors">
        <img src="https://img.shields.io/badge/-CDN-brightgreen.svg">
    </a>
</h1>

<p align="center">
Tiny decorator library for colorful browser <a href='https://developer.mozilla.org/en-US/docs/Web/API/console#styling_console_output'>console logs</a>
</p>

<br>
All the below API methods are chainable, and are supposed to be written before the `log()` method.

----
- Mind that styling of console logs only works for primitive types
- The use of this utility is for modern browsers only
- I advise to carefully include this script in development *env* and not in production
----

```bash
npm i @yaireo/console-colors --save
```

Or use it as a script from one of the following CDN:

- https://cdn.jsdelivr.net/npm/@yaireo/console-colors
- https://unpkg.com/@yaireo/console-colors

## Usage

One way to use "console-colors" is by creating a logger
which will be glovally available

```js
import consoleColor from '@yaireo/console-colors';

window.log = consoleColor()
log.red.bgWhite.bold.log("so nice", "I think so")()
```

Another way, is to extend `window.console`:
```js
import consoleColor from '@yaireo/console-colors';

consoleColor( window.console )
console.big.bold.silver.log(1,2,3)()
```

### [Live Playground](https://d4268d27b69346278c2b60e6c4730a8c.production.codepen.codes)

# API

## Styles

`bold`, `big`, `italic`, `capitalize`, `shadow`

## Colors

These are methods for text colors

```js
console.blue.log("blue text")()
```

Each of the below colors can be used as background color as well:

```js
console.bgBlue.white("white text over blue background")()
```

`white`, `black`, `silver`, `gray`, `red`, `green`, `blue`, `gold`, `yellow`, `pink`, `cyan`

## Special

- `random` - picks a random text color
- `bg` - picks a random background color

Be aware that I did not include any code which tests colors contrast because such additional code will bload this tiny package

----

## Drawbacks

Unfortunately the empty parenthesis at the end are a must to be able to keep the real file/line which the console was invoked at,
otherwise it would show it as `index.js` (this lib), which is unhelpful.
