import React, { useEffect, useRef, useState } from "react";
import "./products.css";
import { Link } from "react-router-dom";

function Products() {
  let [api, setApi] = useState(
    "https://strapi-store-server.onrender.com/api/products"
  );
  let [data, setData] = useState([]);
  let radioVal = useRef(0);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [api]);

  function LinkChanger(e) {
    setApi(
      "https://strapi-store-server.onrender.com/api/products" + `?page=${e}`
    );
    console.log(api);
  }

  return (
    <section className="align-element py-20">
      <form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        <div className="form-control">
          <label htmlFor="search" className="label">
            <span className="label-text capitalize">search product</span>
          </label>
          <input
            type="search"
            name="search"
            id="search"
            className="input input-bordered input-sm w-[260px]"
          />
        </div>
        <div className="form-control">
          <label htmlFor="category" className="label">
            <span className="label-text capitalize">select category</span>
          </label>
          <select
            name="category"
            id="category"
            className="select select-bordered select-sm"
          >
            <option value="all" defaultValue={"z-a"}>
              all
            </option>
            <option value="Tables">Tables</option>
            <option value="Chairs">Chairs</option>
            <option value="Kids">Kids</option>
            <option value="Sofas">Sofas</option>
            <option value="Beds">Beds</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="company" className="label">
            <span className="label-text capitalize">select company</span>
          </label>
          <select
            name="company"
            id="company"
            className="select select-bordered select-sm"
          >
            <option value="all" defaultValue={"z-a"}>
              all
            </option>
            <option value="Modenza">Modenza</option>
            <option value="Luxora">Luxora</option>
            <option value="Artifex">Artifex</option>
            <option value="Comfora">Comfora</option>
            <option value="Homestead">Homestead</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="order" className="label">
            <span className="label-text capitalize">sort by</span>
          </label>
          <select
            name="order"
            id="order"
            className="select select-bordered select-sm"
          >
            <option value="a-z" defaultValue={"z-a"}>
              a-z
            </option>
            <option value="z-a">z-a</option>
            <option value="high">high</option>
            <option value="low">low</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="price" className="label cursor-pointer">
            <span className="label-text capitalize">select price</span>
            <span>$1,000.00</span>
          </label>
          <input
            ref={radioVal}
            type="range"
            name="price"
            min="0"
            max="100000"
            value="1000000"
            onChange={() => {}}
            className="range range-primary range-sm"
            step="1000"
          />
          <div className="w-full flex justify-between text-xs px-2 mt-2">
            <span className="font-bold text-md">0</span>
            <span className="font-bold text-md">Max : $1,000.00</span>
          </div>
        </div>
        <div className="form-control items-center">
          <label htmlFor="shipping" className="label cursor-pointer">
            <span className="label-text capitalize">free shipping</span>
          </label>
          <input
            type="checkbox"
            name="shipping"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-sm uppercase">
          search
        </button>
        <Link to={"/products"} className="btn btn-accent btn-sm uppercase">
          reset
        </Link>
      </form>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <p className="font-medium text-md">
          {data.data ? data.data.length + " products" : "? products"}
        </p>
        <div className="flex gap-x-2">
          <button
            type="button"
            className="text-xl btn btn-circle btn-sm btn-primary text-primary-content"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
            </svg>
          </button>
          <button
            type="button"
            className="text-xl btn btn-circle btn-sm btn-ghost text-based-content"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.data ? (
          data.data.map((product, index) => {
            return (
              <div key={index} className="">
                <Link className="card" to={String(product.id)}>
                  <div className="px-4 pt-4">
                    <img
                      className="rounded-xl h-64 md:h-48 w-full object-cover"
                      src={String(product.attributes.image)}
                    />
                  </div>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title capitalize tracking-wider">
                      {product.attributes.title}
                    </h2>
                    <span id="price" className="text-secondary">
                      ${product.attributes.price}
                    </span>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <p className="flex items-center justify-center">Loading...</p>
        )}
      </div>
      <div className="wrapper mt-16 flex justify-end">
        <div className="join">
          <button
            onClick={() => {
              LinkChanger("-");
            }}
            className="btn btn-xs sm:btn-md join-item"
          >
            prev
          </button>
          <button
            onClick={() => {
              LinkChanger(1);
            }}
            className="btn btn-xs sm:btn-md border-none join-item "
          >
            1
          </button>
          <button
            onClick={() => {
              LinkChanger(2);
            }}
            className="btn btn-xs sm:btn-md border-none join-item "
          >
            2
          </button>
          <button
            onClick={() => {
              LinkChanger(3);
            }}
            className="btn btn-xs sm:btn-md border-none join-item "
          >
            3
          </button>
          <button
            onClick={() => {
              LinkChanger("+");
            }}
            className="btn btn-xs sm:btn-md join-item"
          >
            next
          </button>
        </div>
      </div>
    </section>
  );
}

export default Products;

{
  /* <h1 key={index}>{product.attributes.title}</h1>; */
}
