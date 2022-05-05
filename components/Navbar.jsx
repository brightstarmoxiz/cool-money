// import { useContext } from "react"
import { Link } from "react-router-dom"
// import AuthContext from "../content/AuthProvider"
const Navbar = ()=>{
// const {user}=useContext(AuthContext)

    return (
//         <nav style={styles.Navbar}>
//         <h1>Logo</h1>
//         <button>Login</button>
//         </nav>
//     );
// }

// const styles = {
//     Navbar:{
//         backgroundColor:"blue",
//         padding:"10px",
//         display:"flex",
//         justifyContent:"space-around"
//     }
<nav className="navbar bg-light p-3">
<h1 className="text-danger">Logo</h1>
<ul className="nav">
<li className="nav-item">
{/* <Link to={"/"} className="nav-link">{user.name}</Link> */}
</li>
<li className="nav-item">
<Link to={"/login"} className="nav-link">Login</Link>
</li>

<li className="nav-item">
<Link to={"/dashboard"} className="nav-link">DASHBOARD</Link>
</li>
<li className="nav-item">
<Link to={"/User"} className="nav-link">User</Link>
</li>
<li className="nav-item">
<Link to={"/signin/buyer/canada"} className="nav-link bg-success text-white">buyers Signup</Link>
<Link to={"/signin/seller/new-york"} className="nav-link bg-info text-white">seller Signup</Link>
</li>
</ul>
</nav>
    )
}
// AuthContext, AuthProvider, CartContext

export default Navbar