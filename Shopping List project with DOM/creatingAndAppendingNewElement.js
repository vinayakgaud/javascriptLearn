//creating OR appending the element
//innerText is not good method to create new text , it is for getting and updating the text from already present element, instead we can use createTextNode 
//creating new div
const div = document.createElement('div');
div.className = 'custom-element'
div.id = 'custom-element'
div.setAttribute('title','custom element')
// div.innerText = 'Custom tag' 
const text = document.createTextNode('Hello World');
div.appendChild(text); //appendChild is important method to append the element at any place, appendChild here appends the child that is text node to parent div node
//we can use appendChild to append the element on webpage

// document.body.appendChild(div); //it will append it to end of webpage
//if we have to append it to the end of particular element in this case the ul we can do this
// document.querySelector('ul').appendChild(div);

//creating new list
//quick and dirty way
function createNewListItem(item){
    const li = document.createElement('li');
    li.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;

    document.querySelector('.items').appendChild(li);

    //this causes browser to reparse and recreate all dom element so it is inefficient
    //innerHTML doesn't automatically apply event handlers to new element

}

//clean and performant way

function createListItem(item){
    const li = document.createElement('li');
    const text = document.createTextNode(item);
    li.appendChild(text);
    const button = document.createElement('button');
    const icon = document.createElement('i');
    button.className = 'remove-item btn-link text-red';
    icon.className = 'fa-solid fa-xmark';
    li.appendChild(button);
    button.appendChild(icon);
    document.querySelector('.items').appendChild(li);
}

createNewListItem('Eggs');
createListItem('Cheese');

//refactoring above function into multiple functions
//as one function do one thing
function createNewItem(item){
    const li = document.createElement('li');
    const text = createText(item);
    li.appendChild(text);
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
    document.querySelector('.items').appendChild(li);
}

function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function createText(item){
    const text = document.createTextNode(item);
    return text;
}
createNewItem('Custard');