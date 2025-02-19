import React, { useContext, useEffect } from 'react'

import axios from 'axios'
import Products from './../Products/Products';
import { useState} from 'react';
import { Link } from 'react-router-dom';
import ProductDetails from '../ProductDetails/ProductDetails';
import App from '../../App';
import Loading from '../Loading/Loading';
import { CartContext } from '../../context/CartContext';
import { useQuery } from '@tanstack/react-query';

export default function RecentProducts() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
  let {addPrductToCart} =useContext(CartContext)

//   async function getproducts() {
//     let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
//     console.log(data)
//     setProducts(data.data )
//     setLoading(false)
    
//   }
  // useEffect(()=>{
  //   getproducts();
  // },[])

  function getproducts() {
  return  axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }
  let {data ,isLoading,isFetching ,isError}= useQuery({
    queryKey:['recentProducts'],
    queryFn:getproducts
  })
  console.log(data?.data.data)
  
  return (
    <>
      <h2 className="text-4xl font-bold text-center my-6 text-main "> Products</h2>
  
      {isLoading ?
      <Loading/>
      : (
        <div className="container mx-auto px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {data?.data.data.map((product) => (
              <div key={product.id} className=" p-2 rounded-lg product ">
                <Link to ={`/productdetails/${product.id}`}>
                <img
                  src={product.imageCover}
                  className="w-full h-44 object-contain rounded-lg"
                  alt={product.title}
                />
                <h3 className="text-green-600 font-semibold mt-2">{product.category.name}</h3>
                <h3 className="text-xl font-medium">
                  {product.title.split(" ", 2).join(" ")}
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg font-semibold">{product.price} EGP</span>
                  <span className="text-yellow-500 flex items-center">
                    <i className="fas fa-star mr-1"></i>
                    {product.ratingsAverage}
                  </span>
                </div>
              
                </Link>
                <button onClick={()=>addPrductToCart(product.id)} className="w-full btn">
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
  
}
