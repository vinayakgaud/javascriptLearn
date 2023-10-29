//page loading and window events
//so if we have script tag in head it will not fetch h1 and other tag and the page is not loaded yet
//so we could use window element onload or add listener and use loa
window.onload = function (){
    //enter statement here
}

window.addEventListener('load', ()=>{
    //enter event here
})

window.addEventListener('DOMContentLoaded', ()=>{
    //enter event here
    //difference between DOMContentLoaded and load is that load will wait for full page to load including images and all, where DOMContentLoaded will load as soon as DOM is parsed and loaded
})


//we have defer attribute in HTML which is new and will do the same thing wait for DOM to load

window.addEventListener('resize', ()=>{
    //enter event here
    //window.innerWidth and window.innerHeight
    //it will run whenever window is resized
})

window.addEventListener('scroll', ()=>{
    //enter event here
    //window.scrollX and window.scrollY, gives scrol psoition
    //it will run whenever window is scrolled
    if(window.scrollY > 70){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white'
    } 
})

window.onscroll = function (){
    //enter statement here
    //we can use either of these option
}

//we have focus and blur on window also
