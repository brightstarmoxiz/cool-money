// import {useState } from "react"
// import { createContext } from "react"


// // let data ={
// //     name : "brightstar moxiz",
// //     email : "brighstar@gnmail.com",
   
// // }
// const AuthContext = createContext ()
//  const AuthProvider = ({children})=>{ 
  

//   const [user,setUser] =useState ({
//     name:"Samuel Henshew",
//     email: "samuel@brightsater.com"
//   })

//     return(
//       <AuthContext.Provider value={{user, setUser}}>
//          {children}
//       </AuthContext.Provider>
//     )
// }

// export  {AuthProvider};


// export default AuthContext;







import { createContext } from "react";
import { useState, useEffect } from "react";


export const AuthContext = createContext({})
export const CartContext = createContext([])
export const AuthProvider = ({children}) => { 

    const [data, setData] = useState([])
    const [carts,setCart] = useState([])
    
    console.log(carts);

  
    return (
        <CartContext.Provider value={{carts,setCart}}>
            <AuthContext.Provider value={{data,setData}}>
                {children}
            </AuthContext.Provider>
        </CartContext.Provider>
    )
};

