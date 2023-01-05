import { Badge, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const CardProduct = ({ item }) => {
  return (
    <div className="flex ">
      <Link to={`/product/${item.id}`}>
        <div className="w-[280px] flex-wrap ">
          <div className="bg-white rounded-lg ">
            <div
              className="bg-gray-400 h-64 rounded-t-lg p-4 bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url('${item.img}')`,
              }}
            >
              <div className="text-right">
                <button className="text-gray-300 hover:text-pink-500 p-2 rounded-full">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex justify-between items-start px-2 pt-2">
              <div className="p-2 flex-grow">
                <h1 className="font-medium text-xl capitalize">
                  {" "}
                  {item.title}{" "}
                </h1>
                {/* <p className="text-gray-500 font-nunito">category</p> */}
              </div>
              <div className="p-2 text-right">
                <div className="text-teal-500 font-semibold text-lg ">
                  Rp{item.price}
                </div>
                <div className="text-xs text-gray-500 line-through ">
                  Rp {item.oldPrice}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProduct;
