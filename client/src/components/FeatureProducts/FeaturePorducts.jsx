import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/CardProduct";

const FeaturePorducts = ({ type }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          import.meta.env.VITE_REACT_APP_API_URL + "/products?populate=*",
          {
            headers: {
              Authorization:
                "bearer" + import.meta.env.VITE_REACT_APP_API_TOKEN,
            },
          }
        );
        setData(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="section">
      <div className="header-section mb-10 ">
        <h3 className="title ">{type} Products</h3>
        <p className="subtitle">
          temukan tema pilihan mu atau{" "}
          <a href="#" className="underline">
            buat dengan ide mu sendiri
          </a>
        </p>
      </div>
      <div className="card-products h-[450px] flex gap-5 overflow-x-auto md:justify-center">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturePorducts;
