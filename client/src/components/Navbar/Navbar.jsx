

import React from "react";
import { Link } from "react-router-dom";
import { HiMagnifyingGlass,HiOutlineUser } from 'react-icons/hi2';

const Navbar = () => {
  return (
   <div className="wrapper">
    <div className="left">
        <Link to='/'>Eunoya</Link>
    </div>
    <div className="center">
        <div className="item">
            <Link to='products/1'>Website Wedding Invitation</Link>
            <Link to='products/2'>Video Wedding Invitation</Link>
            <Link to='products/3'>Couple Illustration</Link>
            <Link to='products/3'>Testimonial</Link>
            <Link to='products/3'>Pricing</Link>
        </div>
    </div>
    <div className="right">
        <div className="icons">
          <HiMagnifyingGlass/>
          <HiOutlineUser/>
        </div>
    </div>
   </div>
  );
};

export default Navbar;
