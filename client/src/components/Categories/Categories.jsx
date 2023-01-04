import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const data = [
    {
      id: 1,
      category: "Website Invitation Wedding",
      icon: "+",
    },
    {
      id: 2,
      category: "Video Invitation Wedding",
      icon: "+",
    },
  ];

  return (
    <div className="section">
      <h5 className="title">Categories</h5>
      <div className="category flex gap-3 justify-center">
        {data.map((item) => (
          <Link to={`products/${item.id}`}
            key={item.id}
            className="bg-primary px-3 py-2 rounded-lg text-white"
          >
            {item.category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
