import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartProducts }) => {
  const [selectedQty] = useState(1);

  const handleQtyChange = (idx) => {
    let sQty = parseInt(document.getElementById(`qty_${idx}`).value);
    let cPrice = parseFloat(
      document.getElementById(`currentPrice_${idx}`).innerText
    );
    document.getElementById(`total_${idx}`).innerHTML = (cPrice * sQty).toFixed(
      2
    );

    let totalPriceElements = document.getElementsByClassName("total_price");

    let grandTotal = 0;
    for (let i = 0; i < totalPriceElements.length; i++) {
      grandTotal = grandTotal + parseFloat(totalPriceElements[i].innerText);
    }

    document.getElementById("grand_total").innerText = grandTotal.toFixed(2);
  };

  let initialGrandTotal = 0;
  const productsList =
    cartProducts &&
    cartProducts.map((item, idx) => {
      const {
        name = "",
        currentPrice = "",
        previousPrice = "",
        image_link = "",
        categories = "",
      } = item;
      initialGrandTotal += Number(currentPrice);
      //   --------------------------------------------------------------------------
      return (
        <tr className="cart_item" key={idx}>
          <td className="product-thumbnail" data-title="Product Name">
            <span className="prd-thumb">
              <figure>
                <img
                  width="113"
                  height="113"
                  src={image_link}
                  alt="shipping cart"
                />
              </figure>
            </span>
            <span className="prd-name" style={{ color: "#000" }}>
              {name}
            </span>
            <div className="action">
              <a className="remove" style={{cursor:'pointer'}}>
                <i className="fa fa-trash-o" aria-hidden="true"></i>
              </a>
            </div>
          </td>
          <td className="product-price" data-title="Price">
            <div className="price price-contain">
              <ins>
                <span className="price-amount">
                  <span className="currencySymbol">Rs. </span>
                  <span id={`currentPrice_${idx}`}>{currentPrice}</span>
                </span>
              </ins>
              <del>
                <span className="price-amount">
                  <span className="currencySymbol">Rs.</span>
                  {previousPrice}
                </span>
              </del>
            </div>
          </td>
          <td className="product-quantity" data-title="Quantity">
            <div className="quantity-box type1">
              {/* <div className="qty-input">
                <input
                  type="text"
                  name="qty12554"
                  value={selectedQty}
                  data-step="1"
                />
                <span
                  href="#"
                  className="qty-btn btn-up"
                  onClick={() => {
                    setSelectedQty((prev) => prev + 1);
                  }}
                >
                  <i className="fa fa-caret-up" aria-hidden="true"></i>
                </span>
                <span
                  href="#"
                  className="qty-btn btn-down"
                  onClick={() => {
                    selectedQty > 1 && setSelectedQty((prev) => prev - 1);
                  }}
                >
                  <i className="fa fa-caret-down" aria-hidden="true"></i>
                </span>
              </div> */}
              <input
                defaultValue="1"
                type="number"
                id={`qty_${idx}`}
                onChange={() => {
                  handleQtyChange(idx);
                }}
                min="1"
                className="qty-input-field"
              />
            </div>
          </td>
          <td className="product-subtotal" data-title="Total">
            <div className="price price-contain">
              <ins>
                <span className="price-amount">
                  <span className="currencySymbol">Rs.</span>
                  <span className="total_price" id={`total_${idx}`}>
                    {currentPrice * selectedQty}.00
                  </span>
                </span>
              </ins>
            </div>
          </td>
        </tr>
      );
    });

  const navigate = useNavigate();
  return (
    <div className="page-contain shopping-cart cart-page">
      <div id="main-content" className="main-content">
        <div className="container">
          <div className="shopping-cart-container" style={{ margin: "2em" }}>
            <div className="row">
              <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                <h3 className="box-title" style={{ textAlign: "left" }}>
                  Your cart items
                </h3>
                <form className="shopping-cart-form" action="#" method="post">
                  <table className="shop_table cart-form">
                    <thead>
                      <tr>
                        <th className="product-name">Product Name</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productsList && productsList}
                      <tr className="cart_item wrap-buttons">
                        <td className="wrap-btn-control" colspan="4">
                          <a
                            className="btn back-to-shop"
                            onClick={() => {
                              navigate("/");
                            }}
                          >
                            Back to Shop
                          </a>
                          <button className="btn btn-clear" type="reset">
                            clear all
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                <div className="shpcart-subtotal-block">
                  <div className="subtotal-line">
                    <b className="stt-name">
                      Subtotal
                      <span className="sub">
                        ({productsList && productsList.length} items)
                      </span>
                    </b>
                    <span className="stt-price">
                      Rs.
                      <span id="grand_total">
                        {initialGrandTotal && initialGrandTotal.toFixed(2)}
                      </span>
                    </span>
                  </div>
                  <div class="subtotal-line">
                    <b class="stt-name">Shipping</b>
                    <span class="stt-price">Rs 20.00</span>
                  </div>
                  <div class="tax-fee">
                    <p class="title">Est. Taxes & Fees</p>
                    <p class="desc">Based on 56789</p>
                  </div>
                  <div className="btn-checkout">
                    <span
                      className="btn checkout"
                      onClick={() => {
                        navigate("/checkout");
                      }}
                    >
                      Check out
                    </span>
                  </div>
                  <p className="pickup-info">
                    <b>Free Pickup</b> is available as soon as today More about
                    shipping and pickup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

Cart.defaultProps = {
  cartProducts: [
    {
      id: 1,
      type: "fruitsandvegetables",
      image_link:
        "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
      categories: "Vegetables",
      name: "Red Cabbage",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Red-cabbage-cross-section-5017ef7.jpg",
          "assets/images/details-product/detail_02.jpg",
          "assets/images/details-product/detail_03.jpg",
          "assets/images/details-product/detail_04.jpg",
          "assets/images/details-product/detail_05.jpg",
          "assets/images/details-product/detail_06.jpg",
          "assets/images/details-product/detail_07.jpg",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
    {
      id: 4,
      type: "grocery",
      image_link: "https://m.media-amazon.com/images/I/61791-sRVQL.jpg",
      categories: "Peas",
      name: "Safal",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "assets/images/details-product/detail_01.jpg",
          "assets/images/details-product/detail_02.jpg",
          "assets/images/details-product/detail_03.jpg",
          "assets/images/details-product/detail_04.jpg",
          "assets/images/details-product/detail_05.jpg",
          "assets/images/details-product/detail_06.jpg",
          "assets/images/details-product/detail_07.jpg",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
    {
      id: 3,
      type: "laundryAndHousehold",
      image_link:
        "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
      categories: "Household",
      name: "Colin",
      currentPrice: "85.00",
      previousPrice: "95.00",
      modalCartData: {
        image_link_list: [
          "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/I/61PAkjiijnL._AC_UF1000,1000_QL80_.jpg",
        ],
        introduction:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus lacus. Duis ut mauris eget justo dictum tempus sed vel tellus.",
        categories: "Juice",
        tags: "food theme organic food organic theme",
        brand: "Real Juice",
      },
    },
  ],
};
