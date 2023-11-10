import { HeaderMobile } from "../../components/Header/Mobile";
import { HeaderDesktop } from "../../components/Header/Desktop";
import { Footer } from "../../components/Footer";
import { CardDish } from "../../components/CardDish";
import { Container } from "./styles";
import home from "../../assets/homeImg.svg";

import { api } from "../../services/api";
import { useEffect, useState, useRef } from "react";
import { Menu } from "../../Components/MobileMenu";
import empty from "../../assets/default-dish.svg";
import favorite from "../../assets/favorite.svg";
import edit from "../../assets/edit.svg";
import { useAuth } from "../../hooks/auth";

// import Slider from "react-slick";

import { Slider } from "../../components/Slider";

import {motion} from "framer-motion"

import Carousel from "framer-motion-carousel";

// import {Swiper, SwiperSlide} from "swiper/react"
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

export function Home() {
  const [dishes, setDishes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [dishesFound, setDishesFound] = useState([]);
  const [errorCheck, setErrorCheck] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [visible, setVisible] = useState(true);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [width, setWidth] = useState(0)
  const [currentPosition, setCurrentPosition] = useState(0);

  function loop(event, info){
    const dragDistance = info.offset.x

    const size = 10

    // console.log(dragDistance)

    if (dragDistance > size){
      setCurrentPosition(currentPosition - width)
    } else if (dragDistance < -size) {
      setCurrentPosition(currentPosition + width)
    }
  }

  const slider = useRef()
  
  const logged = useAuth();
  const role = logged.user.role;

  function getUrl(url) {
    return `${api.defaults.baseURL}/files/${url}`;
  }

  function handleSearch(value) {
    setDishesFound([]);
    setSearchValue(value);
    setVisible(true);
    setMessageError("");
  }

  useEffect(() => {
    setErrorCheck(false);
    setMessageError("");

    async function fetchSearchDish() {
      try {
        const response = await api.get(`/dishes?name=${searchValue}`);

        if (response.data.length > 0) {
          setDishesFound(response.data);
          setVisible(false);
        }
      } catch (error) {
        setErrorCheck(true);
        setMessageError(error.response.data.message);
      }
    }
    fetchSearchDish();
  }, [searchValue]);

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get("/dishes");
      setDishes(response.data.dishes);
    }
    setDishesFound([]);
    fetchDishes();
  }, []);
  useEffect(() => {
    setWidth(slider.current?.scrollWidth - slider.current?.offsetWidth)
    // console.log(width)
  }, []);

  return (
    <Container>
      <HeaderDesktop onSearch={handleSearch} />
      <HeaderMobile onOpenMenu={() => setMenuIsOpen(true)} />
      <Menu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
        id="mobileMenu"
        onSearch={handleSearch}
        title={"Sair"}
      />
      <main>
        <div id="display">
          <div id="banner"></div>
          <img id="imgHome" src={home} alt="" />
          <span id="presentation">
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </span>
        </div>
        {visible ? <Slider arrayCategory={dishes} role={role} /> : undefined}

        {/* <motion.div 
          className="slider"
          
        >
          <motion.div 
            className="innerSlider"
            ref={slider}
            whileTap={{cursor: "grabbing"}}
            drag="x"
            dragConstraints={{right: 0, left: -width}}
          >
            {dishes && dishes.map((dish) => (
              <CardDish
                className={"card"}
                icon={role === "admin" ? edit : favorite}
                to={`details/${dish.id}`}
                key={dish.id}
                name={dish.name}
                price={dish.value}
                src={dish.image ? getUrl(dish.image) : empty}
              />
            ))}
          </motion.div>
        </motion.div> */}


        {errorCheck ? (
          <div id="errorMessage">{messageError}</div>
        ) : (
          <div id="searchDishes">
            {Array.isArray(dishesFound) &&
              dishesFound.map((dish) => (
                <CardDish
                  icon={role === "admin" ? edit : favorite}
                  to={`details/${dish.id}`}
                  key={dish.id}
                  name={dish.name}
                  price={dish.value}
                  src={dish.image ? getUrl(dish.image) : empty}
                />
              ))}
          </div>
        )}
      </main>
      <Footer />
    </Container>
  );
}
