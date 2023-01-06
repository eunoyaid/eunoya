import React from "react";
import { Link } from "react-router-dom";
import { HiCheck, HiMagnifyingGlass, HiOutlineUser } from "react-icons/hi2";
import { RiSettingsLine } from "react-icons/ri";
import { MdOutlineFavoriteBorder, MdLogout } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { Avatar,  Dropdown, Navbar } from "flowbite-react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import logo from "../../assets/logoSmall.svg";


const NavbarEunoya = () => {
  const [openCart, setOpenCart] = useState(false);

  return (
   
    <div>
      <Navbar
        fluid={true}
        className=" fixed z-20 left-0 right-0  bg-white smooth-shadow   rounded-xl w-[90%] mx-auto mt-4 font-nunito"
      >
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="flex md:order-2">
        <HiMagnifyingGlass className="icon my-auto h-6 w-6 mr-3" />
        <div className="card-icon flex items-center gap-1 mr-3 relative">
              <BsCart2
                className="icon h-6 w-6 "
                onClick={() => setOpenCart(!openCart)}
              />
            
              <span className="bg-primary text-xs font-medium text-white text-center p-1 leading-none rounded-full  dark:bg-blue-900 dark:text-primary absolute -translate-y-1/2 translate-x-1/2 left-auto top-2 right-0">0</span>

            </div>
            


          <Dropdown
            className="mt-3 rounded-lg"
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              
                
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              
            </Dropdown.Header>

            <Dropdown.Item><MdOutlineFavoriteBorder className="icon mr-2" /> Favorite</Dropdown.Item>
            <Dropdown.Item> <RiSettingsLine className="mr-2"/> Setting</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item> <MdLogout className="mr-2"/> Log out</Dropdown.Item>
          </Dropdown>
        </div>

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
      </Navbar>
      {openCart && <Cart />}
    </div>
  );
};

export default NavbarEunoya;
