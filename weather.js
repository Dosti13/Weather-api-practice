const btn = document.querySelector("button");
const search = document.querySelector(".text");
const temp = document.querySelector(".temp") ;
const img = document.querySelector(".img") ;
const city = document.querySelector(".city") ;
const cloud = document.querySelector(".cloud")
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")
const text = document.querySelector(".imgtext")
 

btn.addEventListener("click",(e) => {
e.preventDefault()
const value = search.value
search.value=" "
abc(value)
})

async function abc (value){
    try{
    const apikey = "b3f205cdfab11921a3fc8d4f72418b56";
    const url =`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${value}`
   
    const apiurl = await(fetch(url +`&appid=${apikey}`))
    if (apiurl.status=="404"){
      document.querySelector(".error").innerHTML = `${value} is not in list (enter valid city)`
      document.querySelector(".container").style.display = "none"
    }
    else if (apiurl.status=="200"){
      document.querySelector(".container").style.display = "block";
      document.querySelector(".error").innerHTML = ` `

    }
    
    const data = await(apiurl.json())
    
    c(data)}
    catch(error){
        console.log("error he jnab ",error)
    
    }
}
function c(data){
    console.log(data)
  
    city.innerHTML = data.name
    temp.innerHTML = parseInt(data.main.temp)+"°C"
    humidity.innerHTML = data.main.humidity+"%"
    wind.innerHTML= data.wind.speed + "km/h"
    let chnge = data.weather[0].main

   validate(chnge)
}
function validate(chnge){
    if (chnge === "Clear"){
       img.src="clear.png"
       text.innerHTML="Clear"
    }
    else if (chnge === "Haze"){
        img.src="haze.png";
        text.innerHTML="Haze"
    }
   else if (chnge === "Smoke"){
        img.src="smokey.png";
        text.innerHTML="Smoke"
    }
   else if (chnge === "Clouds"){
        img.src="clouds.png";
        text.innerHTML="Cloudy"
    }
   else if (chnge === "Rain"){
        img.src="rain.png";
        text.innerHTML="Rain"
    }
   else if (chnge === "Snow"){
        img.src="snow.png";
        text.innerHTML="Cloudy"
    }
}