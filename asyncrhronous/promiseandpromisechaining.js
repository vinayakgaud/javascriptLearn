//promises
//promise are code which will take time to run
//it has 2 outcome , either resolve or reject
//promises take function and that function take two parameter which is built into promise API resolve and reject;
// const getSomething = ()=>{
//     return new Promise((resolve,reject)=>{
//         //resolve is for response
//         //reject is for error
//         resolve('some data');
//         // reject('some err');

//     });
// }

// getSomething().then((data)=>{
//     console.log(data); 
// }, (err)=>{
//     console.log(err);
// })
//if we have resolve promise than then code/ func is executed and resolve data is pass through it
//then take two paramter first is resolve and second is for reject
//but this way look messy and sometime hard to manage so instead we use below method which is also useful in promise chaining
// getSomething()
// .then(data=> console.log(data))
// .catch(err=>console.log(err)); 
const getTodos = (resource)=>{
    return new Promise((resolve,reject)=>{        
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange',()=>{
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            }else if(request.readyState === 4){
                reject('could not find the data');
            }
        });
        request.open('GET',resource);
        request.send();
    });
}

const res1 = 'https://jsonplaceholder.typicode.com/todos/';
const res2 ='todos.json';

//as getTodo function has promise we can use then and catch on it
// getTodos(res1)
// .then(data=>console.log('promise resolved: ',data))
// .catch(err=>console.log('promise rejected: ',err));

//promise chaining
//in promise chaining we need not use catch eveytime for every promise one catch handle err from every promise
getTodos(res1)
.then(data=>{
    console.log('promise 1 resolved: ',data);
    return getTodos(res2); //as it is promise we need to enter then here and here only because if we do it will be same as callback hell
})
.then(data => console.log('promise 2 resolved',data))
.catch(err=>console.log('promise rejected: ',err));
