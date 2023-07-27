import { TbTruckDelivery } from "react-icons/tb";
const Notification = () => {
  return (
    <div className="minicart-block">
      <div className="minicart-contain">
        <span className="link-to notification-bell-wrapper">
          <span
            className="icon-qty-combine"
            style={{ position: "relative", cursor: "pointer" }}
          >
            <TbTruckDelivery
              className="notification-icon biolife-icon"
              style={{
                width: "26px",
                height: "26px",
              }}
            />
          </span>
        </span>
      </div>
    </div>
  );
};

export default Notification;
