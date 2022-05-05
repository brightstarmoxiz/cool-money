import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../providers/authProvider";

const Cart = () => {
   
    const {carts,setCart} = useContext(CartContext)

   const deleteItem = (id) => {
       console.log(id);
       let newCarts = carts.filter(item =>{
            return  item.id !== id
        })
        setCart(newCarts)
        console.log(carts);
    }
       
    return ( 
        <main className="p-4">
                
                { carts.map((m, index)=> 
                    <div key={index} className="card card-body m-3 shadow">
                            <img src={m.image} alt="" />
                            <h1>{m.title}</h1>
                            <h1> N {m.price}</h1>      
                            <button className="btn btn-danger" onClick={()=>{
                            // console.log(m.id);
                            deleteItem(m.id)}}>Delete Item</button>           
                    </div>
                    
                )}
        </main>
     );
}
 
export default Cart;