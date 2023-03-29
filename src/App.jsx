import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
 const[watchTime,setWatchTime]=useState("");
  const handleWatchTime=(time)=>{
const priveousTime =JSON.parse(localStorage.getItem("watch-time"));
    if(priveousTime){
const sum =priveousTime+time;
JSON.stringify(localStorage.setItem("watch-time",sum));
setWatchTime(sum)
    }else{
      JSON.stringify(localStorage.setItem("watch-time",time));
      setWatchTime(time);
    }

  }
  // console.log(watchTime)
  return (
    <>
      <Header></Header>
      <div className="main row ">
        <div className="home-container col-md-8 ">
          <Home handleWatchTime={handleWatchTime}></Home>
          
        </div>
        <div className="sidecart col-md-4 card py-5 mt-2">
          <SideCart watchTime={watchTime}></SideCart>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default App;