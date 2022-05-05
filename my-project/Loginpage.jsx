import {  useState } from "react";
import { Link } from "react-router-dom";
import React from 'react';
import './Login.css'
const Loginpage =()=>{
   
        // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "brightstar",
      password: "nice"
    },
    {
      username: "m",
      password: ""
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error" styles={{ color: "red",
      fontSize: "12px"}}>{errorMessages.message}</div>
    );

  // JSX code for login form
  // const renderForm = (
  //   <div className="form" style={styles.Loginpage}>
  //     <form onSubmit={handleSubmit}>
  //       <div className="input-container" styles={{ display: "flex",
  //           flexDirection: "column",
  //           gap: "8px",
  //           margin: "10px"}}>
  //         <label>Username </label>
  //         <input type="text" name="uname" style={{ height: "25px",
  //           border: "1px solid rgba(0, 0, 0, 0.2)"}} required />
  //         {renderErrorMessage("uname")}
  //       </div>
  //       <div className="input-container"styles={{ display: "flex",
  //           flexDirection: "column",
  //           gap: "8px",
  //           margin: "10px"}}>
  //         <label>Password </label>
  //         <input type="password" name="pass" style={{ height: "25px",
  //           border: "1px solid rgba(0, 0, 0, 0.2)"}}required />
  //         {renderErrorMessage("pass")}
  //       </div>
  //       <div className="buttonContainer"style={{ display: "flex",
  //           justifyContent: "center"}}>
            
  //         <input type="submit" style={{ marginTop: "10px",
  //           cursor: "pointer",
  //           fontSize: "15px",
  //           background: "#01d28e",
  //           border: "1px solid #01d28e",
  //           color: "#ffff",
  //           padding: "10px 20px"}} styleHover ={{
  //               background:"#6cf0c2"
  //           }} />
  //       </div>
  //     </form>
  //   </div>

    












// const renderForm = (

// <main style={{fontFamily: "Arial, Helvetica, sans-serif",width:"100%"}} >

// <h2>Login Form</h2>

// <form onSubmit={handleSubmit} action="" method="post">


//   <div className="container" >
//     <div>
//     <label for="uname"><b>Username</b></label>
//     <input type="text" placeholder="Enter Username" name="uname" required />
//     {renderErrorMessage("uname")}
//     </div>
//     <label for="psw"><b>Password</b></label>
//     <input type="password" placeholder="Enter Password" name="psw" required />
//     {renderErrorMessage("pass")}
//     <button type="submit" className="boy" >Login</button>
//     <label>
//       <input type="checkbox" checked="checked" name="remember"/> Remember me
//     </label>
//   </div>

//   <div class="container" style={{backgroundColor:"#f1f1f1"}} >
//     <button type="button" class="cancelbtn">Cancel</button>
//     <span class="psw">Forgot <Link to="">password?</Link></span>
//   </div>
// </form>

// </main>

























const renderForm = (

<section className="h-100 gradient-form">
  <div className="container py-5 h-100 ">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-sm-6">
              <div className="card-body p-md-5 mx-md-4 ">

                <div className="text-center">
                
                  <h4 className="mt-1 mb-5 pb-1 text-info"><b>COOL MONEY</b></h4>
                </div>

                <form onSubmit={handleSubmit}>
                  <p>Please login to your account</p>

                  <div className="form-outline mb-4">
                    <input type="text" name="uname" className="form-control"
                      placeholder="Your user name" required />
                    <label className="form-label" for="form2Example11">Username</label>
                    {renderErrorMessage("uname")}
                  </div>

                  <div className="form-outline mb-4">
                    <input  type="password" placeholder="Enter Password" name="pass" class="form-control"required  />
                    <label  className="form-label" for="form2Example11" >Password</label>
                    {renderErrorMessage("pass")}
                  </div>

                  <div className="text-center pt-1 mb-5 pb-1">
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log
                      in</button>
                    <a className="text-muted" href="#!">Forgot password?</a>
                  </div>

                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                   <Link  to={"/Sign"}> <button type="button" className="btn btn-outline-danger">Create new</button></Link>
                  </div>

                </form>

              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">We are more than just a company</h4>
                <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );

  return (
    <div className="app">
      
      <div className="login-form"style={{ backgroundColor:"deeppink",
            padding: "2rem",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",height:"97vh"}}>
       <Link to="/" style={{textDecoration:"none"}}> <b className="text-white" style={{fontSize:"200%"}}>COOL MONEY</b></Link>
        {isSubmitted ? <main>

          
          <div className="card cool mx-auto mt-5 text-white" style= {{width: "25rem"}}>
        
        <div className="card-body" >
          <div style={{display:"flex",justifyContent:"space-around"}}>
         
          <h3 className="card-title text-info">WELCOME TO COOL MONEY </h3>
         
          </div>
          <p className="card-text"> This is a site where you can easily make any payment,transfer & withdraw money.</p>
          <p>Is a very secure site, you will be very happy for using this site. <b>when you log to the dashboard start making all payment ,transfer & withdraw money.</b>
           if there is any complain about the site vist us at brightstarmoxiz@gmail.com </p>
          <div style={{display:"flex",justifyContent:"space-around"}}>
          <Link to="/Dashboardpag" ><button className="btn btn-info mt-1 p-3 text-white" >log to dashboard</button></Link>
       
         </div>
        </div>
      </div>

         
        
           </main> : renderForm}
      </div>
    </div>
    )
}

    
export default Loginpage