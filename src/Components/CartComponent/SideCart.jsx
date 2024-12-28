import { useContext, useEffect, useRef, useState } from "react";
import "./SideCart.css";
import { CartContext } from "../../Context/CartContext";
// eslint-disable-next-line react/prop-types
const SideCart = ({ openSideCart, setOpenSideCart }) => {
  const CloseSideCart = useRef();
  const openCloseCart = () => {
    CloseSideCart.current.classList.toggle("active");
    setOpenSideCart(!openSideCart);
  };
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const { cart, setCart } = useContext(CartContext);
  useEffect(() => {
    let total_price = 0;
    let total_count = 0;

    cart.forEach((item) => {
      total_price += item.price * item.quantity;
      total_count += item.quantity;
    });

    setTotalPrice(total_price);
    setTotalCount(total_count);
  }, [cart]);

  // Increase item quantity
  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Decrease item quantity
  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  // Remove item from cart
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div
      ref={CloseSideCart}
      className={`cart ${openSideCart == true ? "active" : ""}`}
    >
      <div className="top_cart">
        <h3>
          Cart Item: <span className="Count_item_cart">{totalCount}</span>
        </h3>
        <span onClick={openCloseCart} className="close_cart">
          <i className="fa-regular fa-circle-xmark"></i>
        </span>
      </div>
      <div className="items_in_cart" id="cart_items">
        {cart.map((item, index) => (
          <div key={index} className="item_cart">
            <img src={`/src/${item.img}`} alt="" />
            <div className="content">
              <h4>{item.name}</h4>
              <p className="price_cart">${item.price * item.quantity}</p>
              <div className="quantity_control">
                <button
                  onClick={() => decreaseQuantity(index)}
                  className="decrease_quantity"
                  data-index={index}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(index)}
                  className="increase_quantity"
                  data-index={index}
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(index)}
              className="delete_item"
              data-inex={index}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        ))}
      </div>

      <div className="bottom_cart">
        <div className="total">
          <p>subtotal</p>
          <p className="price_cart_total">${totalPrice}</p>
        </div>
        <div className="button_cart">
          <a href="#" className="btn_cart btn ">
            Checkout
          </a>
          <span onClick={openCloseCart} className="btn_cart trans-bg btn">
            Shop more
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
