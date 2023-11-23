//fetching current location of user
const button = document.querySelector('#getLocation');
//fetching location is async task
//fetching weather of user using api and user current location
const getData = async (lat, long)=>{
  const response = await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${lat},${long}&apikey=xGeNJyqTvf3L4oRVOysNbDckU4UoXLr6`);
  const data = await response.json();
  return data;
}

const gotLocation = async (pos)=>{
  const result = await getData(pos.coords.latitude, pos.coords.longitude);
  console.log(result)
}

const errorLocation = ()=>{
  console.log("didn't got the location")
}
button.addEventListener('click',async ()=>{
  //we will use navigation elements' geolocation
  navigator.geolocation.getCurrentPosition(gotLocation, errorLocation); //this function takes two parameter first for success and second for failure
})

// navigator.geolocation.watchPosition((pos)=>{ //to get current pos like GPS
//   console.log(pos)
// })

// navigator.geolocation.clearWatch()