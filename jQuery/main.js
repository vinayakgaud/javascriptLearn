$(document).ready(()=> {
    $("h1").css("color", "red")
    console.log($("h1").css("color")) //if we don't pass the value we get the current value for that property
    $("button") //selecting all buttons same as document.querySelectorAll("button")
    // $('h1').addClass('big-title') //to add css class
    //**add multiple classes separated by spaces
    $('h1').addClass('big-title margin-50') //add mutliple classes
    $('h1').removeClass('big-title margin-50') //to remove multiple css class
    //**to check if element has any class
    console.log($('h1').hasClass('big-title margin-50')); //can check for multiple classes also
    //**updating text
    $("h1").text('Text changed through jQuery');
    //as this $("button") selects all elements so when we change it value, it changes for all elements
    $("button").text('Text changed through jQuery');
    //to change innerHTML
    // $('h1').html('<u><i>Underlined Text</i></u>');
    //**manipulating attributes
    console.log($('h1').attr('id')) //got the attribute
    $('h1').attr('name', 'title'); //setting the attribute
    console.log($('h1').attr('name'))
    $('h1').attr('style', 'color: purple;');
    console.log($('h1').attr('style'))
    //**manipulating event listeners
    $('h1').on('click', () => {
      $('h1').css('color', 'purple');
    })

    $('button').on('click', () => {
        $('h1').css('color', 'red');
    }) //applying click event listeners on all buttons
    //**keypress event */

    // $('input').on('keypress', (e) => {
    //     $('h1').css('color', 'green');
    // }).on('blur', (e) =>{
    //     $('h1').css('color', 'black');
    // }); //code from tabnine  we can apply two event handler at same time together when key pressed got green color and black when click outside of input box*/
    $('input').keypress((e) => {
        $('h1').css('color', 'yellow');
    }).blur((e) =>{
        $('h1').css('color', 'green');
    });

    //**iterate on jquery */
    $('button').each(()=>{
        console.log($('button').text()) //op- 5main.js:46 Text changed through jQueryText changed through jQueryText changed through jQueryText changed through jQueryText changed through jQuery
    })

    //**adding or removing the elements */
    //adding elements
    $('h1').before('<button>Before h1</button>') //this will add the element before the h1 element
    $('h1').after('<button>After h1</button>') //this will add the element after the h1 element
    $('h1').prepend('<button>Prepend h1</button>') //this will add the element before the h1 title but inside h1 element
    $('h1').append('<button>Append h1</button>') //this will add the element after the h1 title but inside h1 element

    //**to remove the element
    // $('button').remove() //this will remove the button element

    //**jquery animation */
    // $('h1').animate({
    //     opacity: 0
    // }, 1000, () => {
    //     $('h1').remove()
    // }) //**code form tabnine for animation
    // $('h1').fadeOut(1000, () => {
    //     $('h1').remove()
    // }) //**code form tabnine for animation
    $('button').click(() => {
        // $('h1').hide(); //to hide the button
        // $('h1').show(); ///to show the button
        //to toggle
        // $('h1').toggle()
        //we have fadeOut , fadeIn and fadeToggle
        // $('h1').fadeToggle();
        //similarly we have slideUp, slideDown, slideToggle
        // $('h1').slideToggle();
        //we have stop method to stop the transition
        //**chaining animation */
        $('h1').slideUp().slideDown().animate({opacity: 0})
    });
    // $('button').animate({
    //     opacaity: 0
    // }, 'slow');
    //we can only use style attribute which have numeric values not color: red; we can do margin: "20%" if need to give % value but it has to be numeric value
    /**
     * $(selector).animate({params},speed,callback);
    The required params parameter defines the CSS properties to be animated.

    The optional speed parameter specifies the duration of the effect. It can take the following values: "slow", "fast", or milliseconds.

    The optional callback parameter is a function to be executed after the animation completes.

    The following example demonstrates a simple use of the animate() method; it moves a <div> element to the right, until it has reached a left property of 250px:
        */

    //link for jquery effects : https://www.w3schools.com/jquery/jquery_hide_show.asp
}) 

//we can use class or id in document select to select precise element
//eg document.querySelector('h1.title') so it will select h1 with title attribut title 