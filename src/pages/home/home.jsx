import React from "react";
import carouselItem1 from "../../assets/carouselItem1.webp";
import carouselItem2 from "../../assets/carouselItem2.webp";
import carouselItem3 from "../../assets/carouselItem3.webp";
import carouselItem4 from "../../assets/carouselItem4.webp";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="align-element py-20">
      <div className="grid lg:grid-cols-2 gap-24 items-center max-w-[1152px]">
        <div>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
            We are changing the way people shop
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <Link to={"/products"} className="btn btn-primary mt-10">
            OUR PRODUCTS
          </Link>
        </div>
        <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
          <div className="carousel-item">
            <img
              src={carouselItem1}
              className="rounded-box h-full w-80 object-cover"
            />
          </div>
          <div className="carousel-item">
            <img
              src={carouselItem2}
              className="rounded-box h-full w-80 object-cover"
            />
          </div>{" "}
          <div className="carousel-item">
            <img
              src={carouselItem3}
              className="rounded-box h-full w-80 object-cover"
            />
          </div>{" "}
          <div className="carousel-item">
            <img
              src={carouselItem4}
              className="rounded-box h-full w-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
