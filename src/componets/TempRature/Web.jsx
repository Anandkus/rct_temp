import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './style/style.css'
const Web = () => {
  const[city,setCity]=useState("")
  const[search,setSearch]=useState('')
useEffect(()=>{

  const getData = async()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`;
    const reponse =await fetch(url);
    const data=await reponse.json()
    console.log(data)
setCity(data.main)
   
  }
getData()
},[search])
 

  return (
    <>
    
<div className='box'>
<div className='inputData'>
  <input type="search"  className='inputField'
   onChange={(event)=>{setSearch(event.target.value)}}
   value={search}
   />
</div>
{!city ?(
  <p className='err'>No Data Found !🥰 </p>
) :(
  <div>

<div className='info'>
  <h2 className='location'>
  <i class="fa-solid fa-street-view"></i> {search}
  </h2>
  <h1 className='temp'>{city.temp} °C</h1>
  <h3 className='tempmin_max'>Min: {city.temp_min} °C | Max:{city.temp_max} °C</h3>
</div>





  </div>
)}


<div className='wave-one'></div>
<div className='wave-two'></div>
<div className='wave-three'></div>



</div>


    </>
  )
}

export default Web