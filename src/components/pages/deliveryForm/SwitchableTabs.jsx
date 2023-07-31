import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeliverForm from "./forms/DeliverForm";
import PickupForm from "./forms/pickupForm/PickupForm";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs({ deliveryFormList, stateList }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  // --------------------------------------------------------------------
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Box sx={{ bgcolor: "background.paper", width: 500 }} className="tab-comp">
      <AppBar position="static" className="tab-head">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          className="delivery-tabs"
        >
          {deliveryFormList &&
            deliveryFormList.map((item) => {
              const { id = "", title = "" } = item;
              return (
                <Tab
                  key={id}
                  label={title}
                  {...a11yProps(id)}
                  className="tab"
                />
              );
            })}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        className="delivery-brief"
      >
        {deliveryFormList &&
          deliveryFormList.map((item) =>
            item.formType === "deliver" ? (
              <TabPanel
                value={value}
                index={item.id}
                dir={theme.direction}
                key={item.id}
              >
                <DeliverForm stateList={stateList} />
              </TabPanel>
            ) : (
              <TabPanel
                value={value}
                index={item.id}
                dir={theme.direction}
                key={item.id}
              >
                <PickupForm stateList={stateList} />
              </TabPanel>
            )
          )}
      </SwipeableViews>
    </Box>
  );
}
