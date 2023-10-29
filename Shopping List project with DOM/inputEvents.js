//input events
//getting all inputs
const itemInput = document.querySelector('#item-input');
const priorityInput = document.querySelector('#priority-input');
const checkBox = document.querySelector('#checkbox');
const heading = document.querySelector('h1');

//use input event instead of keypress or keydown, as input will work with other input as checkbox and dropdown, keydown will not work and also keypress will not accumulate everything typed together
//e.target.value - this gives value of everything typed in the target element
itemInput.addEventListener('input', onInput)
priorityInput.addEventListener('change', onInput) //it is recommended to use input, but we have one more for it that change
checkBox.addEventListener('input',onInput)

function onInput(e){
    heading.textContent = e.target.value
    console.log(e.target.checked); //for checkbox we have method call checked, which returns boolean and tell us if checkbox is checked or not
}

//we have other input events such as focus and blur, focus is when we click on input and blur is when we click out of it
//we basically use it for styling and stuff

itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);

function onFocus(){
    itemInput.style.outlineStyle = 'solid'
    itemInput.style.outlineWidth = '1px'
    itemInput.style.outlineColor = 'green'
}

function onBlur(){
    itemInput.style.outlineStyle = 'none'
}