//removing the element
//remove and removeChild method
function removeClear(){
    const clearBtn = document.querySelector('#clear')
    clearBtn.remove();
}

removeClear();

function removeFirst(){
    const ul = document.querySelector('ul')
    const li = document.querySelector('li:first-child')
    ul.removeChild(li);
}

removeFirst();

function removeItem(itemNumber){
    const item = document.querySelector(`li:nth-child(${itemNumber})`);
    // const li = document.querySelectorAll('li')[itemNumber-1];
    // console.log(item.innerHTML);
    item.remove();
}

removeItem(3)

