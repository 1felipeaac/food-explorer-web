/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"; 
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Container } from "./styles";
import { CardDish } from "../CardDish";

import favorite from "../../assets/favorite.svg";
import edit from "../../assets/edit.svg";
import empty from "../../assets/default-dish.svg";

import { api } from "../../services/api";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export function Slider({ arrayCategory, role }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [perView, setPerView] = useState(3);
  const [spacing, setSpacing] = useState(15);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: {
      perView: perView,
      spacing: spacing,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  function getUrl(url) {
    return `${api.defaults.baseURL}/files/${url}`;
  }

  useEffect(()=>{
      const size = Number(DEVICE_BREAKPOINTS.MD.replace(/[^\d.-]/g, ""))
      console.log(window.innerWidth < size)
    function handleResize(){
        if(window.innerWidth < size){
            setPerView(2)
            setSpacing(10)
        }else{
            setPerView(3)
            setSpacing(15)
        }
    }
    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {window.removeEventListener('resize', handleResize)}
  },[])

  return (
    <Container>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {arrayCategory.map((a, index) => (
            <CardDish
              className={`keen-slider__slide`}
              key={index}
              to={`details/${a.id}`}
              name={a.name}
              price={a.value}
              icon={role === 'admin' ? edit: favorite}
              src={
                a.image ? getUrl(a.image): empty
              }
            />
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current?.track?.details?.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </Container>
  );
}

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
