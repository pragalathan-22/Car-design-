import React, { useEffect, useState } from 'react';
import './App.css';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

const App = () => {
  let heroData=[
    {text1:"Dive into",text2:"What you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"give into",text2:"your passions"},
  ]
  const [heroCount, setHeroCount]=useState(1);  
  const [playStatus,setPlayStatus]= useState(false)

  // useEffect(()=>{
  //   setInterval(()=>{
  //     setHeroCount((count)=>{return count===2?0:count+1})
  //   },5000)
  // },[])  its like hanging

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/> 
      <Navbar/> 
      <Hero 
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}/>
    </div>
  )
}

export default App
