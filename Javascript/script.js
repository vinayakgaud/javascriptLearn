// const arr = [1,2,3,4];
// arr.push(5);
// console.log(arr);

// const person = {
//     name: 'Test'
// };

// person.name = 'Test User';
// person.email = 'test@test.com';

// console.log(person);

// //declaring multiple var at once
// let a, b, c;
// const d = 10, e = 20, f = 30;

// const n = 1038045043045048050345458n;
// console.log(n, typeof n);

// let amount = '100';
// console.log(amount, typeof amount);
// amount = parseInt(amount);
// console.log(amount, typeof amount);

// amount = '100.00';
// console.log(amount, typeof amount);
// amount =+ amount;
// console.log(amount, typeof amount);

// amount = '100.99';
// console.log(amount, typeof amount);
// amount = Number(amount);
// console.log(amount, typeof amount);

// amount = amount.toString();
// console.log(amount, typeof amount);

// amount = Number(amount);
// console.log(amount, typeof amount);

// amount = String(amount);
// console.log(amount, typeof amount);

// amount = parseFloat(amount);
// console.log(amount, typeof amount);

// amount = Boolean(amount);
// console.log(amount, typeof amount);

// amount = 'Hello';
// amount = parseInt(amount);
// console.log(amount, typeof amount);

// const s = 'Hello World';

// console.log(s.length);
// //charat
// console.log(s[0]);
// console.log(s.charAt(1));

// console.log(s.__proto__);
// const t = new String('hello world');
// console.log(t);

// console.log(s.toLowerCase());
// console.log(s.toUpperCase());
// console.log(s.indexOf('e'));

// console.log(s.substring(0,4));
// console.log(s.slice(-11,-6));
// console.log(s.slice(2,5));
// let f = '     Hello    World     ';
// console.log(f.trim());
// console.log(s.replaceAll('o','f'))
// console.log(s.includes('Hel'));

// console.log(s.split(''));

// const s = 'developer';
// console.log(s.replace(s[0], s[0].toUpperCase()));

// const t = 'Hello World';
// const x = t.split(' ');
// console.log(x[0].replace(x[0][0],x[0][0].toUpperCase()), x[1].replace(x[1][0],x[1][0].toUpperCase()));

const n = 5.467;
// console.log(n.toPrecision(3));
// console.log(n.toExponential(1));
//locale works according to place
// console.log(n.toLocaleString('en-US')); //us english
// console.log(n.toLocaleString('ar-EG')); //arabic Egypt
// console.log(n.toLocaleString('ta-IN')); //tamil India

//max min value on Number
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// const x = Math.round(Math.random() * 100 + 1);
// const y = Math.round(Math.random() * 50 + 1);

// const sumResult = `${x} + ${y} = ${x + y}`;
// const differenceResult = `${x} - ${y} = ${x - y}`;
// const productResult = `${x} * ${y} = ${x * y}`;
// const quotientResult = `${x} / ${y} = ${x / y}`;
// const remainderResult = `${x} % ${y} = ${x % y}`;

// console.log(sumResult);
// console.log(differenceResult);
// console.log(productResult);
// console.log(quotientResult);
// console.log(remainderResult);

// let d = new Date('10-07-2022');
// console.log(d);

//getting milliseconds
// console.log(Date.now());
//to get specific timestamp
// let d = new Date();
// console.log(d.getTime());
// console.log(d.valueOf());
// console.log(d.getFullYear());

// console.log(new Date(1691429847725));

// console.log(Math.floor(Date.now() / 1000));
// console.log(new Date());
// console.log(new Date().getDate());
// console.log(new Date().getDay());
// console.log(Intl.DateTimeFormat('en-IN').format(new Date()));

// console.log(new Array('h','e','l'));
// const arr = [10,20,40,50];
// // console.log(arr);
// // arr.push(20);
// // console.log(arr);
// // arr.pop();
// // console.log(arr);
// // arr.unshift(30);
// // console.log(arr);
// // arr.shift();
// // console.log(arr);
// // arr.reverse();
// // console.log(arr);
// // arr.sort()
// // console.log(arr);
// const arr2 = [40,4534,343];
// // arr.push(arr2);
// // console.log(arr);
// // console.log(arr[4][1]);

// // console.log(arr.concat(arr2));

// const allNumber = [arr,arr2];
// console.log(allNumber);

// const spreadAllNumber = [...arr,...arr2];
// console.log(spreadAllNumber);

// const arr3 = [1,2,[3,4],6,[7,8]];
// console.log(arr3);

// console.log(arr3.flat());

// console.log(Array.from('12345'));
// const a = 1;
// const b = 2;
// const c = 3;

// console.log(Array.of(a,b,c));
// const arr = [1,2,3,4,5];
// arr.push(6);
// arr.unshift(0);
// arr.reverse();
// console.log(Uint32Array);
// arr.reverse();
// arr.push(0);
// console.log(arr);

//obj
const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        city: 'Mumbai',
        state: 'MH',
        country: 'IN'
    },
    hobbies: ['reading','music']
}

console.log(person);
console.log(person.name);
console.log(person['name']);
console.log(person.address.city);
console.log(person.hobbies[0]);

person.name = 'Jane Doe'
person['isAdmin'] = false

console.log(person);

delete person.name
console.log(person);
person.name = 'VPG'
console.log(person);

person.greet = function (){
    console.log(`hello my name is ${this.name}`);
}
person.greet();


console.log(person);