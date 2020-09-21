[![npm (scoped)](https://img.shields.io/npm/v/@yaireo/console-colors.svg)](https://www.npmjs.com/package/@yaireo/console-colors)
<h1 align="center">
    `Console Colors 
</h1>

## Tiny decorators library for modern browsers console logs

All the below API methods are chainable, and are supposed to be written before the `log()` method.

----
- Mind that styling of console logs only works for primitive types
- The use of this utility is for modern browsers only
- I advise to carefully include this script in development *env* and not in production
----

<p align="center">
    <img src="/demo.png">
<p>
    
    npm i @yaireo/console-colors --save

## Usage

```js
import consoleColor from 'consoleColors';

// encapsulating the logger
const logger = consoleColor() 
logger.red.bgWhite.bold.log("this is the preferred way")

// or globally overloading the `console` object
consoleColor( window.console ) 
console.big.bold.silver.log("this is not very recommended")
```

### [Live Playground](https://d4268d27b69346278c2b60e6c4730a8c.production.codepen.codes)

# API

## Styles

`bold`, `big`, `italic`, `capitalize`, `shadow`

## Colors

These are methods for text colors 

    console.blue.log("blue text")

Each of the below colors can be used as background color as well:

    console.bgBlue.white("white text over blue background")

`white`, `black`, `silver`, `gray`, `red`, `green`, `blue`, `gold`, `yellow`, `pink`, `cyan`

## Special

- `random` - picks a random text color
- `bg` - picks a random background color

Be aware that I did not include any code which tests colors contrast because such additional code will bload this tiny package
