"use client";
import "./Slider.scss";
import Image from "next/image";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material";
import { useState } from "react";
import Link from "next/link";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };
  return (
    <div className="slider">
      <div
        style={{
          transform: `translateX(-${currentSlide}00vw)`,
        }}
        className="slider__container"
      >
        <div className="slider__image-content">
          <div className="slider__content">
            <h2 className="slider__title">Buy Everything You Need</h2>
            <p className="slider__desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
              suscipit ipsum consequatur, distinctio accusantium a ipsa dolores
              voluptatum repellendus perferendis porro accusamus, natus at
              fugiat, neque velit minus. Labore, error!
            </p>
            <div className="slider__actions">
              <Link
                href="/favourites"
                className="slider__btn-link slider__btn-link--1"
              >
                Favourite Products
              </Link>
              <Link
                href="/products/#products"
                className="slider__btn-link slider__btn-link--2"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="slider__img">
            <Image fill src="/images/bg-4.jpg" className="slider__bg" />
          </div>
        </div>
        <div className="slider__image-content">
          <div className="slider__content">
            <h2 className="slider__title">
              Buy Best Products From All Of The World
            </h2>
            <p className="slider__desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
              suscipit ipsum consequatur, distinctio accusantium a ipsa dolores
              voluptatum repellendus perferendis porro accusamus, natus at
              fugiat, neque velit minus. Labore, error!
            </p>
            <div className="slider__actions">
              <Link href="/" className="slider__btn-link slider__btn-link--1">
                Favourite Products
              </Link>
              <Link href="/" className="slider__btn-link slider__btn-link--2">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="slider__img">
            <Image fill src="/images/bg-2.jpg" className="slider__bg" />
          </div>
        </div>
        <div className="slider__image-content">
          <div className="slider__content">
            <h2 className="slider__title">Buy Everything You Need</h2>
            <p className="slider__desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
              suscipit ipsum consequatur, distinctio accusantium a ipsa dolores
              voluptatum repellendus perferendis porro accusamus, natus at
              fugiat, neque velit minus. Labore, error!
            </p>
            <div className="slider__actions">
              <Link
                href="/favourites"
                className="slider__btn-link slider__btn-link--1"
              >
                Favourite Products
              </Link>
              <Link href="/" className="slider__btn-link slider__btn-link--2">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="slider__img">
            <Image fill src="/images/bg-3.jpg" className="slider__bg" />
          </div>
        </div>
      </div>
      <div className="slider__buttons">
        <div onClick={prevSlide} className="slider__btn slider__btn--left">
          <KeyboardArrowLeft className="slider__icon" />
        </div>
        <div onClick={nextSlide} className="slider__btn slider__btn--right">
          <KeyboardArrowRight className="slider__icon" />
        </div>
      </div>
    </div>
  );
};
export default Slider;
