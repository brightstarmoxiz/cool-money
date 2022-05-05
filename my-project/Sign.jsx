import { useState } from "react";
import './Sign.css'
import { Link } from "react-router-dom";
// import React from 'react'
// import { useEffect, useState } from 'react';
// import Dexie from 'dexie';
// // import {offline,online} from 'react-detect-offline';

// // import "./App.css"
// // import './index.css'

//  //some inline styling so everything isn't squshed
// const formStyle ={padding:"2rem 0rem"}  
//   const inputStyle ={margin:"1rem 0rem"}

//A simple form with a personal data and submit
 const Sign=({db})=>{
 
    
//   const [open, setOpen] = useState(true)
  
  



// 	  //store form values in a state hook

// 	  const [names,setNames] =useState ({Firstname:"", Lastname:"",Email:"",phonenumber:"",password:""})
  

//   useEffect(
// ()=>{
// 	// create the store 

// 	db.version (1).stores({formData:"id,value"})

// 	//perform a real/write transation on the new store
// 	db.transation ('rw', db.formData, async ()=>{
// 		//get the information from the data 
// 		const dbFirstname= await db.formData.get ('firstname')
	
// 	const dbLastname= await db.formData.get ('lastname')
	
// 	const dbEmail= await db.formData.get ('email')
	
// 	const dbphonenumber= await db.formData.get ('num')
// 	const dbpassword= await db.formData.get ('password')
	
   

// //if the form fields ave not be addeed,add them

// if (!dbFirstname) await db.formData.add ({id:'firstname', value:''})
// if (!dbLastname) await db.formData.add ({id:'lastname', value:''})
// if (!dbEmail) await db.formData.add ({id:'email', value:''})
// if (!dbphonenumber) await db.formData.add ({id:'num', value:''})
// if (!dbpassword) await db.formData.add ({id:'password', value:''})
	
// //set the initial values
// setNames({
// 	Firstname: dbFirstname? dbFirstname.value:"",
// 	Lastname: dbLastname? dbLastname.value:"",
// 	Email: dbEmail? dbEmail.value:"",
// 	phonenumber: dbphonenumber? dbphonenumber.value:"",
// 	password: dbpassword? dbpassword.value:""
// })
// 	}).catch (e => {
// 		//log any errors
// 		console.log(e.stack ||e)
// 	})
// 	//close the database connection if form is unwanted or the database connection change 
// 	return() => db.close()
// },
// //run effect whenever the database connection changes
// [db]
//   )
// //sets the name in the store and inthe state hook 
// const setName = id => value =>{
// 	console.log(db)

// 	//update the store
// 	db.formData.put({id,value})
// 	//update the state hook

// 	setNames(preNames => ({ ...preNames,[id]: value}))

	
// }
// //partial application to make on change handier easier to deal with

// const handleSetName = id => e => setNames (id)
// (e.target.value)

// //when the form is submitted, prevent the default action which reload the page and reset the first and last name in both the store and in the state hook

// const handleSubmit = e =>{
// e.preventDefault ()
// setName ('firstname')('')
// setName ('lastname')('')
// setName ('email')('')
// setName ('num')('')
// setName ('password')('')

// }





const [name, setName] = useState('');
const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [phone, setPhone] = useState('');


  
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  // function to update state of name with
  // value enter by user in form
  const handleChange = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  }
  const handlesurnameChange = (e) => {
    setSurname(e.target.value);
    setSubmitted(false);
  }
  // function to update state of age with value
  // enter by user in form
  const handleAgeChange = (e) => {
    setAge(e.target.value);
    setSubmitted(false);
  }
  // function to update state of email with value
  // enter by user in form
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  }
  // function to update state of password with
  // value enter by user in form
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  }
  // function to update state of confirm password
  // with value enter by user in form
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
    setSubmitted(false);
  }

