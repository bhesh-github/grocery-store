import { TbTruckDelivery } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
const Notification = () => {
  const navigate = useNavigate();
  return (
    <div className="minicart-block">
      <div className="minicart-contain">
        <span className="link-to notification-bell-wrapper">
          <span
            className="icon-qty-combine"
            style={{ position: "relative", cursor: "pointer" }}
          >
            <TbTruckDelivery
              onClick={() => {
                navigate("/delivery-form");
              }}
              className="notification-icon biolife-icon"
              style={{
                position: "absolute",
                right: "-14px",
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
