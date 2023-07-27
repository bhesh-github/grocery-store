import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MiniCart = ({ selectedProducts }) => {
  const [selectedProductsState, setSelectedproductsState] =
    useState(selectedProducts);
  const productCard =
    selectedProductsState &&
    selectedProductsState.map((item) => {
      const {
        id = "",
        image_link = "",
        name = "",
        currentPrice = "",
        previousPrice = "",
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
              </div>
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
              <div className="qty">
                <label htmlFor="cart[id123][qty]">Qty:</label>
                <input
                  type="number"
                  className="input-qty"
                  name="cart[id123][qty]"
                  id="cart[id123][qty]"
                  defaultValue="1"
                  min="1"
                />
              </div>
            </div>
            <div className="action">
              <a href="#" className="remove">
                <i className="fa fa-trash-o" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </li>
      );
    });
  const navigate = useNavigate();
  return (
    <div className="minicart-block">
      <div className="minicart-contain">
        <a href="#a" className="link-to">
          <span className="icon-qty-combine">
            <i className="icon-cart-mini biolife-icon"></i>
            <span className="qty">
              {selectedProductsState && selectedProductsState.length}
            </span>
          </span>
          <span className="title">My Cart -</span>
          <span className="sub-total">$0.00</span>
        </a>
        <div className="cart-content">
          <div className="cart-inner">
            <ul className="products">{productCard && productCard}</ul>
            <p className="btn-control">
              <span
                className="btn view-cart"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                view cart
              </span>
              <span
                className="btn"
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                checkout
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;

MiniCart.defaultProps = {
  selectedProducts: [
    {
      id: 1,
      image_link: "https://etimg.etb2bimg.com/photo/84794404.cms",
      categories: "Household",
      name: "Harpic",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 2,
      image_link: "https://assets.unileversolutions.com/v1/1619652.png",
      categories: "Laundry",
      name: "Dove",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 3,
      image_link:
        "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
      categories: "Household",
      name: "Colin",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 4,
      image_link: "https://etimg.etb2bimg.com/photo/84794404.cms",
      categories: "Household",
      name: "Harpic",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 5,
      image_link: "https://assets.unileversolutions.com/v1/1619652.png",
      categories: "Laundry",
      name: "Dove",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
    {
      id: 6,
      image_link:
        "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
      categories: "Household",
      name: "Colin",
      currentPrice: "85.00",
      previousPrice: "95.00",
    },
  ],
};
