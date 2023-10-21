this is for basic js functionalities

we have window object which is global scoped so instead of using 
window.alert("hello");
we can also directly use alert("hello");

when local/ block scope variable overwrite the value of global scope variable(both variable have same name) then that is known as variable shadowing
func scope*

var is not block scope, so we use let
var is function scoped, variable created using var inside function is not accesible outside the function, but variables created using var inside loop or condition as in for or if it is accessible outside that block
global variable created using bar gets added to window object

hoisting is collecting function declarations and variables at top so that we can call function first before and declare it after, it doesn't work with function expression it will error that initialize the fucntion first
