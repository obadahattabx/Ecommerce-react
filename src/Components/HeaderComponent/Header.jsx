import { Link } from "react-router-dom";
import "./Header.css";
import { useContext, useEffect, useRef, useState } from "react";
import SideCart from "../CartComponent/SideCart";
import { CartContext, useLogin } from "../../Context/CartContext";
const Header = () => {
  const { login, setLogin } = useLogin();
  const [openSideCart, setOpenSideCart] = useState(false);
  const btn_categoryList = useRef();
  const btnNavLink = useRef();
  const openCloseCart = () => {
    setOpenSideCart(!openSideCart);
  };
  const handleCategoryNav = () => {
    btn_categoryList.current.classList.toggle("active");
  };
  const openMenu = () => {
    btnNavLink.current.classList.toggle("active");
  };
  const [totalCount, setTotal] = useState(0);

  const { cart } = useContext(CartContext);
  useEffect(() => {
    let total = 0;
    cart.forEach((element) => {
      total += element.quantity;
    });
    setTotal(total);
  }, [cart]);
  const handlesetLogin = () => {
    setLogin(false);
    localStorage.removeItem("token");
  };
  return (
    <header>
      {
        <SideCart
          openSideCart={openSideCart}
          setOpenSideCart={setOpenSideCart}
        />
      }
      <div className="top_header    ">
        <div className="container ">
          <Link to={"/"} className="logo ">
            <img src="/src/img/logo.png" alt="" />
          </Link>
          <form
            action=""
            onSubmit={(e) => e.preventDefault()}
            className="search_box "
          >
            <div className="select_box ">
              <select id="category" name="category">
                <option value="All category">All category</option>
                <option value="Electronics & Digit">Electronics & Digit</option>
                <option value="phone & Tablet">phone & Tablet</option>
                <option value="fashion & clothing ">fashion & clothing</option>
                <option value="Telivsion & monitor">Telivsion & monitor</option>
                <option value="Jewelry & watches">Jewelry & watches</option>
                <option value="washing maching">washing maching</option>
                <option value="Toys & Hobbies">Toys & Hobbies</option>
              </select>
            </div>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for Product"
            />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <div className="header_icons">
            <div className="icon">
              <a href="#">
                <i className="fa-regular fa-heart"></i>
                <span className="count count_favourite">0</span>
              </a>
            </div>
            <div onClick={openCloseCart} className="icon">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="count count_item_header">{totalCount}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_header">
        <div className="container">
          <nav className="nav">
            <span onClick={openMenu} className="open_menu">
              <i className="fa-solid fa-bars"></i>
            </span>
            <div className="category_nav">
              <div onClick={handleCategoryNav} className="category_btn ">
                <i className="fa-solid fa-bars"></i>
                <p>Browser category</p>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div ref={btn_categoryList} className="category_nav_list">
                <a>Top 10 offer</a>
                <a>Electronics & Digi</a>
                <a>phone & Tablet</a>
                <a>fashion & clothing</a>
                <a>Telivsion & monitor</a>
                <a>Jewelry & watches</a>
                <a>Toys & Hobbies</a>
              </div>
            </div>
            {/* nav_linek */}
            <ul ref={btnNavLink} className="nav_links">
              <span onClick={openMenu} className="close_menu">
                <i className="fa-regular fa-circle-xmark"></i>
              </span>
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Accesories</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="login_signup btns">
            {login == true ? (
              <Link to="/login" onClick={handlesetLogin} className="btn">
                Log out <i className="fa-solid fa-right-to-bracket"></i>
              </Link>
            ) : (
              <div className="flex gap-3">
                <Link to="/login" className="btn">
                  Login <i className="fa-solid fa-right-to-bracket"></i>
                </Link>
                <Link className="btn">
                  sign up <i className="fa-solid fa-user-plus"></i>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
