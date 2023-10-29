//form submission and form objects
const form = document.querySelector('#item-form');

function onSubmit(e){
    e.preventDefault(); //we are doing this as when form is submitted it is sent to backend, using action tag as we don't have action tag it will just submit it to the page so to prevent that 
    const itemInput = document.querySelector('#item-input').value;
    const priorityInput = document.querySelector('#priority-input').value;
    const checkBox = document.querySelector('#checkbox').checked;

    console.log(itemInput, priorityInput.value, checkBox.checked); //either write value there or here doens't matter
    // const li = document.createElement('li');
    // const text = document.createTextNode(itemInput);
    // li.appendChild(text);
    // const button = document.createElement('button');
    // const icon = document.createElement('i');
    // button.className = 'remove-item btn-link text-red';
    // icon.className = 'fa-solid fa-xmark';
    // li.appendChild(button);
    // button.appendChild(icon);
    // document.querySelector('.items').appendChild(li);
}

//form data object
function onSubmitTwo(e){
    e.preventDefault();
    const formData = new FormData(form); //we have to passin form we are fetching data from
    //it gives us formdate and it have multiple feature
    const item = formData.get('item'); //item here is the name tag in html for this input
    const priority = formData.get('priority')
    const check = formData.get('checkbox') //gives on when select and null when not selected
    //this is newer method to fetch values from inputs
    console.log(item,priority,check);

    const entries = formData.entries();
    //it gives us iterator entries
    for(let key of entries){
        console.log(key[1]); //basically returns us array with key: item in 0 index and value: milk in 1
    }
}

form.addEventListener('submit', onSubmitTwo); //it will work when form is submitted