// function to update state of confirm password
// with value enter by user in form
const handlephoneChange = (e) => {
  setPhone(e.target.value);
  setSubmitted(false);
}
  // below function will be called when user
  // click on submit button .
  const handleSubmit = (e) => {
    if (password !== confPassword) {
      setError(true);
      console.log("password Not Match");
    } else {
      console.log('Welcome to COOL MONEY :"' + name +
      '" ,Age :"' + age + '" and Email :"' + email + '"');


      setSubmitted(true);
      setError(false);
    }
    e.preventDefault();
  }



// Handling the form submission
// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (name === '' || email === '' || password === '') {
//     setError(true);
//   } else {
//     setSubmitted(true);
//     setError(false);
//   }
// };


  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h3>You are welcome {name} {surname},  successfully registered!!</h3>
      </div>
    );
  };

   // Showing error message if error is true
   const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
   














<section className ="vh-100 gradient-custom">
  <div className="container py-5 h-100">
 
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
          <div className="card-body p-4 p-md-5">
          <Link to={"/"} className="navbar-brand text-info " style={{fontSize:"150%"}}><b >COOL MONEY </b></Link>
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">Registration Form</h3>
            <div className="messages">
       {errorMessage()}
        {successMessage()}
      </div>
            <form onSubmit={(e) => { handleSubmit(e) }}>

              <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" id="firstName" className="form-control form-control-lg" value={name} required onChange={(e)=> { handleChange(e) }}/>
                    <label className="form-label" for="firstName">First Name</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" id="lastName" className="form-control form-control-lg" value={surname} required onChange={(e)=> { handlesurnameChange(e) }}/>
                    <label className="form-label" for="lastName">Last Name</label>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">

                  <div className="form-outline datepicker w-100">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      id="birthdayDate"
                      value={age} required onChange={(e)=> { handleAgeChange(e) }}
                    />
                    <label for="birthdayDate" className="form-label">Birthday</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <h6 className="mb-2 pb-1">Gender: </h6>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="femaleGender"
                      value="option1"
                      checked
                     
                    />
                    <label className="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="maleGender"
                      value="option2"
                     
                    />
                    <label className="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="otherGender"
                      value="option3"
                     
                    />
                    <label className="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="email" id="emailAddress" className="form-control form-control-lg" value={email} required onChange={(e)=> { handleEmailChange(e) }}/>
                    <label className="form-label" for="emailAddress">Email</label>

                  </div>

                </div>
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="tel" id="phoneNumber" className="form-control form-control-lg" value={phone} required onChange={(e)=> { handlephoneChange(e) }}/>
                    <label className="form-label" for="phoneNumber">Phone Number</label>
                  </div>

                </div>
              </div>
               <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="password" id="password" className="form-control form-control-lg" value={password} required onChange={(e)=> { handlePasswordChange(e) }}/>
                    <label className="form-label" for="phoneNumber">Password</label>
                  </div>

                </div>
              

                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="password" id="password" className="form-control form-control-lg" value={confPassword} required onChange={(e)=> { handleConfPasswordChange(e) }}/>
                    <label className="form-label" for="phoneNumber">Comfirm Password</label>
                  </div>

                </div>


              {/* <div className="row">
                <div className="col-12">

                  <select className="select form-control-lg">
                    <option value="1" disabled>Choose option</option>
                    <option value="2">Subject 1</option>
                    <option value="3">Subject 2</option>
                    <option value="4">Subject 3</option>
                  </select>
                  <label className="form-label select-label">Choose option</label>

                </div>
              </div> */}

              <div className="mt-4 pt-2">
                <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
              </div>

              <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Already have an account?</p>
                   <Link  to={"/Loginpage"}> <button type="button" className="btn btn-outline-danger">Login</button></Link>
                  </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}



// 	<main>
// <div>
// <button onClick={() => setOpen(!open)}>{`${
// 	open ? 'close' : 'open'
// } Sign`}</button>

// {/* pass in a new connection to the database when form is first rendered */}

// {open && <form db ={new Dexie('formDatabase')}/>}
// </div>





