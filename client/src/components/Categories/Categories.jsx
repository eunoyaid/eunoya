import React from "react";
import { Link } from "react-router-dom";
import CategoriesWi from "../../assets/categoriesWi.svg";

const Categories = () => {
  const data = [
    {
      id: 1,
      category: "Website",
      sub_categories: " Wedding Invitation",
      icon: "+",
    },
    {
      id: 2,
      category: "Video",
      sub_categories: " Wedding Invitation",
      icon: "+",
    },
  ];

  return (
    <div className="section">
      <h5 className="title">Categories</h5>
      <div className="category flex gap-8 justify-center">
        {data.map((item) => (
          <Link
            to={`products/${item.id}`}
            key={item.id}
            className="bg-card py-3 px-8 rounded-xl flex gap-4 items-center transition border border-border hover:border-primary hover:-translate-y-1 hover:smooth-shadow "
          >
            <img src={CategoriesWi} className='w-8 h-8' alt="Logo" />
            {item.category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
