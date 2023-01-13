import { Button } from "flowbite-react";
import React, { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { AiFillPlayCircle, AiOutlineCheckCircle } from "react-icons/ai";
import Comments from "../../components/Comments/Comments";
import FormOrder from "../../components/FormOrder/FormOrder";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);


  const images = [
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    "https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  ];
  return (
    <div className="product-details  md:mx-80 pt-24 pb-10 gap-10">
      <div className="flex  gap-5">
        <div className="left flex-1">
          <div className="product-img ">
            <div className="main-img relative rounded-lg w-full h-[445px] object-cover bg-gray-500 ">
              {/* <img
                className="rounded-lg w-full h-[445px] object-cover"
                src={images[selectedImg]}
                alt=""
              /> */}
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse ">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="13" y="14" width="23" height="22" fill="white" />
                  <path
                    d="M24 4C35.0232 4 44 12.9725 44 24.0116C44 35.0275 35.0232 44 24 44C12.9768 44 4 35.0275 4 24.0116C4 12.9725 12.9768 4 24 4ZM21.722 16.0598C21.2973 16.0598 20.8919 16.1563 20.5058 16.3493C20.0232 16.6194 19.6371 17.0439 19.4247 17.5456C19.2896 17.8929 19.0772 18.9349 19.0772 18.9542C18.8649 20.0926 18.749 21.945 18.749 23.9904C18.749 25.9411 18.8649 27.7144 19.0386 28.8722C19.0579 28.8915 19.2703 30.1843 19.5019 30.6281C19.9266 31.4385 20.7568 31.9402 21.6448 31.9402H21.722C22.3012 31.9209 23.5174 31.4192 23.5174 31.3999C25.5637 30.5509 29.5985 27.9074 31.2201 26.1515L31.3359 26.0357C31.5483 25.8234 31.8185 25.4954 31.8764 25.4182C32.1853 25.013 32.3398 24.5113 32.3398 24.0116C32.3398 23.4501 32.166 22.9291 31.8378 22.5046C31.7606 22.4274 31.471 22.0994 31.2008 21.8292C29.6178 20.1312 25.4865 17.3526 23.3243 16.5036C22.9961 16.3705 22.166 16.0791 21.722 16.0598Z"
                    fill="#ED931E"
                  />
                </svg>
              </button>
            </div>
            <div className="images flex gap-5 mt-5 flex-wrap ">
              <img
                className="cursor-pointer w-10 h-10 mb-5 rounded-lg object-cover"
                src={images[0]}
                alt=""
                onClick={(e) => setSelectedImg(0)}
              />
              <img
                className="cursor-pointer w-10 h-10 mb-5 rounded-lg object-cover"
                src={images[1]}
                alt=""
                onClick={(e) => setSelectedImg(1)}
              />
            </div>
          </div>
        </div>

        <div className="right relative  flex-1">
          <div className="card-desc h-fit rounded-lg border-border-card border p-5 bg-white ">
            <div className="card-header ">
              <div className="flex  justify-between items-center mb-1 ">
                <h1 className="font-medium text-2xl capitalize">tema jowo</h1>
                <div className=" flex gap-1 items-center ">
                  <div className="discount py-0.5 my-1.5 px-3 items-start flex w-fit bg-red-400 rounded-lg text-white lowercase text-[12px]">
                    -40%
                  </div>
                </div>
              </div>
              <div className="product-price flex gap-3">
                <p className="text-primary font-medium text-md">Rp. 40000</p>
                <span className="text-xs text-gray-500 animate-pulse items-center flex line-through">
                  Rp. 40000
                </span>
              </div>
              <p className="py-0.5 my-1.5 px-3 items-start flex w-fit bg-card rounded-lg text-primary lowercase text-[12px]">
                category
              </p>
            </div>
            <hr className="my-4" />

            <div className="card-body features">
              <ul className="list-feature">
                <li className="capitalize flex gap-2 items-center mb-1">
                  {" "}
                  <AiOutlineCheckCircle className="text-primary h-5 w-5" />{" "}
                  tamplate premium
                </li>
                <li className="capitalize flex gap-2 items-center mb-1">
                  {" "}
                  <AiOutlineCheckCircle className="text-primary h-5 w-5" />{" "}
                  romantic music
                </li>
                <li className="capitalize flex gap-2 items-center mb-1">
                  {" "}
                  <AiOutlineCheckCircle className="text-primary h-5 w-5" />{" "}
                  fitur 1
                </li>
                <li className="capitalize flex gap-2 items-center mb-1">
                  {" "}
                  <AiOutlineCheckCircle className="text-primary h-5 w-5" />{" "}
                  fitur 1
                </li>
                <li className="capitalize flex gap-2 items-center mb-1">
                  {" "}
                  <AiOutlineCheckCircle className="text-primary h-5 w-5" />{" "}
                  fitur 1
                </li>
                <li className="capitalize flex gap-2 items-center mb-1">
                  {" "}
                  <AiOutlineCheckCircle className="text-primary h-5 w-5" />{" "}
                  fitur 1
                </li>
              </ul>

              {/* <div className="quantity flex gap-2 items-center my-3 ">
                <button
                  className="border border-primary rounded-lg px-2 text-primary hover:bg-card "
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>

                {quantity}
                <button
                  className="border border-primary rounded-lg px-2 text-primary hover:bg-card "
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div> */}
            </div>
           
    
            <div className="mt-5 add-to-cart w-full flex gap-2 items-center">
              <button className=" bg-primary flex-3/4 text-white [&>svg]:fill-white rounded-xl py-3 px-4 flex">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  className=" mr-2 "
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.81732 1.80994C11.9955 1.80994 13.795 3.46965 14.0168 5.59237L14.0787 5.5931C15.2871 5.5931 16.7562 6.3956 17.2521 8.64644L17.9096 13.7356C18.1454 15.3781 17.8504 16.6956 17.0312 17.6406C16.2162 18.5806 14.9262 19.0781 13.3004 19.0781H6.34374C4.5579 19.0781 3.31374 18.6406 2.53957 17.7414C1.76207 16.8398 1.50207 15.4873 1.76707 13.7223L2.41374 8.7006C2.83873 6.3981 4.3929 5.5931 5.59624 5.5931C5.70012 4.63517 6.13207 3.72385 6.81732 3.04077C7.60482 2.25827 8.69065 1.80994 9.79982 1.80994H9.81732ZM14.0787 6.8431H5.59624C5.22874 6.8431 4.0004 6.99144 3.6479 8.89477L3.00457 13.8948C2.7954 15.2973 2.95707 16.3123 3.48624 16.9264C4.00874 17.5331 4.94374 17.8281 6.34374 17.8281H13.3004C14.1737 17.8281 15.3662 17.6539 16.0862 16.8223C16.6579 16.1631 16.8546 15.1814 16.6712 13.9039L16.0221 8.8606C15.7454 7.6181 15.0154 6.8431 14.0787 6.8431ZM12.2477 9.16319C12.5927 9.16319 12.8919 9.44319 12.8919 9.78819C12.8919 10.1332 12.6311 10.4132 12.2861 10.4132H12.2477C11.9027 10.4132 11.6227 10.1332 11.6227 9.78819C11.6227 9.44319 11.9027 9.16319 12.2477 9.16319ZM7.38932 9.16319C7.73432 9.16319 8.03349 9.44319 8.03349 9.78819C8.03349 10.1332 7.77182 10.4132 7.42682 10.4132H7.38932C7.04432 10.4132 6.76432 10.1332 6.76432 9.78819C6.76432 9.44319 7.04432 9.16319 7.38932 9.16319ZM9.81482 3.05994H9.80232C9.01815 3.05994 8.25399 3.37577 7.69982 3.9266C7.2484 4.37599 6.95317 4.96677 6.85766 5.59272L12.7571 5.59295C12.5429 4.16109 11.3047 3.05994 9.81482 3.05994Z"
                  />
                </svg>
                Order Sekarang
              </button>
              <button className=" bg-card text-white flex-1/4 [&>svg]:fill-white rounded-xl py-3 px-4 flex">
                <svg
                  width="26"
                  height="22"
                  viewBox="0 0 26 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.27483 19.3502C6.00561 19.3502 6.60026 19.9438 6.60026 20.6746C6.60026 21.4053 6.00561 22 5.27483 22C4.54406 22 3.95043 21.4053 3.95043 20.6746C3.95043 19.9438 4.54406 19.3502 5.27483 19.3502ZM16.8202 19.3502C17.552 19.3502 18.1466 19.9438 18.1466 20.6746C18.1466 21.4053 17.552 22 16.8202 22C16.0894 22 15.4958 21.4053 15.4958 20.6746C15.4958 19.9438 16.0894 19.3502 16.8202 19.3502ZM0.898572 2.00971L3.02744 2.37817C3.37031 2.43855 3.6313 2.72309 3.66098 3.07107L3.90151 5.93788L4.79589 5.93827C4.94183 5.93833 5.08623 5.9384 5.2291 5.93846L6.8711 5.93924C7.00198 5.93931 7.1314 5.93937 7.25938 5.93944L9.07239 5.94043C9.18629 5.9405 9.29882 5.94057 9.41001 5.94064L10.6805 5.94145C10.7812 5.94151 10.8805 5.94158 10.9786 5.94165L12.0961 5.94247C12.1843 5.94254 12.2713 5.94261 12.3572 5.94268L13.3315 5.94352C13.4081 5.94359 13.4836 5.94366 13.5581 5.94373L14.1984 5.94437C14.2664 5.94444 14.3333 5.94451 14.3991 5.94458L15.1407 5.94544C15.1985 5.94551 15.2554 5.94558 15.3113 5.94566L15.9375 5.94653C15.986 5.9466 16.0337 5.94668 16.0804 5.94675L16.4784 5.94742C16.5201 5.94749 16.561 5.94756 16.601 5.94764L17.0443 5.94854C17.0782 5.94861 17.1114 5.94869 17.1438 5.94876L17.4166 5.94945C17.4449 5.94952 17.4724 5.9496 17.4993 5.94968L17.7918 5.9506C17.8137 5.95067 17.8351 5.95075 17.8558 5.95083L18.0276 5.95153C18.045 5.95161 18.0619 5.95169 18.0784 5.95177L18.2521 5.95271C18.2647 5.95279 18.2769 5.95287 18.2886 5.95295L18.3833 5.95367C18.3926 5.95375 18.4016 5.95383 18.4102 5.95391L18.4784 5.95464C18.4849 5.95472 18.4912 5.9548 18.4972 5.95488L18.5436 5.95561C18.548 5.9557 18.5521 5.95578 18.556 5.95586L18.5853 5.9566C18.588 5.95669 18.5905 5.95677 18.5928 5.95685L18.6141 5.95785C18.6154 5.95794 18.6166 5.95802 18.6177 5.95811C18.6277 5.95904 18.6291 5.95921 18.6306 5.95938C19.2007 6.04228 19.7022 6.34012 20.0441 6.79864C20.3859 7.25615 20.5292 7.82009 20.4473 8.38506L19.476 15.0971C19.2928 16.3745 18.1834 17.3376 16.8937 17.3376H5.71616C4.36822 17.3376 3.22702 16.2854 3.11751 14.9395L2.17999 3.78957L0.637581 3.52346C0.218972 3.44977 -0.0604424 3.05367 0.0112022 2.63507C0.0848938 2.21646 0.489174 1.94421 0.898572 2.00971ZM4.59056 7.47348L4.03047 7.47313L4.64763 14.8136C4.69267 15.3786 5.15426 15.8023 5.71821 15.8023H16.8917C17.4249 15.8023 17.8804 15.4052 17.9561 14.8781L18.9285 8.16501C18.951 8.00534 18.9111 7.84568 18.8138 7.71672C18.7176 7.58673 18.5764 7.50281 18.4167 7.48029C18.4093 7.48057 18.3917 7.48083 18.3642 7.48107L18.2529 7.4817C18.2296 7.4818 18.204 7.48189 18.1761 7.48197L17.5963 7.48285C17.5474 7.48289 17.4965 7.48292 17.4437 7.48294L16.0805 7.48289C16.0044 7.48286 15.9269 7.48283 15.848 7.48279L14.2922 7.48185C14.199 7.48178 14.1047 7.48171 14.0096 7.48164L13.1292 7.48093C13.0289 7.48085 12.9279 7.48076 12.8262 7.48067L11.8937 7.47985C11.7884 7.47976 11.6826 7.47966 11.5763 7.47957L10.934 7.47898C10.8262 7.47888 10.7181 7.47878 10.6098 7.47868L9.62959 7.47776C9.5203 7.47766 9.41094 7.47755 9.30158 7.47745L8.64588 7.47684C8.53676 7.47674 8.42776 7.47664 8.31895 7.47654L7.66882 7.47595C7.56101 7.47586 7.4535 7.47576 7.34637 7.47566L6.394 7.47484C6.28968 7.47476 6.18592 7.47467 6.08279 7.47459L4.87924 7.47367C4.78211 7.4736 4.68587 7.47354 4.59056 7.47348ZM15.2479 9.72103C15.6716 9.72103 16.0155 10.0649 16.0155 10.4886C16.0155 10.9124 15.6716 11.2563 15.2479 11.2563H12.4107C11.986 11.2563 11.6431 10.9124 11.6431 10.4886C11.6431 10.0649 11.986 9.72103 12.4107 9.72103H15.2479Z"
                    fill="#ED931E"
                  />
                  <path
                    d="M25.14 3.577C25.14 3.87468 24.8987 4.116 24.601 4.116H23.158C22.6057 4.116 22.158 4.56372 22.158 5.116V6.545C22.158 6.87361 21.8916 7.14 21.563 7.14C21.2344 7.14 20.968 6.87361 20.968 6.545V5.116C20.968 4.56371 20.5203 4.116 19.968 4.116H18.539C18.2413 4.116 18 3.87468 18 3.577C18 3.27932 18.2413 3.038 18.539 3.038H19.968C20.5203 3.038 20.968 2.59029 20.968 2.038V0.595C20.968 0.26639 21.2344 0 21.563 0C21.8916 0 22.158 0.266391 22.158 0.595V2.038C22.158 2.59029 22.6057 3.038 23.158 3.038H24.601C24.8987 3.038 25.14 3.27932 25.14 3.577Z"
                    fill="#ED931E"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="comment-section">
      <Comments />
      <FormOrder/>
      </div>
    </div>
  );
};

export default Product;
