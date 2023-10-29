//event delegation to apply event listener to multiple object togethers ex li's
//this way is not efficient, as there can be multiple elements
const listItems = document.querySelectorAll('li')
const ul = document.querySelector('ul')
// listItems.forEach(item =>{
//     item.addEventListener('click', e =>{
//         e.target.remove();
//     })
// });

//event delegation is adding event to parent and then selecting whatever child we would like
ul.addEventListener('click', e=>{
    if(e.target.tagName === 'LI'){
        e.target.remove();
    } //tagname li needs to be capital LI
})

ul.addEventListener('mouseover', e=>{
    if(e.target.tagName === 'LI'){
        e.target.style.color = 'red'
    } 
})