// 	<form style= {formStyle} onSubmit={handleSubmit}>
// 		<span>First name</span>
// 		<br/>
// 		<input
// 		style = {inputStyle}
// 		type = "text"
// 		name ="firstname"
// 		value ={names.Firstname}
// 		onChange = {handleSetName ('firstname')}/>


// 		<br/>
// 		<span>Last name</span>
// 		<br/>
// 		<input
// 		style = {inputStyle}
// 		type = "text"
// 		name ="lastname"
// 		value ={names.Lastname}
// 		onChange = {handleSetName ('lastname')}/>
// 		<br/>
// 		<span>Email</span>
// 		<br/>
// 		<input
// 		style = {inputStyle}
// 		type = "text"
// 		name ="email"
// 		value ={names.Email}
// 		onChange = {handleSetName ('email')}/>
// 		<br/>
// 		<span>phone number</span>
// 		<br/>
// 		<input
// 		style = {inputStyle}
// 		type = "text"
// 		name ="phonenumber"
// 		value ={names.phonenumber}
// 		onChange = {handleSetName ('phonenumber')}/>

// <br/>
		
// 		<span>password</span>
// 		<br/>
// 		<input
// 		style = {inputStyle}
// 		type = "text"
// 		name ="pass"
// 		value ={names.password}
// 		onChange = {handleSetName ('pass')}/>

// 		<br/>
// {/* Handle whether or not the user is offline  */}
// {/* <online><input type ="submit"value="submit"/></online>
// <offline>you are currently offline</offline> */}

// 	</form>
// 	</main>
// 	if (JSON.stringify('input')) {
// 		console.log('correct');
		
// 	   wow= JSON.parse(localStorage.getItem(`input`));
	   
// 	} 
	
// 	function sweet() {
// 		localStorage.setItem('input', JSON.stringify(wow))
// 		obj = {bright:input1.value,star:input2.value}
// 		wow.push(obj) 
// 		let joy =localStorage.getItem('input')
	  
// 	  sweet() 
// 	   console.log(JSON.parse(joy))
// 	}
   

// // States for registration
// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// // States for checking the errors
// const [submitted, setSubmitted] = useState(false);
// const [error, setError] = useState(false);

// // Handling the name change
// const handleName = (e) => {
// 	setName(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the email change
// const handleEmail = (e) => {
// 	setEmail(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the password change
// const handlePassword = (e) => {
// 	setPassword(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the form submission
// const handleSubmit = (e) => {
// 	e.preventDefault();
// 	if (name === '' || email === '' || password === '') {
// 	setError(true);
// 	} else {
// 	setSubmitted(true);
// 	setError(false);
// 	}
// 	sweet() 
// };

// // Showing success message
// const successMessage = () => {
// 	return (
// 	<div
// 		className="success"
// 		style={{
// 		display: submitted ? '' : 'none',
// 		}}>
// 		<h1>you are welcome {name} successfully registered!!</h1>
// 	</div>
// 	);
// };

// // Showing error message if error is true
// const errorMessage = () => {
// 	return (
// 	<div
// 		className="error"
// 		style={{
// 		display: error ? '' : 'none',
// 		}}>
// 		<h1>Please enter all the fields</h1>
// 	</div>
// 	);
// };

// return (
// 	<div className="form">
// 	<div>
// 		<h1>User Registration</h1>
// 	</div>

// 	{/* Calling to the methods */}
// 	<div className="messages">
// 		{errorMessage()}
// 		{successMessage()}
// 	</div>

// 	<form>
// 		{/* Labels and inputs for form data */}
// 		<label className="label">Name</label>
// 		<input onChange={handleName} className="input"
// 		value={name} type="text" />

// 		<label className="label">Email</label>
// 		<input onChange={handleEmail} className="input"
// 		value={email} type="email" />

// 		<label className="label">Password</label>
// 		<input onChange={handlePassword} className="input"
// 		value={password} type="password" />

// 		<button onClick={handleSubmit} className="btn btn-success" type="submit">
// 		Submit
// 		</button>
// 	</form>
// 	</div>

export default Sign