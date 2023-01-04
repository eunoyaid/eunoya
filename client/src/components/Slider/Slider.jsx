import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Carousel } from "flowbite-react";


const Slider = () => {
  const data = [
    "https://images.unsplash.com/photo-1671726805768-575f88de945a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1672746509961-6340a9808970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1671725501844-1e6d0081bf64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  ];
  return (
    // <div classNameName="slider h-[100vh] w-[100vw]">
    //   <div classNameName=" w-[300vw] flex h-full">
    //     <img
    //       classNameName="w-[100vw] h-full object-cover "
    //       src={data[0]}
    //       alt=""
    //     />
    //     <img
    //       classNameName="w-[100vw] h-full object-cover "
    //       src={data[1]}
    //       alt=""
    //     />
    //     <img
    //       classNameName="w-[100vw] h-full object-cover "
    //       src={data[2]}
    //       alt=""
    //     />
    //   </div>
    //   <div classNameName="icons w-full absolute flex left-0 right-0 bottom-[100px] m-auto z-20 bg-primary">
    //     <div classNameName="icon flex justify-center items-center w-50">
    //       <BsChevronLeft />
    //     </div>
    //     <div classNameName="icon flex justify-center items-center w-50">
    //       <BsChevronRight />
    //     </div>
    //   </div>
    // </div>
    <div className="h-100 sm:h-64 xl:h-[100vh] 2xl:h-96">
    <Carousel>
      <img className="object-cover"
        src={data[0]}
        alt="..."
      />
      <img className="object-cover "
        src={data[1]}
        alt="..."
      />
      <img className="object-cover "
        src={data[2]}
        alt="..."
      />
     
    </Carousel>
  </div>

  
  );
};

export default Slider;
