import { Link } from "react-router-dom"
const Naavbar = ()=>{
    return(
        // <h2>this navbar</h2>
        
<nav className="navbar navbar-expand-sm navbar-light bg-light ">
<div className="container">
    <Link to={"/"} className="navbar-brand text-info" style={{fontWeight:"bolder"}}><b>COOL MONEY </b></Link>
    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto">
            <Link to={"/"} className="nav-item nav-link active">Home</Link>
            <Link to={"/profile"}  className="nav-item nav-link text-primary">Profile</Link>
            <div className="nav-item dropdown">
                <Link to={""} className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Wallet</Link>
                <div className="dropdown-menu">
                    <Link to={""} className="dropdown-item">Palmpay</Link>
                    <Link to={""}  className="dropdown-item">Bitcoin</Link>
                    <Link to={""} className="dropdown-item">Amazon</Link>
                    <Link to={""} className="dropdown-item">paypal</Link>
                </div>
            </div>
            <Link to={""}  className="nav-item nav-link disabled" tabindex="-1">Reports</Link>
        </div>
        <div className="navbar-nav " style={{marginRight:"10%"}}>
            <Link to={"/loginpage"} className="nav-item nav-link">Loginpage</Link>
            <Link to={"/Sign"} className="nav-item nav-link">Create an account</Link>
        </div>
    </div>
</div>
</nav>
 

    )
}
export default Naavbar