import React from 'react'
import style from './Loading.module.css'
import RingLoader from './../../../node_modules/react-spinners/esm/RingLoader';
import { useState } from 'react';


const override= {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
export default function Loading() {
  

  return <>
      <div className="sweet-loading py-10 mt-70">
      
      <RingLoader
        color={'#0aad0a'}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  
  </>
}
