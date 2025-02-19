import React from 'react'
import style from './MainSlider.module.css'
import slide1  from '../../assets/images/slider-image-1.jpeg'
import slide2  from '../../assets/images/slider-image-2.jpeg'
import slide3  from '../../assets/images/slider-image-3.jpeg'
import banner1 from '../../assets/images/grocery-banner.png'
import banner2 from '../../assets/images/grocery-banner-2.jpeg'
import  Slider  from 'react-slick';

export default function MainSlider() {
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
  
  return <>
  {/* <div className='flex'>
    <div className='w-3/4'>
    <Slider {...settings}>

<img src={slide1} className='w-full h-[300px]' alt=''/>
<img src={slide2} className='w-full h-[300px]' alt=''/>
<img src={slide3} className='w-full h-[300px]' alt=''/>
</Slider>  
    </div>
    <div className='w-1/4'>
      <img src={banner1} className='w-full h-[250]' alt=""/>
      <img src={banner2} className='w-full h-[250]' alt=""/>
      
  
    </div>
  
  </div>
   */}
   <div className="flex ">
  {/* Slider Section */}
  <div className="w-full md:w-3/4">
    <Slider {...settings}>
      <img src={slide1} className="w-full h-auto md:h-[307px]  px-2" alt="" />
      <img src={slide2} className="w-full h-auto md:h-[307px]  px-2" alt="" />
      <img src={slide3} className="w-full h-auto md:h-[307px]  px-2" alt="" />
    </Slider>  
  </div>

  {/* Side Banners */}
  <div className="w-full md:w-1/4 flex flex-col gap-2">
    <img src={banner1} className="w-full h-auto md:h-[150px] object-cover" alt="" />
    <img src={banner2} className="w-full h-auto md:h-[150px] object-cover" alt="" />
  </div>
</div>
  </>
}
