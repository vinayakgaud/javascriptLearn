//groupBy

// let ppl = [
//     {
//         name: 'John',
//         age: 2
//     },
//     {
//         name: 'Mary',
//         age: 14
//     },
//     {
//         name: 'Jeff',
//         age: 69
//     }
// ]

//if object share similar schema whjich might be referenced from database for eg
//we can use object groupBy ex - to group children from adult (eg_)
// function adult({age}){
//     if(age > 21){
//         return 'adult'
//     }else{
//         return 'child'
//     }
// }
// Object.groupBy(items, callbackFn)
// const organized = Object.groupBy(ppl, adult); //group by is not a function in nodejs
//we need to install it as npm i core-js
// console.log( organized)
/**
 * op- in web console
 * {child: Array(2), adult: Array(1)}
adult
: 
Array(1)
0
: 
{name: 'Jeff', age: 69}
length
: 
1
[[Prototype]]
: 
Array(0)
child
: 
Array(2)
0
: 
{name: 'John', age: 2}
1
: 
{name: 'Mary', age: 14}
length
: 
2
[[Prototype]]
: 
Array(0)
 */

//toSorted
//toReversed
//toSpliced
//these methods doesn't mutate the orignal array instead create copy and mutate it

const arr = [3,2,1]

console.log(arr.toSorted())
console.log(arr)
/**
[ 1, 2, 3 ]
[ 3, 2, 1 ]
*/

console.log(arr.toReversed())
console.log(arr)

/**
 * [ 1, 2, 3 ]
[ 3, 2, 1 ]
 */

console.log(arr.toSpliced(0,2))
console.log(arr)
/**
 * [ 1 ]
[ 3, 2, 1 ]
 */

document.querySelector('#click').addEventListener('click',()=>{
    document.querySelector('#d').showModal() //we have inbuilt show modal button to create modals
})

//computed property - https://eloquentcode.com/computed-property-names-in-javascript#:~:text=Computed%20Property%20Names%20is%20an,be%20determined%20dynamically%2C%20i.e.%20computed.
