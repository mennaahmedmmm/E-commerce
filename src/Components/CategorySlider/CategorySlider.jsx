import React, { useEffect, useState } from 'react'
import style from './CategorySlider.module.css'
import axios from 'axios'
import Slider  from 'react-slick';
import { Link } from 'react-router-dom';



export default function CategorySlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:700
  };


  const [categories, setCategories] = useState([])
  async function getCategories() {
    let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
    // console.log(data)
    setCategories(data.data)
    
  }
  useEffect(()=>{
getCategories();
  },[])
  return <>
  
    {/* <Slider {...settings}>
    {categories.map((category,index)=>
    <div key={index} className='my-3' >
      <img src={category.image} alt={category.name } className='w-full'/>
    </div>
  )}
   
    </Slider> */}
    {/* {" "}
      <Slider {...settings}>

        {categories.map((category, index) => (
          <Link to={`categoryDetails/${category._id}`}>
            <div
              key={index}
              className="my-3  hover:border-b-2 hover:border-b-main hover:outline-0"
            >

              <img
                src={category.image}
                className="w-full h-[300px] object-cover object-top"
                alt={category.name}
              />
              <h3>{category.name}</h3>
            </div>
          </Link>
        ))}
      </Slider>   */}
      <div className="w-full max-w-6xl mx-auto px-4">
  <Slider {...settings}>
    {categories.map((category, index) => (
      <Link to={`categoryDetails/${category._id}`} key={index}>
        <div className="my-3 hover:border-b-2 hover:border-b-main hover:outline-0 text-center">
          <img
            src={category.image}
            className="w-full h-auto md:h-[300px] object-cover object-center rounded-lg"
            alt={category.name}
          />
          <h3 className="text-lg font-semibold mt-2">{category.name}</h3>
        </div>
      </Link>
    ))}
  </Slider>
</div>
  </>
}
