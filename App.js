import React, { useState } from 'react';
import Navbar1 from './components/Navbar1';
import FormText1 from './components/FromText1';
import Alert1 from './components/Alert1';
import About from './components/About';
// import Home from './Home';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

const App = () => {
  const [mode,setMode] = useState("light") // whether dark mode on or off

// const [alert,setAlert] = useState(null)

// const showAlert = (message,type) => {
//   setAlert({
//     msg : message,
//     type: type
//   })

//   setTimeout(() =>{
//     setAlert(null);
//   },2500)
// }

//---------------------------------------------------------------------------------------

const toggleMode =()=>{
    if(mode === "light"){
      setMode ("dark");
      document.body.style.background = '#042743';
      // showAlert("Dark mode has been enabled","Success : ")
      document.title = "TextUtils - light"
    }
    else{
      setMode ("light");
      document.body.style.background="white";
      // showAlert("Light mode has been enabled","Success :")
      document.title = "TextUtils - dark"
    }
  }



  const toggleMod =()=>{
    if(mode === "light"){
      setMode ("pink");
      document.body.style.background = 'red';
      // showAlert("Dark mode has been enabled","Success : ")
      document.title = "TextUtils - dark"
    }
    else{
      setMode ("blue");
      document.body.style.background="blue";
      // showAlert("Light mode has been enabled","Success :")
      document.title = "TextUtils - light"
    }
  }


//========================-------------------------------------

  // const toggleMod =()=>{
  //   if(mode === "blue"){
  //     setMode ("red");
  //     document.body.style.background = 'pink';
  //     // showAlert("orange mode has been enabled" ,  "Success : ")
  //   }
  //   else{
  //     setMode ("blue");
  //     document.body.style.background="blue";
  //     // showAlert("pink mode has been enabled" , "Success : ")
  //   }
  // }

  // const toggleModr= ()=> {
  //   if(mode=== "red"){
  //     setMode ("yellow")
  //     document.bodt.style.background="yellow"
  //   }
  //   else{
  //     setMode("yellow")
  //     Document.body.style.background = "red";
  //     document.title= "textUtils - red";
  //   }
   

  // }

  //======-----------------------------------------------------------
  return (
    <>
    {/* <Navbar />        
   <Router> */}
        <Navbar1  Home = "Home"  About= "about me" mode = {mode} toggleMode={toggleMode} toggleMod={toggleMod} />
        <Alert1 alert= {alert}/>  
        <div className="container my-3">  </div>
      
      {/* <Routes> */}
        {/* <Route exact path='/about'>
          <About />
        </Route> */}

        {/* <Route exact path='/'> */}
          <FormText1 heading = "Enter the txet to the analyze below" mode= {mode}/>
        {/* </Route> */}

      {/* </Routes>
      </div>
      </Router> */}
    </>
  );
}
export default App;