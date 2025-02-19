import React, { useContext } from 'react'
import style from './Home.module.css'
import { UserContext } from './../../context/UserContext';
import RecentProducts from './../RecentProducts/RecentProducts';
import Loading from '../Loading/Loading';
import MainSlider from '../MainSlider/MainSlider';
import CategorySlider from '../CategorySlider/CategorySlider';

export default function Home() {
  
  return <>
  <MainSlider/>
  <CategorySlider/>
<RecentProducts/>
  
  </>
}
