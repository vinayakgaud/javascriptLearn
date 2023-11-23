//to create custom iterators
//iterator pattern
//eg custom iterator from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;
  
    const rangeIterator = {
      next() {
        let result;
        if (nextIndex < end) {
          result = { value: nextIndex, done: false };
          nextIndex += step;
          iterationCount++;
          return result;
        }
        return { value: iterationCount, done: true };
      },
    };
    return rangeIterator;
}
  
const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = it.next();
}

console.log("Iterated over sequence of size:", result.value);
// [5 numbers returned, that took interval in between: 0 to 10]

//if we have to create iterator that can be used in js's for loop we use generator function

/**While custom iterators are a useful tool, their creation requires careful programming due to the need to explicitly maintain their internal state. Generator functions provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function whose execution is not continuous. Generator functions are written using the function* syntax.

When called, generator functions do not initially execute their code. Instead, they return a special type of iterator, called a Generator. When a value is consumed by calling the generator's next method, the Generator function executes until it encounters the yield keyword.

The function can be called as many times as desired, and returns a new Generator each time. Each Generator may only be iterated once. */

//yield is special keyword to return value in generator function

function* customGenerator(start, end){
  for(let i=start;i<=end;i++){
    yield i;
  }
}
let gen = customGenerator(1,10);
// for(let val of gen){
//   console.log(val)
// }
// console.log(gen.next) //if we had this code the below generator code will give undefine because generator only executes till done is true, means all value is yielded from that call , after that we have to call it again
const btn = document.querySelector('#nextBtn');
btn.addEventListener('click', ()=>{
  btn.innerText = gen.next().value;
})

// setTimeout(()=>{
//   for(let val of gen){
//     console.log(val)
// }
// },1000)
//iterating over obj - https://www.freecodecamp.org/news/how-to-iterate-over-objects-in-javascript/


//Use-cases: 
/**
 * 1. we can use it tocreate infinite loop that doesn't stop or freeze the computer as we are iterating one step at a time, it is useful when generating IDs
 */

function* generateID(department){
  let id = 1;
  while(true){
    yield `${department}${id}`
    id++
  }
}

const generateIVSFS = generateID('IVS-FS');
console.log('ID for IVS-FS: ',generateIVSFS.next().value)
console.log('ID for IVS-FS: ',generateIVSFS.next().value)

const generateINDD = generateID('INDD');
console.log('ID for INDD: ',generateINDD.next().value)
console.log('ID for INDD: ',generateINDD.next().value)

/**
 * ID for IVS-FS:  IVS-FS1
main.js:82 ID for IVS-FS:  IVS-FS2
main.js:85 ID for INDD:  INDD1
main.js:86 ID for INDD:  INDD2
 */

//we can change behaviour of next method
function* generateNextID(department){
  let id = 1;
  while(true){
    const increment = yield `${department}${id}` //when we pass any paramter through next it get yeilded here `${id}`
    if(increment!=null){
      id += increment;
    }else{
      id++;
    }
  }
}

const generate = generateNextID('INDD');
console.log('ID for INDD: ',generate.next().value)
console.log('ID for INDD: ',generate.next().value)
console.log('ID for INDD: ',generate.return(3))//return function return from generator even if we have more iterations after it and it returns the value passed as arguement, to exit out of generator prematurely
console.error('ID for INDD: ',generate.throw(new Error('Custom Error thrown'))) //code after error is not executed
console.log('ID for INDD: ',generate.next(3).value)
console.error('ID for INDD: ',generate.throw(new Error('Custom Error thrown'))) //throwing custom error from generator
/**
 * ID for INDD:  INDD1
main.js:110 ID for INDD:  INDD2
main.js:111 ID for INDD:  {value: 3, done: true}
main.js:112 ID for INDD:  undefined
 */
//we cannot pass a value on next on first iteration because there is nothing to yeild we can only do it from second next
/**
 * ID for INDD:  1
main.js:110 ID for INDD:  2
main.js:111 ID for INDD:  5
main.js:112 ID for INDD:  8

-------
main.js:109 ID for INDD:  INDD1
main.js:110 ID for INDD:  INDD2
main.js:111 ID for INDD:  INDD5
main.js:112 ID for INDD:  INDD8
 */

