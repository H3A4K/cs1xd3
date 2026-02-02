/**
 * This file shows off some of the features of functions.
 * 
 * TLDR: functions are values and function names are variable names.
 * 
 * 2025, Sam Scott, McMaster University.
 */

console.log("Console commands to try: sayHi, sayHi('Abdi'), sayHi()," +
    " sayHi('Sam', 'Scott'), spam(1), spam(1,1), spam(1,1,1), sayHi2, sayHi2('Jose'), sayHi=5," +
    " outerFunction(1,2,3), innerFunction(1,2), doSomething(sayHi, 'Sam')," +
    " startTimers()");
console.log("---------------");

/**
 * A standard function declaration
 * 
 * @param {String} name The name to say hello to
 * @returns A hello message
 */
function sayHi(name) {
    return "Hello, " + name + "!";
}

/**
 * A function with default values
 * 
 * @param {*} a 
 * @param {*} b
 * @param {*} c 
 */
function spam(a, b = 2, c = 3) {
    let sum = a + b + c;
    console.log("a=" + a + " b=" + b + " c=" + c);
    return a + b + c;
}

/**
 * Assigning an anonymous function to a variable name
 * 
 * @param {String} name The name to say hello to
 * @returns A hello message
 */
let sayHi2 = function (name) {
    return "Hello, " + name + "!";
};

/**
 * This function has a local variable inside it that holds another function.
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @param {Number} c 
 * @returns b*c+a*c
 */
function outerFunction(a, b, c) {
    function innerFunction(a, b) {
        console.log("inner function called!");
        return a * b;
    };

    console.log("outer function called!");
    return innerFunction(b, c) + innerFunction(a, c);
}

/**
 * This function takes a function and a parameter as an argument.
 * If you type doSomething(sayHi, 'Sam') in the console, you will pass
 * the sayHi function to f and 'Sam' to a. Then f(a) is the same as
 * sayHi('Sam');
 * 
 * @param {Function} f 
 * @param {*} a 
 */
function doSomething(f, a) {
    return f(a);
}

/**
 * More demonstrations of passing functions as parameters.
 */
function startTimers() {

    function foo() {
        console.log("Foo called.");
    }

    counter = 0;

    setTimeout(foo, 1000); // calls foo after 1000 ms.

    timer = setInterval(function () {
        counter++;
        console.log("Anonymous function call " + counter + ".");
        console.log("To stop this timer, use the command clearInterval(timer).")
    }, 2000);

}