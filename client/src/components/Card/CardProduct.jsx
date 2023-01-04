import { Badge, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const CardProduct = ({ item }) => {
  return (
    <div className=" relative ">
      <Link to={`/product/${item.id}`}>
        <Card imgSrc={item.img} className='w-[232px] text-start'>
          {item.isNew ? <Badge color="info" className="absolute left-3 top-3">New</Badge> : ""}

          <p className="text-sm capitalize tracking-tight dark:text-white">
            {item.title}
          </p>
          {/* <Badge color="info" className="inline-block">Website invitation</Badge> */}

          <div className="flex items-center justify-between">
            <p className="text-md flex justify-between dark:text-white">
              Rp {item.price}
            </p>
              <span className="text-sm line-through text-gray-400">Rp {item.oldPrice}</span>
     
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default CardProduct;
