// import Notification from "./Notification";
import { BsFillBellFill } from "react-icons/bs";
const Notification = ({ selectedProducts }) => {
  const productCard =
    selectedProducts &&
    selectedProducts.map((item) => {
      const {
        id = "",
        image_link = "",
        name = "",
        currentPrice = "",
        previousPrice = "",
        notify = "",
      } = item;
      return (
        <li key={id}>
          <div className="minicart-item">
            <div className="thumb">
              <a href="#">
                <img
                  src={image_link}
                  width="90"
                  height="90"
                  alt="National Fresh"
                />
              </a>
            </div>
            <div className="left-info">
              <div className="product-title">
                <a href="#" className="product-name">
                  {name}
                </a>
                <div className="price">
                  <ins>
                    <span className="price-amount">
                      <span className="currencySymbol">Rs. </span>
                      {currentPrice}
                    </span>
                  </ins>
                  <del>
                    <span className="price-amount">
                      <span className="currencySymbol">Rs. </span>
                      {previousPrice}
                    </span>
                  </del>
                </div>
                <p>{notify}</p>
              </div>
              {/* <div className="qty">
                <label htmlFor="cart[id123][qty]">Qty:</label>
                <input
                  type="number"
                  className="input-qty"
                  name="cart[id123][qty]"
                  id="cart[id123][qty]"
                  value="1"
                  disabled
                />
              </div> */}
            </div>
            {/* <div className="action">
              <a href="#" className="edit">
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </a>
              <a href="#" className="remove">
                <i className="fa fa-trash-o" aria-hidden="true"></i>
              </a>
            </div> */}
          </div>
        </li>
      );
    });
  return (
    <div className="minicart-block">
      <div className="minicart-contain">
        <a href="#a" className="link-to notification-bell-wrapper">
          <span className="icon-qty-combine" style={{ position: "relative" }}>
            <BsFillBellFill className="notification-icon biolife-icon" />
            <span
              className="qty num-of-notification"
             
            >
              {selectedProducts && selectedProducts.length}
            </span>
          </span>
        </a>
        <div className="cart-content">
          <div className="cart-inner">
            <ul className="products">{productCard && productCard}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

Notification.defaultProps = {
  selectedProducts: [
    {
      id: 1,
      image_link: "https://etimg.etb2bimg.com/photo/84794404.cms",
      name: "Harpic",
      currentPrice: "40.00",
      previousPrice: "80.00",
      notify: "Get 50% Discount this week. On each Purchase",
    },
    {
      id: 2,
      image_link: "https://assets.unileversolutions.com/v1/1619652.png",
      categories: "Laundry",
      name: "Dove",
      currentPrice: "24.00",
      previousPrice: "80.00",
      notify: "Get 30% Discount this week. On each Purchase",
    },
    {
      id: 3,
      image_link:
        "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
      categories: "Household",
      name: "Colin",
      currentPrice: "36.00",
      previousPrice: "80.00",
      notify: "Get 45% Discount this week. On each Purchase",
    },
  ],
};
