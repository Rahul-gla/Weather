import React, { useState } from "react";


const Cityinput=({oncitychange})=>{
    const[inputvalue,setInputvalue]=useState("");

    const handlesubmit=(e)=>{
        e.preventDefault();
        oncitychange(inputvalue);
        setInputvalue("");

    }



    return(
        <form onSubmit={handlesubmit} className="city-input">

        <input 
        type='text'
        value={inputvalue}
        onChange={(e)=>setInputvalue(e.target.value)}
        placeholder="Enter the City Name"
        
        />
        <br></br>
        <br></br>
        

        <button type="submit">Get the weather</button>
        
        
        
        </form>
    )
}


export default Cityinput;