//events
//alert is synchronous and is blocking event
//never create js events on html directly
const clear = document.querySelector('#clear');

// clear.onclick = function(){
//     console.log('hey')
// } //using this method it will not work if we have multiple of this on same element

// clear.onclick = function(){
//     clear.style.color = 'blue';
// } //this only changes the color and doesn't log
//recommended and modern way is to add event listener
//addEventListner(); takes two parameter first the type of event and second the call back function
// clear.addEventListener('click', ()=>{
//     console.log(('hey'));
// }); //we can have duplicate events and both will work
// clear.addEventListener('click', ()=>{
//     clear.style.color = 'blue';
// });

function onClear(){
    clear.style.color = 'blue';
    console.log(('hey'));
}
clear.addEventListener('click', onClear);

//the second parameter on this addEventListener take call back function so need for paranthesis otherwise it will run on its own
//addEventListner('click',onClear) and not onClear(), onClear is name of function created separately

//we have removeEventListener no need to use it everytime we use addEventListener , we need to use it when we do remove or removeChild for any element
//we need to use removeEventListener
// setTimeout(() => clear.removeEventListener('click', onClear), 1000); //function to wait for particular time vbefore executing code after it , it take 2 parameter, first function second time in millisecond

//firing event directly from script without any clicking or anything
setTimeout(()=>clear.click(), 2000);
