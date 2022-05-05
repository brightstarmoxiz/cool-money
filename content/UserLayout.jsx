
import UserNav from "../components/UserNav"

const UserLayout =({children}) =>{

    return(
       <main>
       
          <UserNav/>
       
          {children}
       
       </main>
    );
}
export default  UserLayout;