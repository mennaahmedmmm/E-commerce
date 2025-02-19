import React from "react";
import masterCard from "../../assets/images/MasterCard-Logo.png";
import payPal from "../../assets/images/PayPal.png";
import apple from "../../assets/images/get-it-on-apple-store.png";
import googlePlay from "../../assets/images/get-it-on-google-play-badge.png";
import amazonPay from "../../assets/images/Amazon_Pay_logo.png";

export default function Footer() {
    return (
      <footer className="bg-emerald-50 w-full py-10">
        <div className="container mx-auto px-6 md:px-12">
          {/* App Download Section */}
          <div className="text-center md:text-left mb-8">
            <h5 className="text-2xl font-semibold">Get the FreshCart app</h5>
            <h6 className="text-gray-600 mt-1">
              We will send you a link, open it on your phone to download the app.
            </h6>
            <div className="flex flex-col md:flex-row items-center gap-2 mt-4">
              <input
                type="email"
                placeholder="Email..."
                className="shadow bg-white px-5 py-2 w-full md:w-auto rounded-xl focus:border-b-emerald-500 focus:outline-none"
              />
              <button className="bg-emerald-500 text-white px-4 py-2 rounded-xl hover:bg-emerald-600 transition">
                Share App Link
              </button>
            </div>
          </div>
  
          {/* Payment & Delivery Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Payment Partners */}
            <div className="flex flex-col md:flex-row items-center">
              <h4 className="font-medium text-gray-700 mr-3 mb-3">Payment Partners:</h4>
              <div className="flex space-x-4">
                <img src={amazonPay} alt="Amazon Pay" className="h-6" />
                <img src={masterCard} alt="MasterCard" className="h-6" />
                <img src={payPal} alt="PayPal" className="h-6" />
              </div>
            </div>
  
            {/* Delivery Partners */}
            <div className="flex flex-col md:flex-row items-center">
              <p className="font-medium text-gray-700 mr-3 mb-3">Get deliveries with FreshCart:</p>
              <div className="flex space-x-4">
                <img src={apple} alt="App Store" className="h-10" />
                <img src={ googlePlay } alt="Google Play" className="h-10" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  
  
 



  // return (
  //   <>
  //     {" "}
  //     <div className="footer bg-emerald-50 w-full">
  //       <div className="container p-15  mx-auto">
  //         <h5 className="text-2xl">Get the FreshCart app</h5>
  //         <h6 className="ps-2">
  //           We will send you a link, open it on your phone to download the app
  //         </h6>

  //         <div className="input-box flex items-center gap-2 my-3 ">
  //           <input
  //             type="email"
  //             placeholder="Email..."
  //             className="shadow bg-white px-5 grow py-2 rounded-xl focus:border-b-emerald-50 focus:outline-0"
  //           />
  //           <button className="btn ">Share App Link</button>
  //         </div>

  //         <div className="patern flex justify-between items-center ">
  //           <div className="payment w-[50%] flex items-center">
  //             <p className="me-3">Payment Partners</p>
  //             <img src={amazonPay} alt="amazon" className="w-15 h-auto px-1" />
  //             <img
  //               src={masterCard}
  //               alt="masterCard"
  //               className="w-15 h-auto px-1"
  //             />
  //             <img src={payPal} alt="payPal" className="w-15 h-auto px-1" />
  //           </div>
  //           <div className="delivers w-[50%] flex items-center ">
  //             <p className="me-3">Get deliveries With fresh cart</p>
  //             <img src={apple} alt="apple" className="w-30 h-auto px-1" />
  //             <img
  //               src={googlePlay}
  //               alt="googlePlay"
  //               className="w-30 h-auto px-1"
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
      {/* <div className="w-100 footer py-3">
        <div className="container my-5">
          <footer className="row">
            <div className="mb-4">
              <h5 className="h3">Get the FreshCart app</h5>
              <h6>
                We will send you a link, open it on your phone to download the
                app
              </h6>
            </div>
            <div className="col-12">
              <div className="row justify-content-evenly">
                <div className="col-11 col-md-9 col-lg-10 p-0 px-md-2 mb-2">
                  <input
                    className="form-control py-2"
                    type="text"
                    placeholder="Email .."
                  />
                </div>
                <button
                  className="col-11 col-md-3 col-lg-2 btn bg-main text-white py-2"
                  style={{ height: "fit-content" }}
                >
                  Share App Link
                </button>
              </div>
            </div>
            <div className="line-break"></div>
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-md-6">
                <div className="row d-flex align-items-center">
                  <div className="col-md-4 p-0">Payment Partners</div>
                  <div className="col-1 p-0 me-2">
                    <img className="w-100" src={amazonPay} alt="" />
                  </div>
                  <div className="col-1 p-0 me-2">
                    <img className="w-100" src={masterCard} alt="" />
                  </div>
                  <div className="col-1 p-0 me-2">
                    <img className="w-100" src={payPal} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row d-flex align-items-center flex-row-reverse">
                  <div className="col-2 p-1 ">
                    <img className="w-100" src={appleStore} alt="" />
                  </div>
                  <div className="col-2 p-0">
                    <img className="w-100" src={googlePlay} alt="" />
                  </div>
                  <div className="col-md-8 text-end">
                    Get deliveries with FreshCart
                  </div>
                </div>
              </div>
            </div>
            <div className="line-break"></div>
          </footer>
        </div>
      </div> */}
      
