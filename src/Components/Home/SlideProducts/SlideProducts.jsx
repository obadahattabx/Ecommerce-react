import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
// eslint-disable-next-line react/prop-types
const SlideProducts = ({ nameHeading, TYPE }) => {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext);
  useEffect(() => {
    fetch("/src/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  const btnAddCard = (product) => {
    setCart((prevCart) => {
      // Check if product already exists in the cart
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        // Update quantity if product exists
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }

      // Add new product to cart
      const updatedCart = [...prevCart, { ...product, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  const condition = (product, TYPE) => {
    if (TYPE == "Hot") {
      return product.old_price ? true : false;
    }
    return product.catetory === TYPE ? true : false;
  };

  return (
    <div className="slider_product slide">
      <div className="container">
        <div className="slide_product mySwiper">
          <div className="top_slide">
            <h2>
              <i className="fa-solid fa-tags"></i> {nameHeading}
            </h2>
          </div>

          <div className="products swiper-wrapper" id="swiper_item_sale">
            <Swiper
              pagination={true}
              loop={true}
              autoplay={{ delay: 2000 }}
              slidesPerView={5}
              spaceBetween={20}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                1200: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                1000: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                700: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="mySwiper  "
            >
              {products.map((product) => {
                const isInCart = cart.some(
                  (cartItem) => cartItem.id == product.id
                );
                if (condition(product, TYPE)) {
                  let old_price_parg = product.old_price ? (
                    <p className="old_price">${product.old_price}</p>
                  ) : (
                    ""
                  );
                  let percent_disc = Math.floor(
                    ((product.old_price - product.price) / product.old_price) *
                      100
                  );
                  let sale_perc = product.old_price ? (
                    <span className="sale-present">%{percent_disc}</span>
                  ) : (
                    ""
                  );
                  return (
                    <SwiperSlide key={product.id}>
                      <div className="swiper-slide product">
                        {sale_perc}
                        <div className="img_product">
                          <a href="#">
                            <img src={`/src/${product.img}`} alt="" />
                          </a>
                        </div>
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <p className="name_product">
                          {" "}
                          <a href="#">{product.name}</a>
                        </p>
                        <div className="price">
                          <p>
                            <span>${product.price}</span>
                          </p>
                          {old_price_parg}
                        </div>
                        <div className="icons">
                          <span
                            onClick={() => btnAddCard(product)}
                            className={`btn_add_card ${
                              isInCart ? "active" : ""
                            }`}
                            data-id="${product.id}"
                          >
                            <i className="fa-solid fa-cart-shopping"></i>
                            {isInCart ? "Item in cart" : "add to cart"}
                          </span>
                          <span className="icon_product">
                            <i className="fa-regular fa-heart"></i>
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>
          </div>

          <div className="swiper-button-next btn_swip"></div>
          <div className="swiper-button-prev btn_swip"></div>
        </div>
      </div>
    </div>
  );
};

export default SlideProducts;
