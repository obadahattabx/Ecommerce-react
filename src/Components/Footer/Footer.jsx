import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="big_row">
          <img className="logo_footer" src="/src/img/white_logo.png" alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
            aliquam.
          </p>

          <div className="icons_footer">
            <a href="#">
              <i className="fa-solid fa-phone"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>

        <div className="row">
          <h4>Find it fast</h4>

          <div className="links">
            <a href="#">
              <i className="fa-solid fa-caret-right"></i> laptops & computer
            </a>
            <a href="#">
              <i className="fa-solid fa-caret-right"></i> smart phones & Tablets
            </a>
            <a href="#">
              <i className="fa-solid fa-caret-right"></i> TV & Audio
            </a>
            <a href="#">
              <i className="fa-solid fa-caret-right"></i> Appliances
            </a>
            <a href="#">
              <i className="fa-solid fa-caret-right"></i> Jewelry & watches
            </a>
          </div>
        </div>

        <div className="row">
          <h4>Quick links</h4>

          <div className="links">
            <a href="#">
              <i className="fa-solid fa-caret-right"></i> Your Account
            </a>
            <a href="#">
              <i className="fa-solid fa-caret-right"></i> Returns & Exchanges
            </a>
            <a href="#">
              <i className="fa-solid fa-caret-right"></i> Shipping & Deliveryo
            </a>
            <a href="#">
              <i className="fa-solid fa-caret-right"></i> Estimated Delivery
              Time
            </a>
            <a href="#">
              <i className="fa-solid fa-caret-right"></i> Purchase Hisotry
            </a>
          </div>
        </div>

        <div className="row">
          <h4>Service us</h4>

          <div className="links">
            <a href="#">
              <i className="fa-solid fa-caret-right"></i> Support Center
            </a>
            <a href="#">
              <i className="fa-solid fa-caret-right"></i> Term & Conditions
            </a>
            <a href="#">
              <i className="fa-solid fa-caret-right"></i> Privacy Policy
            </a>
            <a href="#">
              <i className="fa-solid fa-caret-right"></i> Help
            </a>
            <a href="#">
              <i className="fa-solid fa-caret-right"></i> FAQS
            </a>
          </div>
        </div>
      </div>

      <div className="bottom_footer">
        <div className="container">
          <p>
            &copy; <span>TECO Store.</span>All Rights Reserved.
          </p>
          <div className="payment_img">
            <img src="/src/img/payment_method.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
