//single click event
const logo = document.querySelector('img');

//i can toggle events using if else statement
logo.addEventListener('click',()=>{
    console.log('single click event');
})
//dblclick is for double click
logo.addEventListener('dblclick',()=>{
    console.log('double click');
})
//contextmenu is for right click
logo.addEventListener('contextmenu',()=>{
    console.log('right click');
})
//mousedown is when you keep and hold left click
logo.addEventListener('mousedown',()=>{
    console.log('mouse down');
})
//mouseup is when you keep and hold left click and then let go of the key
logo.addEventListener('mouseup',()=>{
    console.log('mouse up');
})
//mouse wheel event both wheel up and own
logo.addEventListener('wheel',()=>{
    console.log('wheel');
})
//mouse hover event, there is no actual hover event in js, instead we have mouseover and mouseout
logo.addEventListener('mouseover',()=>{
    console.log('mouse over');
})
logo.addEventListener('mouseout',()=>{
    console.log('mouse out');
})
//dragstart will only trigger when we start dragging
//drag will be triggered as long as we are dragging the element
logo.addEventListener('dragstart',()=>{
    console.log('drag start');
})
logo.addEventListener('drag',()=>{
    console.log('dragging');
})
//dragend for when drag ends
logo.addEventListener('dragend',()=>{
    console.log('drag end');
})