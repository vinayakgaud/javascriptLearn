//event bubbling, 
//it basically means that element will move upwards towards parent, when event is there for element after firing event it will move towards parent and if parent have click listener attached to it , it will fire it as well
const button = document.querySelector('form button')
const div = document.querySelector('form div:nth-child(2)')
const form = document.querySelector('form')

button.addEventListener('click', (e)=>{
    alert('button clicked');
    //and to stop this behavior we have event object stopPropogation
    e.stopPropagation(); //only use when required, if parent and child have same event listener
    //e.stopImmediatePropagation() //will use when we have multiple handler on single event and we need to stop for all of it
})

div.addEventListener('click', ()=>{
    alert('div is clicked')
})

form.addEventListener('click', ()=>{
    alert('form is clicked')
})