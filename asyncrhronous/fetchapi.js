//fetch API
//it is to fetch api from network and it has implemented promise which is helpful
//fetch returns promise

// fetch('todoss.json')
// .then(res=>console.log('resolved',res))
// .catch(err=>console.log('rejected',err))

//event though api add is wrong fetch still shows resolved, it is because fetch only throws error when there is network error
//in case of wrong api address it still shows resolved but with status 404
//to fetch response from fetch we have json method under prototype which is again promise

fetch('todos.json')
.then(res=>{
    console.log('resolved',res);
    return res.json(); //text return json text
    //json return js object
})
.then(data=>console.log(data))
.catch(err=>console.log('rejected',err))

