//call
/**The call() method calls the function directly and sets this to the first argument passed to the call method and if any other sequences of arguments preceding the first argument are passed to the call method then they are passed as an argument to the function. */
let nameObj1 = { 
	name: "Tony"
} 

let PrintName2 = { 
	name: "steve", 
	sayHi: function (age) { 
		console.log(this.name + " age is " + age); 
	} 
} 

PrintName2.sayHi.call(nameObj1, 42); //this is referring to nameObj because of call, first parameter is this object and rest is paramter to be passed


//apply
/**The apply() method calls the function directly and sets this to the first argument passed to the apply method and if any other arguments provided as an array are passed to the call method then they are passed as an argument to the function. */
let nameObj3 = { 
	name: "Tony"
} 

let PrintName3 = { 
	name: "steve", 
	sayHi: function (...age) { 
		console.log(this.name + " age is " + age); 
	} 
} 
PrintName3.sayHi.apply(nameObj3, [42]); //apply is same as call but it take parameter in array


//bind
/**The bind() method creates a new function and when that new function is called it set this keyword to the first argument which is passed to the bind method, and if any other sequences of arguments preceding the first argument are passed to the bind method then they are passed as an argument to the new function when the new function is called. */
let nameObj = { 
	name: "Tony"
} 

let PrintName = { 
	name: "steve", 
	sayHi: function (age) { 

		// Here "this" points to nameObj because function call is bind to nameObj
		console.log(this.name + " age is " + age); 
	} 
} 

let HiFun = PrintName.sayHi.bind(nameObj, 42); //first this obj and rest is parameter
HiFun();
