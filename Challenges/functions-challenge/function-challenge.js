//Challenge 1:
const getCelsius = fahrenheitTemp => console.log(`Temperature in celsius is ${(fahrenheitTemp - 32) * (5/9)} \xB0 C`);
getCelsius(40);

// const getCelsius2 = fahrenheitTemp => `Temperature in celsius is ${(fahrenheitTemp - 32) * (5/9)} \xB0 C`;
// console.log(getCelsius2(40));

//challenge 2:
const minMax = arr => {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    for(const num of arr){
        min = Math.min(num, min);
        max = Math.max(num, max);
    }
    return `Min number is ${min} and max number is ${max}`
}

console.log(minMax([1,99,6,73,20]));

//using spread operator and returning the object
const minMaxSpread = arr =>{
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        min, 
        max
    }
}

console.log(minMaxSpread([1,99,6,73,20]));

//Challenge 3:

(function(length, width){
    console.log(`The area of rectangle with width ${width} and length ${length} is ${width * length}`);
})(20, 30);