import React from "react";

const OrderCard = ({ myOrderList, currentMenu }) => {
  return (
    <>
      {currentMenu === "All" && (
        <div>
          {myOrderList &&
            myOrderList.map((item, idx) => {
              const {
                orderNumber,
                shippingType = "",
                orderedDate = "",
                orderedTime = "",
                status = "",
                productList = "",
                isPaid = "",
                isOrderFullFilled = "",
              } = item;

              return (
                <div key={idx} className="order-card">
                  <div className="order-comp">
                    <div className="head">
                      <div className="order-code">
                        <span className="title">Order :</span>
                        {orderNumber}
                      </div>

                      <div className="placed">
                        Placed on <span className="date">{orderedDate}</span> at
                        <span className="time"> {orderedTime}</span>
                      </div>
                    </div>
                    <div className="delivery-wrapper">
                      <span className="text-wrapper">
                        <span className="text">Shipping : </span>
                        {shippingType}
                      </span>
                      <span className="text-wrapper">
                        <span className="text">Status : </span>
                        {status}
                      </span>
                    </div>
                  </div>
                  {productList.map((item) => {
                    const {
                      id = "",
                      image_link = "",
                      categories = "",
                      name = "",
                      qty = "",
                    } = item;
                    return (
                      <div key={id} className="product-detail">
                        <div className="img-wrapper">
                          <img
                            src={image_link}
                            className="product-img"
                            alt=""
                          />
                        </div>
                        <span className="name">{name}</span>
                        <span className="qty">Qty: {qty}</span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </div>
      )}
      {currentMenu === "To Pay" && (
        <div>
          {myOrderList &&
            myOrderList.map((item, idx) => {
              const {
                orderNumber,
                shippingType = "",
                orderedDate = "",
                orderedTime = "",
                status = "",
                productList = "",
                isPaid = "",
              } = item;
              return (
                !isPaid && (
                  <div key={idx} className="order-card">
                    <div className="order-comp">
                      <div className="head">
                        <div className="order-code">
                          <span className="title">Order :</span>
                          {orderNumber}
                        </div>

                        <div className="placed">
                          Placed on <span className="date">{orderedDate}</span>{" "}
                          at
                          <span className="time"> {orderedTime}</span>
                        </div>
                      </div>
                      <div className="delivery-wrapper">
                        <span className="text-wrapper">
                          <span className="text">Shipping : </span>
                          {shippingType}
                        </span>
                        <span className="text-wrapper">
                          <span className="text">Status : </span>
                          {status}
                        </span>
                      </div>
                    </div>
                    {productList.map((item) => {
                      const {
                        id = "",
                        image_link = "",
                        name = "",
                        qty = "",
                      } = item;
                      return (
                        <div key={id} className="product-detail">
                          <div className="img-wrapper">
                            <img
                              src={image_link}
                              className="product-img"
                              alt=""
                            />
                          </div>
                          <span className="name">{name}</span>
                          <span className="qty">Qty: {qty}</span>
                        </div>
                      );
                    })}
                  </div>
                )
              );
            })}
        </div>
      )}
      {currentMenu === "Paid" && (
        <div>
          {myOrderList &&
            myOrderList.map((item, idx) => {
              const {
                orderNumber,
                shippingType = "",
                orderedDate = "",
                orderedTime = "",
                status = "",
                productList = "",
                isPaid = "",
                isOrderFullFilled = "",
              } = item;
              return (
                isPaid && (
                  <div key={idx} className="order-card">
                    <div className="order-comp">
                      <div className="head">
                        <div className="order-code">
                          <span className="title">Order :</span>
                          {orderNumber}
                        </div>

                        <div className="placed">
                          Placed on <span className="date">{orderedDate}</span>{" "}
                          at
                          <span className="time"> {orderedTime}</span>
                        </div>
                      </div>
                      <div className="delivery-wrapper">
                        <span className="text-wrapper">
                          <span className="text">Shipping : </span>
                          {shippingType}
                        </span>
                        <span className="text-wrapper">
                          <span className="text">Status : </span>
                          {status}
                        </span>
                      </div>
                    </div>
                    {productList.map((item) => {
                      const {
                        id = "",
                        image_link = "",
                        categories = "",
                        name = "",
                        qty = "",
                      } = item;
                      return (
                        <div key={id} className="product-detail">
                          <div className="img-wrapper">
                            <img
                              src={image_link}
                              className="product-img"
                              alt=""
                            />
                          </div>
                          <span className="name">{name}</span>
                          <span className="qty">Qty: {qty}</span>
                        </div>
                      );
                    })}
                  </div>
                )
              );
            })}
        </div>
      )}
      {currentMenu === "To Receive" && (
        <div>
          {myOrderList &&
            myOrderList.map((item, idx) => {
              const {
                orderNumber,
                shippingType = "",
                orderedDate = "",
                orderedTime = "",
                status = "",
                productList = "",
                isOrderFullFilled = "",
              } = item;
              return (
                !isOrderFullFilled && (
                  <div key={idx} className="order-card">
                    <div className="order-comp">
                      <div className="head">
                        <div className="order-code">
                          <span className="title">Order :</span>
                          {orderNumber}
                        </div>

                        <div className="placed">
                          Placed on <span className="date">{orderedDate}</span>{" "}
                          at
                          <span className="time"> {orderedTime}</span>
                        </div>
                      </div>
                      <div className="delivery-wrapper">
                        <span className="text-wrapper">
                          <span className="text">Shipping : </span>
                          {shippingType}
                        </span>
                        <span className="text-wrapper">
                          <span className="text">Status : </span>
                          {status}
                        </span>
                      </div>
                    </div>
                    {productList.map((item) => {
                      const {
                        id = "",
                        image_link = "",
                        categories = "",
                        name = "",
                        qty = "",
                      } = item;
                      return (
                        <div key={id} className="product-detail">
                          <div className="img-wrapper">
                            <img
                              src={image_link}
                              className="product-img"
                              alt=""
                            />
                          </div>
                          <span className="name">{name}</span>
                          <span className="qty">Qty: {qty}</span>
                        </div>
                      );
                    })}
                  </div>
                )
              );
            })}
        </div>
      )}
    </>
  );
};

export default OrderCard;
