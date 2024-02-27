import React from 'react';
import './Portfolio.css';
import { ImageGallery } from "react-image-grid-gallery";
import logo from "../assets/logo/isha-logo.png";
import AboutImg from '../assets/isha-about.png'
import Img1 from '../assets/banner/isha-banner.png'

const imagesArray = [
  {
    alt: "Image1's alt text",
    src: logo,
  },
  {
    alt: "Image1's alt text",
    src: AboutImg,
  },
  {
    alt: "Image1's alt text",
    src: Img1,
  },

];

export default function Portfolio() {
  return (
    <div className="container">
      <div class="green-title">Services i offer to my clients</div>
            <h3 class="heading-one">My Services</h3>
      <ImageGallery
        imagesInfoArray={imagesArray}
        columnWidth="100%"
        gapSize={24}
      />
    </div>
  );
}
