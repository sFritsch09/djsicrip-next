"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  CustomImage,
  Angle,
  ImageWrapper,
  ImageText,
} from "../styles/home.styles";
import { Fragment } from "react";
import { useTheme } from "next-themes";

export default function HeroSection() {
  const { theme, setTheme } = useTheme();

  const imageOptions = [
    {
      src:
        theme === "dark"
          ? "https://s3.techchase.de/djsicrip/extrablatt.jpeg"
          : "https://s3.techchase.de/djsicrip/dark_djset.webp",
      alt: "turntables",
      blurDataURL:
        theme === "dark"
          ? "https://s3.techchase.de/djsicrip/dark_turntables.webp"
          : "https://s3.techchase.de/djsicrip/light_music_fair.webp",
      pos: theme === "dark" ? "50% 40%" : "50% 90%",
      text: "DJ in Mainz 🎧",
    },
    {
      src:
        theme === "dark"
          ? "https://s3.techchase.de/djsicrip/dark_setup.jpeg"
          : "https://s3.techchase.de/djsicrip/light_music_fair.webp",
      alt: "turntables",
      blurDataURL:
        theme === "dark"
          ? "https://s3.techchase.de/djsicrip/extrablatt.jpeg"
          : "https://s3.techchase.de/djsicrip/extrablatt.jpeg",
      pos: theme === "dark" ? "50% 0%" : "50% 80%",
      text: "Firmenfeier 🥂",
    },
    {
      src:
        theme === "dark"
          ? "https://s3.techchase.de/djsicrip/dark_turntables.webp"
          : "https://s3.techchase.de/djsicrip/light_outside.webp",
      alt: "setup",
      blurDataURL:
        theme === "dark"
          ? "https://s3.techchase.de/djsicrip/dark_djset.webp"
          : "https://s3.techchase.de/djsicrip/light_outside.webp",
      pos: theme === "dark" ? "50% 70%" : "50% 50%",
      text: "Hochzeiten 💒",
    },
    {
      src:
        theme === "dark"
          ? "https://s3.techchase.de/djsicrip/dark_logo_old.jpg"
          : "https://s3.techchase.de/djsicrip/dark_setup.jpeg",
      alt: "setup",
      blurDataURL:
        theme === "dark"
          ? "https://s3.techchase.de/djsicrip/dark_logo_old.jpg"
          : "https://s3.techchase.de/djsicrip/light_fritsch09.webp",
      pos: theme === "dark" ? "10% 20%" : "50% 60%",
      text: "Geburtstag 🎉",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    easing: "easeOutElastic",
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <Fragment>
      <Slider {...settings}>
        {imageOptions.map((image, index) => (
          <ImageWrapper key={index}>
            <CustomImage
              alt={image.alt}
              src={image.src}
              fill
              placeholder="blur"
              blurDataURL={image.blurDataURL}
              style={{ objectFit: "cover", objectPosition: image.pos }}
            />
            <ImageText>
              <span>{image.text}</span>
            </ImageText>
          </ImageWrapper>
        ))}
      </Slider>
      <Angle />
    </Fragment>
  );
}
