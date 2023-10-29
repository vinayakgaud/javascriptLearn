//removing li
const li = document.querySelectorAll('li');
const clear = document.querySelector('#clear');

function removeLi(){
    const ul = document.querySelector('ul');
    ul.remove(li);
}

clear.addEventListener('click',removeLi);

//removing on x mark
const icon = document.querySelector('.fa-xmark'); //but only fetched the first icon and first li

icon.addEventListener('click',()=>{
    const li = icon.parentElement.parentElement;
    li.remove();
});