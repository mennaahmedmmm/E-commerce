import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export let CartContext= createContext();
export default function CartContextProvider ({children}) {
    const [cart, setCart] = useState(null); 

    const headers ={
        token :localStorage.getItem('userToken')
    }

 async function addPrductToCart(productId) {
    try {
        let {data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
            productId
        },{
            headers,

            });
            console.log(data);
            getProductsCart()
            toast.success(data.message)
    
        
    } catch (err) {
        console.log(err)
        
    }
    
}
async function getProductsCart() {
    try {
        let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,
        {
            headers,

            });
            console.log(data)
            setCart(data);
            
    
        
    } catch (err) {
        console.log(err)
        
    }
    
}
async function updateProductCountToCart(productId ,count) {
    try {
        let {data}=await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
            {
       count
        },
            {
            headers

            });
            console.log(data)
            setCart(data);
            toast.success(data.status)   
    } catch (err) {
        console.log(err)
        
    }
    
}
async function deleteProductCart(productId ,count) {
    try {
        let {data}=await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
            {
            headers

            });
            console.log(data)
            setCart(data);
            toast.success(data.status)   
    } catch (err) {
        console.log(err)
        
    }
    
}
useEffect(()=>{
    getProductsCart();
},[])
    return <CartContext.Provider value={{addPrductToCart,cart,deleteProductCart,updateProductCountToCart}}>
        {children}
    </CartContext.Provider>
}