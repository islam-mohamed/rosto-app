import React, { useState } from "react";
import Image from "next/image";
import styles from ".//../styles/Slider.module.css";
import ArrowLeft from ".//../public/images/svg/left-arrow.svg";
import ArrowRight from ".//../public/images/svg/right-arrow.svg";

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const images = [
    "https://islamabdelsalam.com/rosto/images/slider-01.jpg",
    "https://islamabdelsalam.com/rosto/images/slider-02.jpg",
    "https://islamabdelsalam.com/rosto/images/slider-01.jpg",
    "https://islamabdelsalam.com/rosto/images/slider-02.jpg",
  ];

  const handleSlider = (direction) => {
    if (direction === "l") {
      setSliderIndex(sliderIndex !== 0 ? sliderIndex - 1 : 3);
    }
    if (direction === "r") {
      setSliderIndex(sliderIndex !== 3 ? sliderIndex + 1 : 0);
    }
  };

  return (
    <div className={styles.slidercontainer}>
      <div className={styles.slideleft} onClick={() => handleSlider("l")}>
        <Image src={ArrowLeft} alt="left arrow" layout="fill" />
      </div>
      <div className={styles.sliderswrapper}>
        {images.map((image, index) => (
          <div
            className={styles.sliderwrapper}
            key={index}
            style={{ transform: `translateX(${sliderIndex * -100}%)` }}
          >
            <Image
              src={image}
              alt="slider image"
              width="2700"
              height="900"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
      <div className={styles.slideright}>
        <Image
          src={ArrowRight}
          alt="right arrow"
          layout="fill"
          onClick={() => handleSlider("r")}
        />
      </div>
    </div>
  );
};

export default Slider;
