 import { Link } from "react-router-dom";

import "./UserNav.css"

 const UserNav =()=>{
    return (
          <>
<div className="header " ><h3 className="text-center text-white">COOL MONEY DASHBOARD</h3> </div>
  <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>
  <label for="openSidebarMenu" className="sidebarIconToggle">
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>
  <div id="sidebarMenu">
    <ul className="sidebarMenuInner">
    <Link  to={""} style={{textDecoration:"none"}}> <li> Dashboard <span>Back to home page</span></li> </Link>
      <Link  to={"/Dashboardpag/payment"} style={{textDecoration:"none"}}>  <li>Payment</li></Link>

      <Link to={"/Dashboardpag/transfer"}  style={{textDecoration:"none"}}><li>Transfer</li></Link>
      <div className="nav-item dropdown">
                <Link to={"" }  target="_blank" className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown"><strong>Wallet</strong></Link>
                <div className="dropdown-menu">
                    <Link to={""} className="dropdown-item">Palmpay</Link>
                    <Link to={""}  className="dropdown-item">Bitcoin</Link>
                    <Link to={""} className="dropdown-item">Amazon</Link>
                    <Link to={""} className="dropdown-item">paypal</Link>
                </div>
            </div>
            <hr style={{color:"silver"}}/>
      <li><Link to="#4">Profile</Link></li>
      <li><Link to="#" target="_parent">Withdraw</Link></li>
      <li><Link to="#6" target="_blank">Report</Link></li>
      <li><Link to="#6" target="_blank">Logout</Link></li>
    </ul>
  </div>
       </>
    )
}
export default UserNav;