import React from "react";
import Card from "../Card/CardProduct";

const FeaturePorducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      img2: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "paradise t-shirt",
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
        <h3 className="title ">{type} Products</h3>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
          distinctio?
        </p>
      </div>
      <div className="card-products flex gap-5 overflow-x-auto px-5 md:justify-center">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturePorducts;
