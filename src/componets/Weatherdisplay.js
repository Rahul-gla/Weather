import React from "react";


const Weatherdisplay=({weather})=>{
    console.log(weather);



    return(
        <div className="Weather-display">
            <h1>{weather.name}</h1>
            <p>{weather.main.temp}</p>
            <p>{weather.weather[0].description}</p>
        </div>
    )
}



export default Weatherdisplay;