// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cityinput from './componets/Cityinput';
import Weatherdisplay from './componets/Weatherdisplay';

import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY="a499321759c87995445f05592c914a11";


function App() {


  const[city,setCity]=useState("");
  const[weather,setWeather]=useState("");



  const getwaether=async(cityname)=>{
    try{

      const responce=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}`)

      setWeather(responce.data);
      console.log(weather);

    }
    catch(e){

      console.log('error',e);

    }


  }



  useEffect(()=>{
    getwaether("Mathura");
  },[])



  const handlecity=(cityname)=>{
    if(cityname){
      getwaether(cityname);
    }
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Cityinput  oncitychange={handlecity}/>

     {weather&& <Weatherdisplay   weather={weather}/>}


    </div>
  );
}

export default App;
