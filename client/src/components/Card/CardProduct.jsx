import { Badge, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const CardProduct = ({ item }) => {
  return (
    <div className="flex ">
      <Link to={`/product/${item.id}`}>
        <div className="w-[280px] flex-wrap ">
          <div className="card">
            <div
              className="thumbnail"
              style={{
                backgroundImage: `url('${
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  item.attributes.img.data.attributes.url
                }')`,
              }}
            >
              {/* <img
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  item.attributes.img.data.attributes.url
                }
                alt=""
              /> */}

              {item?.attributes.isNew && (
                <span className="py-0.5 my-1.5 px-3 items-start flex w-fit bg-card rounded-lg text-primary  text-[12px] capitalize">
                  terbaru
                </span>
              )}
            </div>
            <div className="flex mt-3 justify-between items-center mb-1 pt-2">
              <h1 className="font-medium text-xl capitalize">
                {item?.attributes.title}
              </h1>
              <div className=" flex gap-1 items-center ">
                <div className="discount">
                  {item.attributes.discount ? (
                    <p className=" text-xs py-0.5 my-1.5 px-2 items-start flex w-fit bg-red-400 rounded-lg   text-white">
                      -{item.attributes.discount}%
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="categories py-0.5 my-1.5 px-3 items-start flex w-fit bg-card rounded-lg text-primary lowercase text-[12px] ">
              {/* {data.map((item) => (
                <Card item={item} key={item.id} />
              ))} */}
              {item.attributes.categories?.data.map((value, index) => (
                <h1 className="mr-1" key={value.id}>
                  {value.attributes?.title}{" "}
                </h1>
              ))}
              {item.attributes.sub_categories?.data.map((value, index) => (
                <h1 className="mr-1" key={value.id}>
                  {value.attributes?.title}{" "}
                </h1>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="text-primary font-medium text-md ">
                Rp{item?.attributes.price}
              </div>

              <div className="text-xs text-gray-500 animate-pulse line-through ">
                {item.attributes.discount ? (
                  <p>
                    {" "}
                    Rp{" "}
                    {item.attributes.price +
                      (item.attributes.price * item.attributes.discount) /
                        100}{" "}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProduct;
