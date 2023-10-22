//log number from 1 to 100, for multiple of 3 print fizz, for multiple of 5 print buzz, for both multiple of 3 and 5 print fizzbuzz
for(let i = 1;i<= 100;i++){
    if(i % 3 === 0 && i % 5===0) console.log('FizzBuzz'); //can also write as i % 15 === 0, as 3 * 5 = 15
    else if(i % 3 === 0) console.log('Fizz');
    else if(i % 5 === 0) console.log('Buzz');
    else console.log(i);
}