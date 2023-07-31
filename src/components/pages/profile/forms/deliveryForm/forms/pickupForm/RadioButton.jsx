import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};

export default function UseRadioGroup({ pickupFormOptions }) {
  const [selectedInputValue, setSelectedInputValue] = React.useState(
    "Collect from Grocery Store"
  );

  return (
    <RadioGroup name="use-radio-group" defaultValue="default1">
      {pickupFormOptions &&
        pickupFormOptions.map((item) => (
          <>
            <MyFormControlLabel
              onChange={(e) => {
                setSelectedInputValue(e.target.name);
              }}
              key={item.id}
              value={`default${item.id}`}
              label={item.title}
              control={<Radio />}
              name={item.title}
            />
            <ul className="list-wrapper">
              {item.brief &&
                item.brief.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </>
        ))}
    </RadioGroup>
  );
}
