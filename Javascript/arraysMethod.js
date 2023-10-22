const testArr = [2,3,45,454,'Test',{name: 'Vin'},[3,5,7,8]];

//forEach loop
//console.log(testArr.__proto__); shows all method associated with this array
testArr.forEach(item => console.log(item))

//filter
const arr = [1,2,3,4,5,6,7,8,9];
const evenNumber = arr.filter(item => item % 2 === 0);
console.log(evenNumber);

//map gives us array but with changes made to it
console.log(arr.map(item => item * 2)); //o/p- [2, 4, 6, 8, 10, 12, 14, 16, 18]

//chain map method
const sqrtAndDouble = arr.map(item => item ** 2).map(double => double / 2); //**  **power */
console.log(arr.map(item => item ** 2));
console.log(sqrtAndDouble);

//get even number from array and double it
console.log(arr.filter(i => i % 2===0).map(i => i * 2));

//reduce it takes 3 var, accumulator/ previous value, current value, and initialized value(starting value)
console.log(arr.reduce((acc, curr) => acc + curr, 0));

const cart = [
    {
        name: 'Obj1',
        price: 1000
    },
    {
        name: 'Obj2',
        price: 2000
    }
];
console.log(cart.reduce((arr, curr)=> arr + curr.price,0));