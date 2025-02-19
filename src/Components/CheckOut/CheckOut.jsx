// import React, { useState } from 'react'
// import style from './CheckOut.module.css'
// import { useFormik } from 'formik'
// import * as Yup from 'yup'
// import axios from 'axios'
// import { useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { UserContext } from '../../context/UserContext'
// import { CartContext } from '../../context/CartContext'
// import toast from 'react-hot-toast'
// export default function CheckOut() {
// const [apiError, setApiError] = useState(null)
// const [loading, setLoading] = useState(false)
// let {setUserToken}=useContext(UserContext)
// let {cart}=useContext(CartContext)



// async function handleCheckOut(shippingAddress){
//   try{
//     setLoading(true)
//     let {data}= await axios.post( `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.cartId}?url=http://localhost:5173`,
//     {
//     shippingAddress
//   },{
//     headers:{
//       token:localStorage.getItem(`usertoken`)
//     }
//   });
//     console.log(data);
//     toast.success(data.status)
//     location.href=data.session.url
  
//   }catch(err){

// //   console.log(err.response.data.message);
// // setApiError(err.response.data.message)
// setLoading(false)
//   }
 
//   }

 
//   const formik =useFormik({
//     initialValues: {
//          city :'',
//          details:'',
        
//          phone:''
//     },onSubmit:handleCheckOut
   
//   })


//  return <>
// <form onSubmit={formik.handleSubmit}  className="sm:w-1/2  pt-5  mt-10 mx-auto">
 
//   <div className="relative z-0 w-full mb-5 group px-4 ">
//       <input type="text" name="city" id="city" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main-500 focus:outline-none focus:ring-0 focus:border-main-600 peer" placeholder=" "  />
//       <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main-600 peer-focus:dark:text-main-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your city</label>
//   </div>
//   <div className="relative z-0 w-full mb-5 group px-4 ">
//       <input type="text" name="details" id="details" value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main-500 focus:outline-none focus:ring-0 focus:border-main-600 peer" placeholder=" "  />
//       <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main-600 peer-focus:dark:text-main-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your details</label>
//   </div>
//   <div className="relative z-0 w-full mb-5 group px-4 ">
//       <input type="tel" name="phone" id="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main-500 focus:outline-none focus:ring-0 focus:border-main-600 peer" placeholder=" "  />
//       <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main-600 peer-focus:dark:text-main-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your phone</label>
//   </div>
  
 
// {loading ? <button type="submit" className= "w-36 ml-4 text-white   bg-main-700 hover:bg-main-800 focus:ring-4 focus:outline-none focus:ring-green-light font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-main-600 dark:hover:bg-main-700 dark:focus:ring-main-800">
//     <i className='fas fa-spinner fa-spin '></i>
//   </button>:  <button type="submit" className= "w-36 ml-4 text-white   bg-main-700 hover:bg-main-800 focus:ring-4 focus:outline-none focus:ring-green-light font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-main-600 dark:hover:bg-main-700 dark:focus:ring-main-800">Submit</button>
// }
 

//   </form>
//   </>
// }

import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-hot-toast";

export default function Checkout() {
  const [loading, setLoading] = useState(false);
  let { cart } = useContext(CartContext);
  async function handleChekout(shippingAddress) {
    try {
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.cartId}?url=http://localhost:5173
`,
        shippingAddress,
        {
          headers: {
            token: localStorage.getItem("userToken"),
          },
        }
      );
      console.log(data);
      toast.success(data.status);
      location.href = data.session.url;
    } catch (error) {
      console.log(error);
    //   location.href = data.session.url;
    }
  }
  let formik = useFormik({
    initialValues: {
      city: "",
      details: "",
      phone: "",
    },
    onSubmit: handleChekout,
  });
  return (
    <>
      <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
        <div className="mb-5 relative">
          <i class="fa-solid fa-city z-10 start-3 top-[60%] text-main  absolute"></i>{" "}
          <label
            htmlFor="city"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your city
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
            type="city"
            id="city"
            className="ps-8 relative bg-gray-50 rounded-3xl border-2 border-gray-300 text-gray-900 text-sm outline-0 focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main"
            placeholder=""
          />
        </div>
        {formik.errors.city && formik.touched.city && (
          <div
            class="px-4 py-1 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            {formik.errors.city}
          </div>
        )}

        <div className="mb-5 relative">
          <i class="fa-solid fa-file-invoice z-10 start-3 top-[60%] text-main  absolute"></i>{" "}
          <label
            htmlFor="details"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your details
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.details}
            type="details"
            id="details"
            className="ps-8 relative bg-gray-50 rounded-3xl border-2 border-gray-300 text-gray-900 text-sm outline-0 focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main"
            placeholder="details"
          />
        </div>
        {formik.errors.details && formik.touched.details && (
          <div
            class="px-4 py-1 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            {formik.errors.details}
          </div>
        )}

        <div className="mb-6 relative">
          <i className="fa-solid fa-phone absolute z-10 start-3 top-[60%] text-main "></i>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {" "}
            phone
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            type="tel"
            id="phone"
            className="ps-8 relative bg-gray-50 rounded-3xl border-2 border-gray-300 text-gray-900 text-sm outline-0 focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main"
            placeholder="phone"
          />
        </div>

        {loading ? (
          <button
            type="submit"
            className="text-white bg-main hover:bg-main focus:ring-4 focus:outline-none focus:ring-main-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-main-600 dark:hover:bg-main dark:focus:ring-main-800 cursor-pointer"
          >
            <i className="fas fa-spinner fa-spin"></i>{" "}
          </button>
        ) : (
          <button
            type="submit"
            className=" text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-main-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-main-600 dark:hover:bg-main dark:focus:ring-main-800 cursor-pointer"
          >
            Pay Now
          </button>
        )}
      </form>
    </>
  );
}
