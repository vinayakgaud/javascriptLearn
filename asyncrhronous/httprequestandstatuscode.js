//working with HTTP Requests to demonstrate asynchronous execution
//we make HTTP request to get data from server or DB we make request to API endpoint
const request = new XMLHttpRequest(); //making network request for API, this is old way inbuilt JS , it is for AJAX, now we use fetch API
//adding eventlistener to request to inform us for any response received
request.addEventListener('readystatechange',()=>{
    // console.log(request, request.readyState); //will log us request status and request ready status
    //we need to use response on ready state 4, we cannot use any other states
    if(request.readyState === 4 && request.status === 200){
        console.log(JSON.parse(request.responseText)[0].title); //just converting response text from JSON to JS obj and then as we received array of object fetching 1st object from array and getting it's title
        //** this is imcomplete because we are not checking for any error in request, there can we possibility that we got some error but as all request will go through all 4 states this is not enough along with it we also have to check for status code */
    }else{
        console.log(`readyState: ${request.readyState} and status: ${request.status}`);
    }
}); //readystatechange request will listen to every event, request will go through different phases and there are 4 in total
/**
 * 100 range information responses
 * 200 range success response
 * 300 range redirection messages
 * 400 range client error responses
 * 500 range server error responses
 */
/** o/p
    XMLHttpRequest {onreadystatechange: null, readyState: 1, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
    1
    main.js:6 
    XMLHttpRequest {onreadystatechange: null, readyState: 2, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
    2
    main.js:6 
    XMLHttpRequest {onreadystatechange: null, readyState: 3, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
    3
    main.js:6 
    XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
    4
*/

/**
 * Ready States
    Value	State	Description
0	UNSENT	Client has been created. open() not called yet.
1	OPENED	open() has been called.
2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	LOADING	Downloading; responseText holds partial data.
4	DONE	The operation is complete.
 */
request.open('GET','https://jsonplaceholder.typicode.com/todos/'); //it takes two parameter first HTTP request to send, and another the API endpoint where we are sending request, it is only making a connection and not sending any request
request.send(); //this is sending the request
