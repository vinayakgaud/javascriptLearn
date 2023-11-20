//callback: passing function as arguement in another function
const getTodos = (callback)=>{
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4 && request.status === 200){
            callback(undefined, request.responseText);
        }else if(request.readyState === 4){
            callback('could not fetch data', undefined);
        }
        //undefined because we don't have any data for it
    });
    // request.open('GET','https://jsonplaceholder.typicode.com/todos/');
    //opening custom json
    request.open('GET','todos.json');
    request.send();
}
console.log(1);
console.log(2);
//**convention when we put network request through callback we pass err first then data as parameters */
getTodos((err, data)=>{
    console.log('callback fired');
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
}); //this is async code it start and can finish later, callbacks are executed separately ex two people working on task instead of one person doing all the stuff
console.log(3);
console.log(4);
//expected: 1,2,3,4 and then callback func and func as func have callback func to be executed
/**op
 * 
main.js:15 1
main.js:16 2
main.js:26 3
main.js:27 4
main.js:19 callback fired
main.js:23 [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  }, ... to be continued response text
 */

  //callback hell: nesting one callback under another callback and creating that triangle like structure
  