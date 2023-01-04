import React from "react";
import { Link } from "react-router-dom";
import { HiCheck, HiMagnifyingGlass, HiOutlineUser } from "react-icons/hi2";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { Badge } from "flowbite-react";

const Navbar = () => {
  return (
    <div className="wrapper  fixed z-50 left-0 right-0 flex justify-between bg-white p-4 rounded-lg w-[80%] mx-auto mt-4 font-nunito">
      <div className="left">
        <Link to="/">Eunoya</Link>
      </div>
      <div className="right flex gap-8">
        <div className="menu font-secondary  lg:flex gap-3 hidden">
          <Link to="products/1" className="navlink ">
            Website Wedding Invitation
          </Link>
          <Link to="products/2" className="navlink ">
            Video Wedding Invitation
          </Link>
          <Link to="products/3" className="navlink">
            Testimonial
          </Link>
          <Link to="products/4" className="navlink">
            Pricing
          </Link>
        </div>
        <div className="icons flex gap-3 items-center ">
          <HiMagnifyingGlass className="icon" />
          <HiOutlineUser className="icon" />
          <MdOutlineFavoriteBorder className="icon " />
          <div className="card-icon flex items-center gap-1 relative">
            <BsCart2 className="icon" />
            <Badge className="rounded-full bg-opacity-60 text-[10px] top-[-10px] absolute right-[-18px]">0</Badge>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
