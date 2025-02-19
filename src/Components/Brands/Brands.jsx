
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
 import CategoryDetails from "../categoryDetails/CategoryDetails";

export default function Categories() {
  function getCategories() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
  }
  let { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    // select:(data)=>{
    //   data.data.data
    // }
  });
  console.log(data);

 


return (
<>
<h2 className="text-4xl font-bold text-center my-6 text-main "> Brands</h2>

{isLoading ? (
<Loading />
) : (
<div className="flex flex-wrap justify-center md:p-5 lg:p-20">
{data?.data.data.map((category) => (
<div key={category._id} className="sm:w-full md:w-1/2 p-5 lg:w-1/4">
<Link to={`categoryDetails/${CategoryDetails}`}>
  <div className="pb-2 border border-gray-300 rounded-lg 
      hover:shadow-lg hover:scale-105 hover:border-green-500 
      transition-transform duration-300 ease-in-out">
    <img
      className="w-full h-[200px] object-cover rounded-t-lg"
      src={category.image}
      alt={category.name}
    />
    <p className="text-center text-3xl pt-3 text-main font-semibold">
      {category.name}
    </p>
  </div>
</Link>
</div>
))}
</div>
)}
</>
);
}