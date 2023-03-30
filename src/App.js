import React, { useEffect,useState } from "react";
import { authService } from "./fbase";
import AppRouter from './Router';


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
