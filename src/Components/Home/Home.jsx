import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Home.css";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import BannerMain from "./BannerMain/BannerMain";
import SlideProducts from "./SlideProducts/SlideProducts";
import Banner2 from "./BannerMain/Banner2/Banner2";
import Banner3 from "./BannerMain/Banner3/Banner3";

const Home = () => {
  return (
    <>
      <div className="slider  ">
        <div className="container ">
          {/* <!-- Swiper --> */}
          <div className="slide-swp mySwiper">
            <Swiper
              loop={true}
              autoplay={{ delay: 2000 }}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay, Navigation]}
              className="mySwiper  "
            >
              <div className="swiper-wrapper">
                <SwiperSlide>
                  <div className="swiper-slide">
                    <Link href="">
                      <img src="/src/img/banner_home1.png" alt="" />
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <Link href="#">
                      <img src="/src/img/banner_home2.png" alt="" />
                    </Link>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="swiper-pagination"></div>
          </div>
          <div className="banner_2">
            <Link href="#">
              <img src="/src/img/banner_home3.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <BannerMain />
      <SlideProducts nameHeading="HOTE DEALS" TYPE="Hot" />
      <Banner2 />
      <SlideProducts nameHeading="Electronics" TYPE="electronics" />
      <SlideProducts nameHeading="Appliances" TYPE="appliances" />
      <Banner3 />
      <SlideProducts nameHeading="Mobiles" TYPE="mobiles" />
    </>
  );
};

export default Home;
