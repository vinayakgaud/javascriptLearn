console.log(window); //top most element it have all methods
console.dir(window.document); //all methods for document
console.log(document.body);
console.log(document.body.innerText);

//getting links using difficult method
console.log(document.links); //will give collection of links
console.log(document.links[0].innerText);
document.links[0].innerText = 'Click here!'
// document.body.innerText = 'test' //replace all text
// document.body.innerHTML = 'teste' //replace animal
// document.write('appended') //appends at end of the page

//we can select particular element suppose we are selecting id main
console.log(document.getElementById('main'));

console.log(document.querySelector('#main a'));

document.querySelector('#main a').innerText = 'click!'
document.querySelector('#main h1').innerText = 'Changed data from js'