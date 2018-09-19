# console colors

Tiny decorators library for browser console log.

All the below API methods are chainable, and are supposed to be written before the `log()` method.
*Mind that styling of console logs only works for primitive types*

![alt tag](https://raw.githubusercontent.com/yairEO/console-colors/master/demo.png)

    npm i @yaireo/console-colors --save

## Usage

    import consoleColor from 'consoleColors';

    // encapsulating the logger
    const logger = consoleColor() 
    logger.red.bgWhite.bold.log("this is the preffered way")

    // or globally overloadnig the `console` object
    consoleColor( window.console ) 
    console.big.bold.silver.log("this is not very recommended")

# API

## Styles

- `bold`
- `big` 
- `italic`
- `capitalize`
- `shadow`

## Colors

These are methods for text colors 

    console.blue.log("blue text")

Each of the below colors can be used as background color as well:

    console.bgBlue.white("white text over blue background")

- `white` 
- `black` 
- `silver`
- `gray`  
- `red`   
- `green` 
- `blue`  
- `gold`  
- `yellow`
- `pink`  
- `cyan`  

## Special

- `random` - picks a random text color
- `bg` - picks a random background color

Be aware that I did not include any code which tests colors contrast because such additional code will bload this tiny package
