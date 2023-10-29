//classes and style
//i have one classs which will darken the background
const filter = document.querySelector('#filter');
const btn = document.querySelector('button[type = submit]');
const btn2 = document.querySelector('#btn');
// console.log(btn2);

//triggering event listener
function run(){
    // filter.className = 'filter dark'; using this method we have to enter all classes again and again, if we not write some class it will get overriden
    //instead we should use classList it returns DOMList
    // filter.classList.add('dark');
    // filter.classList.remove('filter');
    // filter.classList.toggle('dark');
    // document.querySelector('li:first-child').classList.toggle('dark');

    // filter.classList.replace('dark','test') //replaces the class
    //applying styling
    // filter.innerHTML.style.backgroundColor = 'red';
    document.querySelector('li:first-child').style.color = 'blue';
}
btn2.onclick = run;