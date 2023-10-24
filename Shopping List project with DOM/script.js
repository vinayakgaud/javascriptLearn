console.log(document.getElementById('filter')); //fetches element by id
console.log(document.getElementById('filter').id); //fetching id attribute of this element, but this method is not very useful as for class we have to use className instead we can use below method
console.log(document.getElementById('filter').getAttribute('id'));

//setting attributes
document.getElementById('app-title').title= 'Shopping List'; //adds the title when we hover ove it we can see it, like a tooltip
document.getElementById('app-title').setAttribute('class','test'); //setting the new attribute class
console.log(document.getElementById('app-title').getAttribute('class'));

//textContent change the text for selected eleement
//innerText do the same
//innerHTMl let's us change HTML, like <strong>Hello</strong> add different HTML attribute

//changing css styles
const title = document.getElementById('app-title');
title.style.color = 'red';
title.style.backgroundColor = 'black' //and other stuffs as padding and all

//querySelector() it is used to select any element without any id or class on it, earlier we had to use jquery for it
//querySelectorAll() it selects all elements on page
//querySelector() only select first element on the page if there are multiple present
console.log(document.querySelector('h1')); //selecting element using tag
console.log(document.querySelector('#app-title')); //selecting element using id
console.log(document.querySelector('.test')); //selecting element using class
//can select tags with different type also
console.log(document.querySelector('input[type = "text"]'));
//selecting nth child
console.log(document.querySelector('li').innerText); //only li will fetch fir st list element
console.log(document.querySelector('li:nth-child(2)').innerText);

//we can use querySelector on other element also not only required to do on document
const ul = document.querySelector('ul');
const li = ul.querySelector('li');
li.style.color = 'blue';

//selecting multiple elements
console.log(document.querySelectorAll('li')); //it gives NodeList, which is array
document.querySelectorAll('li').forEach((item)=>{
    console.log(item);
});

//changing style for all element
document.querySelectorAll('li').forEach((item, index)=>{
    item.style.color = 'red';

    if(index === 1){
        item.remove(); //will remove the element
    }

    if(index === 0){
        //we can change innertext here, but if we directly change it will remove other thinsg from that li element also so instead we should do this
        item.innerHTML = `Oranges
        <button class="remove-item btn-link text-red">
          <i class="fa-solid fa-xmark"></i>
        </button>`;
    }
})

