import { Button } from "flowbite-react";
import React, { useState } from "react";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    "https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  ];
  return (
    <div className="product-details  mx-20 pt-24 pb-10 gap-10">
      <div className="flex gap-5">
        <div className="product-img flex-1">
          <div className="main-img">
            <img
              className="rounded-lg w-full max-h-[800px] object-cover"
              src={images[selectedImg]}
              alt=""
            />
          </div>
          <div className="images flex gap-5 mt-5 flex-wrap ">
            <img
              className="cursor-pointer w-20 h-20 mb-5 rounded-lg object-cover"
              src={images[0]}
              alt=""
              onClick={(e) => setSelectedImg(0)}
            />
            <img
              className="cursor-pointer w-20 h-20 mb-5 rounded-lg object-cover"
              src={images[1]}
              alt=""
              onClick={(e) => setSelectedImg(1)}
            />
          </div>
        </div>

        <div className="card-desc h-fit rounded-lg p-5 bg-white flex-1 ">
          <div className="card-header flex justify-between">
            <h4 className="font-semibold text-xl product-name font-secondary capitalize">
              tema jowo
              <br />
             
            </h4>
            <p className="price">Rp95000</p>
          </div>
          <p>category</p>
          <div className="card-body features">
            <ul className="list-feature">
              <li>fitur 1</li>
              <li>fitur 2</li>
              <li>fitur 3</li>
              <li>fitur 4</li>
              <li>fitur 5</li>
            </ul>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis tempore, beatae sapiente culpa distinctio veniam itaque dolor modi necessitatibus.</p>
          </div>
          <div className="card-footer flex gap-2">
            <div>
              <Button>Pilih Tema</Button>
            </div>
            <div>
              <Button color="gray">Lihat Tema</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
