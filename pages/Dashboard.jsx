// import { useContext } from "react"
// import AuthContext from "../content/Authprovider"
// import DefaultLayout from "../layouts/DefaultLayout"

// import { useContext, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import AuthContext from "../content/AuthProvider";

// const Dashboard =() =>{

// const {name} = useContext (AuthContext)

//     return(
//        <DefaultLayout>
//             <h2>{name}</h2>
//        </DefaultLayout>
//     )
// }
// export default  Dashboard





   
// import { useContext, useEffect } from "react";
// import AuthContext from "../content/AuthProvider";
// import DefaultLayout from "../layouts/DefaultLayout";



// const Dashboard = ()=> {

//    const {user, setUser} = useContext(AuthContext)


//    const f = ()=> {
//      fetch("https://fakestoreapi.com/products")
//      .then(re => re.json)
//         .then(data =>{
//             console.log(data)
//         })
//    }

   


//     return (
//        <DefaultLayout>
//             <h1>{user.name}</h1>
//             <button onClick={()=> f()}>change User</button>
//        </DefaultLayout>
//     );
// }

import axios from "axios";
 import { useState } from "react/";
import { Button, notification, Space } from 'antd';
import Navbar from "../components/Navbar";
import { useEffect } from "react";
 import { useContext } from "react";
import {AuthContext, CartContext} from "../content/AuthProvider";

const Dashboard = (props) => {

    const {data, setData} = useContext(AuthContext)
    const {carts,setCart} = useContext(CartContext)

    const [loading, setLoading] = useState(false)

    console.log(carts);

    const getDataAxios = async () =>{
        try {
            setLoading(true)
            const response = await axios.get("https://fakestoreapi.com/products");
            notification.success({
                message: 'Login ',
                description:
                  'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
              });
            console.log(response);
            setData(response.data)
        } catch (error) {
            setLoading(true)
            console.log(error);
            notification.error({
                message: 'Notification Title',
                description:
                  'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
              });
        }
        finally{
            setLoading(false)
        }
    }

    const addToCart= (id) =>{
        console.log(carts)
        carts.push(data[id-1])
        setCart((carts)=>{
            return [...carts] 
        })
    }




    return ( 
    <main>  
        <Navbar />
        {/* {user.name} {user.email}

        <button className="btn btn-success" onClick={()=> setUser({...user,name:"omololu"})}>Change User name</button>  */}
        
            <button className="btn bg-danger" disabled={loading} onClick={getDataAxios}>
                {loading && <span className="spinner-border spinner-border-sm"></span>}
                <span>Axios Request</span>
            </button>

            <main className="p-4">
                {  data.map((m, index)=> 
                    <div key={m.id} className="card card-body m-3 shadow">
                       <span>{index}</span>
                            <img src={m.image} alt="" />
                            <h1>{m.title}</h1>
                            <h1>{m.price}</h1>
                            
                        <button className="btn btn-danger" onClick={()=>{
                            // console.log(m.id);
                            addToCart(m.id)}}>Add To Cart</button>                 
                    </div>
                )}
            </main>
      
        
    </main> );
}
 
i

export default Dashboard;
