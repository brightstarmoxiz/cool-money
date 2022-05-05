import { useState } from "react";



const Card  = ()=>{

  const [info, setInfo] = useState ({name:"brightstar",title:"shinning ",country:"american"})

   


  const showName =()=> {
      let item = prompt ("enter a name")
     setInfo({...info,name :item})

  }

  const showTitle =()=> {
    let item = prompt ("enter a title u like")
   setInfo({...info,title:item})

}
const showCountry =()=> {
  let item = prompt ("enter a country")
 setInfo({...info,country:item})

}


// import { useState } from "react";

// const Card  = ()=>{
// const [isOn, setIsOn] = useState(false)
// const setIsoff =() => {
//   setIsOn(false)

// const [name,setName] = useState("bill gate")

//   const showName =()=> {
//    let item = prompt ("enter a name")
//    setName(item)
  
    return (
        <div className="card" style= {{width: "30rem",}}>
        
        <div className="card-body" >
          <div style={{display:"flex",justifyContent:"space-around"}}>
         
          <h5 className="card-title">{info.name} </h5>
          <h5 className="card-title">{info.title} </h5>
          <h5 className="card-title">{info.country} </h5>
          </div>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div style={{display:"flex",justifyContent:"space-around"}}>
         <button className="btn btn-primary" onClick={showName} >edit name</button>
         <button className="btn btn-primary"onClick={showTitle } >edit title </button>
         <button className="btn btn-primary"onClick={showCountry }>edit country</button>
         </div>
        </div>
      </div>

/* <div className="m-3 p-5 d-flex">
  <button className="btn btn-warning"onClick={ ()=>setIsOn (true)}>on</button>
  <div className= {isOn ? "bg-info":"bg-dark"} style={{padding:"50px", width: "100px", height:"100px"}}></div>
  <button className="btn btn-danger"onClick = { ()=>setIsOn(false)}>off</button>
</div> */

    );
}
export default Card


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
