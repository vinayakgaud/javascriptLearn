//replacing the element
//The innerHTML property captures the HTML contents of an element. In contrast, the outerHTML property captures the HTML that represents the element itself and its content
function replaceFirst(){
    const firstItem = document.querySelector('li:first-child');
    const li = document.createElement('li');
    li.textContent = 'Replaced first';
    firstItem.replaceWith(li);
}

replaceFirst();

function replaceSecond(){
    const secondItem = document.querySelector('li:nth-child(2)');
    secondItem.outerHTML = '<li>Replaced Second</li>';
}

replaceSecond();

//replacing all
function replacingAll(){
    const ul = document.querySelector('ul'); //we don't actually need this but, we can specify parent if there are multiple li present
    ul.querySelectorAll('li').forEach((item, index)=>{
        // item.outerHTML = '<li>Replaced using forEach</li>'; //here as we change HTML we require tag
        // item.innerHTML = 'Replaced using forEach but innerHTML'; //here it captures only content of element, so no tags required
        // index === 1 ? item.innerHTML = 'Second Item' : item.innerHTML = 'Replaced using forEach';
        item.innerHTML = index === 1 ? 'SecondItem': 'Replaced'; //better way to write
    });
}

replacingAll();

//replacing using parent element and method replaceChild
function replacingChild(){
    const ul = document.querySelector('ul')
    const li = document.querySelector('ul li:last-child');
    const liT = document.createElement('li');
    liT.textContent = 'replacedChild';
    ul.replaceChild(liT,li);
}

replacingChild();