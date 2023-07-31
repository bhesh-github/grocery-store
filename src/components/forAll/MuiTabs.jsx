import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ productInformation }) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="mui-tabs">
      <Box sx={{borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          className="tabs"
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="scrollable auto tabs example"
        >
          {productInformation &&
            productInformation.map((item, idx) => {
              const { id = "", title = "" } = item;
              return (
                <Tab
                  label={title}
                  {...a11yProps(idx)}
                  key={id}
                  className="tab-name"
                />
              );
            })}
        </Tabs>
      </Box>
      {productInformation &&
        productInformation.map &&
        productInformation.map((item, idx) => {
          const { id = "", brief = "" } = item;
          return (
            <CustomTabPanel
              value={value}
              index={idx}
              key={id}
              className="tab-description"
            >
              {brief}
            </CustomTabPanel>
          );
        })}
    </Box>
  );
}
