let output;
output = document.all; //fetches HTML collection for all tags and attributes on HTML page, it is deprecated method
//we can also fetch element using index
output = document.all[10];

console.log(document.documentElement); //fetches all element
console.log(document.head); //fetches head
console.log(document.body); // fetches body
console.log(document.head.children); // fetches all children of head tag in collection
console.log(document.body.children);
console.log(document.doctype); //fetches doctype , fetched a collection
console.log(document.domain); //fetches domain of website
// console.log(output); 
console.log(document.URL); //fetches URL
console.log(document.contentType); //fetches content type
console.log(document.characterSet); //fetches character set
console.log(document.forms);
console.log(document.forms[0].id);
console.log(document.forms[0].method);    
document.forms[0].method = 'post'

//we can change href and className
//classList is the method to fetch of classes
console.log(document.images); //fetches collection of images
//forEach doesn't work on these collections, we need to use Array.from() method to convert it to array and then use it
//the collection we get from querySelector is node list and we can use forEach on it
