/**
 * "console.log" wrapper for styling console messages on the browser
 *  By: Yair Even-Or (C)
 *  This code should only be in development and NOT production (cause errors on unsupported browsers)
 *  https://github.com/yairEO/console-colors
 */

 xxx = Function.prototype.bind.call(console.log, console);

;(function(root, factory){
    var define = define || {};
    if( typeof define === 'function' && define.amd )
        define([], factory);
    else if( typeof exports === 'object' && typeof module === 'object' )
        module.exports = factory();
    else if(typeof exports === 'object')
        exports["consoleColor"] = factory();
    else
        root.consoleColor = factory();
}(this, function(){
    function consoleColors(namespace){
        namespace = namespace || {}

        const _log = window.console.log
        const _warn = window.console.warn
        const _clear = window.console.clear

        const baseStyles = "border-radius:3px; padding: 0 3px;"

        var colors = {
            white  : "white",
            black  : "black",
            silver : "silver",
            gray   : "gray",
            red    : "#E86C5D",
            green  : "#74ED7B",
            blue   : "#3F6FFB",
            gold   : "gold",
            yellow : "yellow",
            pink   : "pink",
            cyan   : "cyan"
        }

        const lib = {
            big        : 'font-size: 2em',
            bold       : 'font-weight: bold',
            italic     : 'font-style: italic',
            capitalize : 'text-transform: capitalize',
            shadow     : 'text-shadow: -1px 1px rgba(0,0,0,.5)'
        }

        var styles = baseStyles // chained styles (per "console" are stored here)

        // protect against non-existant methods (or typos) so the chain of methods will not be harmed
        const proxyC = new Proxy(namespace, {
            get(target, prop) {
                // if (typeof target[prop] == 'function') {
                //     return function () {
                //         console.dir(arguments);
                //         return target[prop].bind(target, arguments);
                //       }
                // }

                return prop in target ? target[prop] : namespace
            }
        })

        // define chainable methods on the proxy object
        const define = (name, value) => {
            Reflect.defineProperty(proxyC, name, {
                get(){
                    styles = styles + ";" + (typeof value == 'function' ? value() : value)
                    // proxyC.log = _log.bind(window.console, "%c%s", styles) // preserve file & line
                    return proxyC
                }
            })
        }

        var getRandomProperty = function(obj){
            var keys = Object.keys(obj)
            return obj[keys[ keys.length * Math.random() << 0]]
        }

        const randomBg = (v) => `background:${ v || getRandomProperty(colors)}; padding:0 .6 0 0`
        const userColor = (v) => `color:${v || getRandomProperty(colors)}`


        // add colors to the main lib
        for( let key in colors ){
            var bgKey = "bg" + key.replace(/\b\w/g, c => c.toUpperCase());
            lib[key] = `color:${colors[key]}`;
            lib[bgKey] = `background:${colors[key]};`;
        }

        // add lib's properties as method getters on the console's proxy object
        for( let key in lib ){
            define(key, lib[key])
        }

        define('bg', randomBg)
        define('random', userColor)

        // proxyC.color = function(s){
        //     if(s)
        //         styles = styles + ";" + userColor(s);

        //     return proxyC
        // }

        function print(args, method){
            args = [...args]
            // non-primitive values cannot be styled (unfortunately)
            var isValid = args.some(v => "string number boolean symbol undefined".includes(typeof v) || v === null),
                currentStyles = styles;

            styles = baseStyles

            return isValid
                ? method.bind(window.console, "%c " + args.join(" "), currentStyles)
                : method.bind(window.console, ...args)
        }

        /**
         * Actual console wrapper methods
         */
        proxyC.log = function(){
            return print(arguments, _log)
        }

        proxyC.warn = function(){
            return print(arguments, _warn)
        }

        proxyC.clear = function(){
            _clear();
            arguments[0] && proxyC.log.apply(null, arguments)
            styles = baseStyles
        }

        proxyC.json = function(){
            const value = [...arguments].map(v => JSON.stringify(v) ).join(" \n\n ")
            proxyC.log.call(null, value)
            styles = baseStyles
        }

        // override the console with the overloaded proxyC
        return proxyC
    }

    return consoleColors
}));