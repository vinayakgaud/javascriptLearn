//closure
//closure is when one function take variable from outside of it's scope and when executing it, function encloses the outside variable which is known as closure used for encapsulation and for security

const multiply = function(a){
    return function(b){
        console.log(a);
        console.log(b);
    }
}

//inside function will access a variable from outside
multiply(24)(15); //currying as there are two function, calling both function it can be written as
let mul = multiply(24);
mul(15);

//currying is converting function of n parameter to n function of 1 paramater
