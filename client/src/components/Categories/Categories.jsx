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
      <h5 className="header-section">Categories</h5>
      <div className="category flex gap-5 justify-center">
        {data.map((item) => (
          <Link
            to={`products/${item.id}`}
            key={item.id}
            className="bg-card py-3 px-8 rounded-xl flex gap-4 items-center transition border border-border hover:border-primary hover:-translate-y-1 hover:smooth-shadow "
          >
            <img src={CategoriesWi} className="w-10 h-10" alt="Logo" />
            <div className="categories">
              <div className="category text-start font-medium text-primary uppercase"> {item.category}</div>
              <div className="sub-category">{item.sub_categories}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
