/* eslint-disable react/prop-types */
import { Container } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { CardDish } from "../CardDish";

import { api } from "../../services/api";

import empty from "../../assets/default-dish.svg";
import favorite from "../../assets/favorite.svg";
import edit from "../../assets/edit.svg";


export function Slider({ dishes, role }) {
  function getUrl(url) {
    return `${api.defaults.baseURL}/files/${url}`;
  }
  return (
    <Container>
      <Swiper
        loop={true}
        pagination={false}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          320:{
            slidesPerView: 1,
            spaceBetween:5
          },
          425:{
            slidesPerView:2,
            spaceBetween:5

          },
          768:{
            slidesPerView:3,
            spaceBetween:15
          },
          1024:{
            slidesPerView:3,
            spaceBetween:15
          },
          1280:{
            slidesPerView:3,
            spaceBetween:15
          },
          1440:{
            slidesPerView:4,
            spaceBetween:20
          },
          1920:{
            slidesPerView:4,
            spaceBetween:20
          },
        }}
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
