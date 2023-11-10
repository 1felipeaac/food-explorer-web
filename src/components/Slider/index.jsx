import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardDish } from "../CardDish";
import{useEffect, useState} from "react"


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import empty from "../../assets/default-dish.svg";
import favorite from "../../assets/favorite.svg";
import edit from "../../assets/edit.svg";

import { api } from "../../services/api";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export function Slider({ dishes, role }) {
  const [perView, setPerView] = useState(3);
  const [spacing, setSpacing] = useState(15);
  function getUrl(url) {
    return `${api.defaults.baseURL}/files/${url}`;
  }
  useEffect(() => {
    const size = Number(DEVICE_BREAKPOINTS.MD.replace(/[^\d.-]/g, ""));
    // console.log(window.innerWidth < size);
    function handleResize() {
      if (window.innerWidth < size) {
        setPerView(2);
        setSpacing(5);
      } else {
        setPerView(3);
        setSpacing(15);
      }
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Container>
      <Swiper
        slidesPerView={perView}
        spaceBetween={spacing}
        loop={true}
        pagination={false}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {dishes &&
          dishes.map((dish) => (
            <SwiperSlide key={dish.id}>
              <CardDish
                icon={role === "admin" ? edit : favorite}
                name={dish.name}
                price={dish.value}
                description={dish.description}
                to={`details/${dish.id}`}
                src={dish.image ? getUrl(dish.image) : empty}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  );
}
