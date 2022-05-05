// import Dashboardpag from "../Dashboardpag"
// import UserLayout from "../../content/UserLayout"
import cash from "./cashapp.png"
import tra from "./transaction.png"

const Coolmoney =()=>{

    
        
        
     
      
            return (
               
                   <>
                       <div className="container mt-5">
          <div className="row ">
            <div className="col-sm-6  text-info">
              <h3 style={{fontSize:"90px",fontFamily:"fantasy"}}>Welcome to Dashboard  </h3>
              <p style={{color:"deeppink"}}> A place where you will make payment with ease,make transfer without having <br></br>transaction problem, Withdraw your money here to your account.</p>
             
           </div>
            <div className="col-sm-6 text-dark ">
              <img style={{width:"100%", height:"40vh"}} src={cash} alt=" this cash money" />
            </div>
          </div>
          </div>
        
        
        
        
        
        
        
        
          <div className="container mt-5">
          <div className="row ">
            <div className="col-sm-6  text-info">
             <img src={tra} alt=" this is a transaction" />
           </div>
            <div className="col-sm-6 text-dark ">
           <h3> Transactions</h3>
        <p style={{fontSize:"150%"}}>When it is time to dive deep into the Transactions going through your Payment Channels, everything is laid out for you on the Transactions tab. This includes Payment Methods,
         Providers involved, 
        and the status of Transactions. Merchants can generate reports with the data they see fit and export particular transactions.</p>
            </div>
          </div>
          </div>
          
                   </>
            
            )
          
        }
    


export default Coolmoney