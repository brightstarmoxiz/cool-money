// import Naavbar from "./Naavbar"
import {Link} from "react-router-dom"
import {ReactComponent as Banknote } from "./Banknote_TwoColor.svg"
import  man  from "./paypal.jpg"
import  bit  from "./bitcoin.png"
import  palm  from "./palmpay.png"
import  amaze  from "./Amazon.JPG"
import  money  from "./money.png"
import trnf1 from "./transfer1.png"
import trnf3 from "./transfer3.png"
import trnf4 from "./transfer4.jpg"
import trnf6 from "./transfer6.png"
import Naavbar from "./Naavbar"
const Homepage  =()=>{

    return(
       
        <main>
         <Naavbar/>
        {/* <h3>This is home page</h3>
     */}
        <div className="container">
  <div className="row ">
    <div className="col-sm-6  text-info">
      <h3 style={{fontSize:"90px",fontFamily:"fantasy"}}>Operation no more stress</h3>
      <p className="text-warning">This is a site where you make payment, transfer & withdraw anything.</p>
      <div style={{display:"flex",justifyContent:"space-evenly"}}> 
        <div>
  
     <Link to="/Sign"> <button className="btn btn-info p4 text-white">Create an account</button> </Link>
</div>
<div>
      
     <Link to="/Loginpage"><button className="btn btn-info p4 text-white "> Login to your account</button></Link>
      </div>
      </div>
   </div>
    <div className="col-sm-6 ">
      <Banknote/>
    </div>
  </div>
  </div>
  <div className="text-center pt-4">
  <img style={{width:"12%"}} src={man} alt="this is paypal " />
  <img style={{width:"8%"}} src={bit} alt="this is bit"/>
  <img style={{width:"20%"}} src={palm} alt="this is palm"/>
  <img style={{width:"8%"}} src={amaze} alt="this is amaze"/>
  <img style={{width:"8%"}} src={bit} alt="this is bit"/>
  </div>
  <marquee behavior="scroll" direction="left"scrollamount="13">   <img style={{width:"15%"}} src={man} alt="this is paypal " />
  <img style={{width:"10%"}} src={bit} alt="this is bit"/>
  <img style={{width:"25%"}} src={palm} alt="this is palm"/>
  <img style={{width:"10%"}} src={amaze} alt="this is amaze"/>
  <img style={{width:"25%"}} src={palm} alt="this is palm"/>
  <img style={{width:"15%"}} src={man} alt="this is paypal " />
  </marquee>

  <div className="container">
  <div className="row ">
    <div className="col-sm-5  text-dark">
      <h3 style={{fontWeight:"bolder"}}><b>To make money and to have a lot of wealth is Easy</b> </h3>
      <p className="text-warning">Using this site will be easier for you to make money</p>
      <p>Making money is art and working is art and good business is the best art</p>
      <p>To get rich, you have to be making money while you're asleep</p>
      <strong>The interenet makes money for you when you build something that is real and when it matters people</strong>
      <p>Invest your business on this platform and start making money</p>
    
    </div>
    <div className="col-sm-6 ">
      <div>
    <img style={{width:"100%"}} src={money} alt="this is money" />
    </div>
    </div>
  </div>
  </div>
  <div className="container-fluid">
      
      <div id="myCarousel" className="carousel slide bg-inverse w-50 ms-auto me-auto pt-4" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
      
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img className="d-block w-100 h-25" src={trnf1} alt="First slide"/>
          </div>
        
          <div className="carousel-item">
            <img className="d-block w-100" src={trnf3} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 h-50" src={trnf4} alt="forth slide"/>
          </div>
         
          <div className="carousel-item">
            <img className="d-block w-100" src={trnf6} alt="sixth slide"/>
          </div>
        </div>
        
        <Link to={"#myCarousel"} className="carousel-control-prev" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </Link>
        <Link to={"#myCarousel"} className="carousel-control-next" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </Link>
      </div>
      
      </div>
    </main>
      
      
        
    )
}
export default Homepage