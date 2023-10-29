//event object
/*
- `target` - The element that triggered the event
`currentTarget` - The element that the event listener is attached to
(These are the same in this case
`type` - The type of event that was triggered
`timestamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
`clienty -The y position of the mouse click relative to the window
`offsetX -The x position of the mouse click relative to the element
`offsetY -The y position of the mouse click relative to the element
pagex`- The x position of the mouse click relative to the page
`pageY -The y position of the mouse click relative to the page
'screenX` - The x position of the mouse click relative to the screen
'screenY - The y position of the mouse click relative to the screen
*/

//addEventListener object can take event parameter, e, evt, or event or any
const logo = document.querySelector('img');
logo.addEventListener('click',(e)=>{
    // console.log(e.target);
    // console.log(e.currentTarget);
    // console.log(e.timeStamp);
    // console.log(e.type);
    // console.log(e.clientX); 
    // console.log(e.clientY);
    // console.log(e.offsetX); 
    // console.log(e.offsetY);
    // console.log(e.pageX);
    // console.log(e.pageY);
    // console.log(e.screenX);
    // console.log(e.screenY);
});

// document.body.addEventListener('click',(e)=>{
//     console.log(e.target); //whatever I click
//     console.log(e.currentTarget); //whatever the event is attach to
// })

//if we have to prevent default behavior , as for links or forms
logo.addEventListener('drag',function(e){
    // e.preventDefault();
    // console.log('clicked');
    document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
    if(e.clientX === 200 && e.clientY === 200) document.querySelector('li').style.color = 'red';
});

//some elements are dynamic