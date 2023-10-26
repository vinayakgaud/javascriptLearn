//inserting element using different methods such as
//insertAdjacentElement
function insertElement(){
    const filter = document.querySelector('.filter');
    const h1 = document.createElement('h1');
    h1.innerText = 'insertAdjacentElement'
    filter.insertAdjacentElement("beforebegin",h1);
}
//insertAdjacentText
function insertText(){
    const filter = document.querySelector('.filter');
    filter.insertAdjacentText("afterend",'insertAdjacentText')
}
//insertAdjacentHTML
function insertHTML(){
    const clear = document.querySelector('#clear');
    clear.insertAdjacentHTML('afterend','<h2>insertAdjacentHTML</h2>') //this insertAdjacentHTML works like innerHTML
}
//insertBefore
//like an append, but here we select parent, then select child under that parent before which we are adding the element
function insertBeforeItem(){
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = 'insertBefore'
    const thirdItem = document.querySelector('li:nth-child(3)');
    ul.insertBefore(li,thirdItem); //first parameter the element which needs to be added, 2nd parameter is the child of parent before which it should be added
}

insertText();
insertElement();
insertHTML();
insertBeforeItem();

//which uses one of these attributes
/*
<!-beforebegin-> //directly before the selected element
<p>
    <!--afterbegin--> //right after the selected element
    foo
    <!--beforeend--> //right before the end of selected element
</p>
<!--afterend--> //after the end of selected element
*/

//challenge to create insertAfter func
function insertAfter(newEl, existingEl){
    existingEl.insertAdjacentElement('afterend',newEl); //written by me, this will not check for any restriction
}   

function inserAfterByBrad(newEL, existingEl){
    existingEl.parentElement.insertBefore(newEL,existingEl.nextSibling); //this will check for parent node and child node restriction
}

function insertAfterElement(){
    const li = document.createElement('li');
    li.textContent = 'insertAfter';
    const existingEl = document.querySelector('li:nth-child(4)');
    insertAfter(li,existingEl);
    // inserAfterByBrad(li,existingEl)
}

insertAfterElement();

