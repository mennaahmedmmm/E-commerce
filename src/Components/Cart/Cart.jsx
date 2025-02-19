import React, { useContext } from 'react'
import style from './Cart.module.css'
import { CartContext } from '../../context/CartContext'
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom'
import CheckOut from '../CheckOut/CheckOut'

export default function Cart() {
  let {cart,updateProductCountToCart,deleteProductCart}=useContext(CartContext)
  
  return <>
    <h2 className='text-center text-main text-4xl font-bold  my-6 ' >Cart</h2>

{cart?
  <div className="container mx-auto px-6">
  <div className="max-w-screen-lg mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="min-w-full text-sm text-center text-gray-500 dark:text-gray-400">
      <thead className=" bg-green-400 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-4 py-3 whitespace-nowrap">
            <span className="sr-only">Image</span>
          </th>
          <th scope="col" className="text-xl px-4 py-3 whitespace-nowrap">Product</th>
          <th scope="col" className="text-xl px-4 py-3 whitespace-nowrap">Qty</th>
          <th scope="col" className="text-xl px-4 py-3 whitespace-nowrap">Price</th>
          <th scope="col" className="text-xl px-4 py-3 whitespace-nowrap">Action</th>
        </tr>
      </thead>
      <tbody>
      {cart.data.products.map((item ,index)=>
        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <img src={item.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={item.product.title} />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {item.product.title}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <button  onClick={item.count>1?()=>updateProductCountToCart(item.product.id ,item.count-1):()=>deleteProductCart(item.product.id)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button>
            <div>
      
              <span className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> 
              {item.count}
              </span>
              
            </div>
            <button onClick={()=>updateProductCountToCart(item.product.id ,item.count+1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {item.price *item.count}
        </td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
        </td>
      </tr>
      )}
        {[
        
       
        ].map((product, index) => (
          <tr
            key={index}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td className="p-4">
              <img
                src={product.image}
                className="w-12 md:w-24 max-w-full max-h-full rounded-lg"
                alt={product.name}
              />
            </td>
            <td className="px-4 py-4 font-semibold text-gray-900 dark:text-white">
              {product.name}
            </td>
            <td className="px-4 py-4">
              <div className="flex items-center justify-center gap-2">
                <button className="p-1 text-sm font-medium min-w-[2rem] h-6 text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700">
                  -
                </button>
                <span
                  className="bg-gray-50 w-14 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 px-2.5 py-1 dark:bg-gray-700 dark:text-white text-center">
                  1
                  
                </span>
                <button className="p-1 text-sm font-medium min-w-[2rem] h-6 text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700">
                  +
                </button>
              </div>
            </td>
            <td className="px-4 py-4 font-semibold text-gray-900 dark:text-white">
              {product.price}
            </td>
            <td className="px-4 py-4">
              <button
               onClick={()=>{
                deleteProductCart(item.product.id);
                }  } type='text' className="font-medium cursor-pointer  text-red-600 dark:text-red-500 btn hover:text-red-500">
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  <div className='flex justify-between pt-3'>
  <h2 className='text-2xl'>Total Cart Price:<span className='text-main text-2xl'> {cart.data.totalCartPrice}</span></h2>
  <Link to={'/CheckOut'}>  
    <button >check out</button>
</Link>
  </div>
</div>
:<Loading/>}
 

  
    
  </>
}
