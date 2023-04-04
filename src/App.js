import React, { useEffect,useState } from "react";
import { authService } from "./fbase";
import AppRouter from './Router';
import './Font.css'
import LogInNav from "./view/LogInNav";
import Conditions from "./view/Conditions";


function App() {
  
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  

  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if(user){
        setIsLoggedIn(user);
      } else{
        setIsLoggedIn(false);
      }
      // console.log("userEffect : ",authService.currentUser.email)
      setInit(true);
      
    });
  },[]);

  return (
    <>
    
    {init ? <AppRouter isLoggedIn={isLoggedIn}/> : ""}
      
    </>
  );
}

export default App;
