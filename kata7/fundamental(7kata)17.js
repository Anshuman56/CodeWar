/*Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"*/


var greet = function(name) {
  let result = name.split('').map((item, index) => index === 0 ? item.toUpperCase(): item.toLowerCase()).join('')
return `Hello ${result}!`
};