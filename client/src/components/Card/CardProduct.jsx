import { Badge, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const CardProduct = ({ item }) => {
  return (
    <div className="flex ">
      <Link to={`/product/${item.id}`}>
        <div className="w-[280px] flex-wrap ">
          <div className="card">
            <div
              className="thumbnail"
              style={{
                backgroundImage: `url('${item.img}')`,
              }}
            >

            </div>
            <div className="flex mt-3 justify-between items-start mb-1 pt-2">
              <h1 className="font-medium text-xl capitalize">{item.title}</h1>
              <div>
                <button className="text-gray-300  flex gap-1 items-center  hover:text-pink-500  rounded-full">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                    />
                  </svg>
                  <span className="text-xs"> (0)</span>
                </button>
              </div>
            </div>
            <div className="categories py-0.5 my-1.5 px-4 items-start flex w-fit bg-card rounded-lg text-primary lowercase text-[12px] ">
              categories
            </div>
            <div className="flex items-center justify-between">
              <div className="text-primary font-medium text-md ">
                Rp{item.price}
              </div>
              <div className="text-xs text-gray-500 animate-pulse line-through ">
                Rp {item.oldPrice}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProduct;
