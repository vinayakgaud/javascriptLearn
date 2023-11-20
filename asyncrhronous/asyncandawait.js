//async and await
//help in promise chaining in clean and readible way
//here we write all async code together and then resolve it later

const getTodos = async ()=>{
    const response = await fetch('todos.json'); //await tell system to not assign respone any data until and unless fetch returns any response not need to write then here
    //as data is also promise we can wait for it also
    const data = await response.json();
    return data;
}; //as adding async keyword make function async and it always return promise

//this func is still promise so will not return any data we need to use then on it, we use this to get rid of all thos then for every fetch request or asynchronous requst
console.log(1)
console.log(2)
getTodos()
.then(data=> console.log('resolved: ', data))
.catch(err=>console.log('rejected: ', err));
//this does not block other codes
console.log(3)
console.log(4)
/**
 * 
1 main.js:14 
2 main.js:19 
3 main.js:20 
4 main.js:16 
resolved:  (2) [{…}, {…}]
 */