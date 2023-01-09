import { Card } from "flowbite-react";
import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blogs = () => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      img2: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "kini shirt",
      isNew: true,
      oldPrice: 90000,
      price: 85000,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "black t-shirt",
      isNew: true,
      oldPrice: 190000,
      price: 185000,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Rose thsirt",
      isNew: false,
      oldPrice: 150000,
      price: 100000,
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Jeans thsirt",
      isNew: false,
      oldPrice: 95000,
      price: 75000,
    },
  ];

  return (
    <div className="section">
        <div className="header-section mb-10 ">
        <h3 className="title ">Blogs</h3>
        <p className="subtitle">
       sharing is caring
        </p>
      </div>
      <div className="  h-[450px] flex gap-5 overflow-x-auto md:justify-center">
        {data.map((item) => (
          <Link to={`/blogs/${item.id}`} key={item.id}>
            <div className="card w-[350px]"  >
              <div
                className="thumbnail-blog"
                style={{
                  backgroundImage: `url('${item.img}')`,
                }}
              ></div>
              <p className="desc my-2 text-ellipsis">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignissimos, non.
              </p>
              <div className="flex justify-between">
                <p className="author text-sm font-light text-gray-400">oleh : tomtomo</p>
                <div className="flex gap-2 text-sm font-light text-gray-400">
                  <p className="flex gap-1 items-center"> <FaRegCommentDots/> 20</p>
                  <p className="flex gap-1 items-center"> <MdOutlineFavoriteBorder/>  10k</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
