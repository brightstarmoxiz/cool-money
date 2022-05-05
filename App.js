//  import Navbar from "./components/Navbar";
// import Card from "./components/Card";
// import Mapping from "./components/Mapping";
// import List from "./components/List";
// import { useState } from "react";
// import "./App.css"
// import { Route,Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Signin from "./pages/Signin";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import NoMatch from "./pages/NoMatch";
// import User from "./pages/User";
// import Exchange from "./pages/User/Exchange"
// import Wallet from "./pages/User/Wallet";
// import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import Homepage from "./my-project/Homepage";
// import Naavbar from "./my-project/Naavbar"
import Profile from "./my-project/Profile";
import Loginpage from "./my-project/Loginpage";
import Sign from "./my-project/Sign";
import Dashboardpag from "./my-project/Dashboardpag";
import Payment from "./my-project/Dashboardpag/Payment";
import Coolmoney from "./my-project/Dashboardpag/Coolmoney";
import Transfer from "./my-project/Dashboardpag/Transfer";
import NoMatch from "./my-project/NoMatch";

// import Naavbar from "./my-project/Naavbar";


function App() {
  //   const [count,setCount] = useState (4)
  //   // const [theme,setTheme] = useState ('blue')

  //   function decrementCount() {
  //     setCount (prevCount => prevCount -1)
  //     // setTheme (prevCount => prevCount -1)
  //   }


  //   function incrementCount() {
  //     setCount (prevCount => prevCount +1)
  //     // setTheme (prevCount => prevCount -1)
  //     //  setTheme ('red')
  //   }
  //   return (
  // <>

  // <Navbar />
  // <main className="p-5">
  // <h1>i am a boy</h1>
  // <p>
  //   is a goaL
  // </p>

  // <div className= "d-flex flex-wrap">

  // <Card />

  // </div>
  // </main>


  // <Mapping />
  // <List/>

  // <main>
  // <div>
  // <button onClick ={decrementCount}>-</button>
  // <span>{count}</span>
  // <button  onClick ={incrementCount}>+</button>
  // </div>
  // </main>
  // </>


  return (

    <main style={{ overflowX: "hidden" }}>


      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="loginpage" element={<Loginpage />} />
        <Route path="sign" element={<Sign />} />
        <Route path="Dashboardpag" element={<Dashboardpag />}>

          <Route path="" element={<Coolmoney/>}/>
          <Route path="payment" element={<Payment/>}/>
          <Route path="transfer" element={<Transfer/>}/>
          <Route path="*" element={<NoMatch />}/>
        </Route>
        <Route path="*" element={<NoMatch />}/>
      </Routes>
      {/* <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="Signin/:role/:country" element={<Signin/>}/>                  
  <Route path="Login" element={<Login/>}/>                                    
  <Route path="Dashboard" element={<Dashboard/>}/>
  <Route path="User" element={<User/>}>
  
     <Route path="" element={<Wallet/>}/>
     <Route path="Exchange" element={<Exchange/>}/>
     <Route path="*" element={<NoMatch/>}/>
  </Route>
  <Route path="*" element={<NoMatch/>}/>
</Routes> */}

    </main>

  );
}
export default App