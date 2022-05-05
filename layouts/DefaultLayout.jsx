 
 import Navbar  from "../components/Navbar"

 const DefaultLayout = ({children})=>{

    return(
        <main>
        <Navbar/> 
        {children}
          </main>
    );
}
export default  DefaultLayout;