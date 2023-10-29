//keyboard events
//keydown, keypress and keyup
//keypress when we press the key once
const input = document.querySelector('#item-input');

// input.addEventListener('keypress',e=>{
//     console.log('keypress');
// })

//keyup is when we release the key after holding is for some time
// input.addEventListener('keyup',e=>{
//     console.log('keyup');
// })

//keydown is when we keep holding the key
// input.addEventListener('keydown',e=>{
//     if(e.key === 'Enter') alert('Pressed Enter');
// })

//there are attributes which tells us which key is pressed
//key - 
//keyCode - works same key but instead checking for key we will be using code
input.addEventListener('keydown',e=>{
    if(e.keyCode === 13) alert('Pressed Enter');
    //e.repeat tells us if we are keep holding key as repeat is true
    //e.shiftKey - tell if shift key is pressed, return boolean value
    //e.ctrlKey - if ctrl key is pressed, return boolean value
    //e.altKey - if alt key is pressed, return boolean value
})
//code - it gives the code for the key as Digit1 and other
// input.addEventListener('keydown',e=>{
//     console.log(e.key);
// })

