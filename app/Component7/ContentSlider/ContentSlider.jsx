import Image from "next/image";
import "./content-slider.css";
import contentSliderImg from "../../../public/images/mobile-app-animation-icon.png";

const ContentSlider = () => {
  return (
    <div className="content-slider-section bg-PrimaryColor-0">
      <div className="content-slider">
        <div className="content-slider-content">
          <h1>FAST SUPPORT</h1>
        </div>
        <div className="content-slider-content">
         <Image alt="Content slider star" src={contentSliderImg} draggable="false" className="animate-spin" />
        </div>
        <div className="content-slider-content">
          <h1>FREE VERSON</h1>
        </div>
        <div className="content-slider-content">
         <Image alt="Content slider star" src={contentSliderImg} draggable="false" className="animate-spin" />
        </div>
        <div className="content-slider-content">
          <h1>PAYMENT GATEWAY</h1>
        </div>
        <div className="content-slider-content">
         <Image alt="Content slider star" src={contentSliderImg} draggable="false" className="animate-spin" />
        </div>
        <div className="content-slider-content">
          <h1>SAFE TRANSACTIONS</h1>
        </div>
        <div className="content-slider-content">
         <Image alt="Content slider star" src={contentSliderImg} draggable="false" className="animate-spin" />
        </div>
        <div className="content-slider-content">
          <h1>FAST COMMUNICATIONS</h1>
        </div>
        <div className="content-slider-content">
         <Image alt="Content slider star" src={contentSliderImg} draggable="false" className="animate-spin" />
        </div>
      </div>
      <div className="content-slider">
        <div className="content-slider-content">
          <h1>FAST SUPPORT</h1>
        </div>
        <div className="content-slider-content">
         <Image alt="Content slider star" src={contentSliderImg} draggable="false" className="animate-spin" />
        </div>
        <div className="content-slider-content">
          <h1>FREE VERSON</h1>
        </div>
        <div className="content-slider-content">
         <Image alt="Content slider star" src={contentSliderImg} draggable="false" className="animate-spin" />
        </div>
        <div className="content-slider-content">
          <h1>PAYMENT GATEWAY</h1>
        </div>
        <div className="content-slider-content">
         <Image alt="Content slider star" src={contentSliderImg} draggable="false" className="animate-spin" />
        </div>
        <div className="content-slider-content">
          <h1>SAFE TRANSACTIONS</h1>
        </div>
        <div className="content-slider-content">
         <Image alt="Content slider star" src={contentSliderImg} draggable="false" className="animate-spin" />
        </div>
        <div className="content-slider-content">
          <h1>FAST COMMUNICATIONS</h1>
        </div>
        <div className="content-slider-content">
         <Image alt="Content slider star" src={contentSliderImg} draggable="false" className="animate-spin" />
        </div>
      </div>
    </div>
  );
};

export default ContentSlider;
