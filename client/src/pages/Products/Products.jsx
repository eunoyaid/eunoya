import { Checkbox, Label } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="flex flex-row gap-10 px-5 py-3">
      <div className="left h-full  basis-1/4 p-10">
        <div className="filter-item my-3">
          <h2>Ketegori Produk</h2>
          <div className="input-item  my-3 ">
            <div className="mb-4 flex items-center gap-2">
              <Checkbox id="1" value={1} />
              <Label htmlFor="1">Website Wedding Invitation</Label>
            </div>
            <div className="mb-4 flex items-center gap-2">
              <Checkbox id="2" value={2} />
              <Label htmlFor="2">Video Wedding Invitation</Label>
            </div>
          </div>
        </div>
        <div className="filter-item my-3">
          <h2>Filter Berdasarkan Harga</h2>
          <div className="input-item mt-3 flex items-center gap-2 ">
            <span>0</span>
            <input
              id="default-range"
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filter-item my-3">
          <h2>Urutkan Berdasarkan</h2>
          <div className="input-item mt-3 flex items-center gap-2 ">
            <input
              id="asc"
              type="radio"
              value="asc"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Harga Tertingi</label>
          </div>
          <div className="input-item mt-3 flex items-center gap-2 ">
            <input
              id="desc"
              type="radio"
              value="desc"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Harga Terendah</label>
          </div>
        </div>
      </div>

      <div className="right basis-3/4">
        <img
          className="catImg h-[300px] w-full object-cover mb-10 rounded-lg "
          src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          alt=""
        />

        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
