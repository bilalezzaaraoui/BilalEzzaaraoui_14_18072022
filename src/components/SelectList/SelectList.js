import React from "react";
/**
 * Component to display a list of selection
 *
 * @component
 *
 *
 * @param {string} props.name - Name of the input
 * @example
 * const string = "dateOfBirth"
 *
 *
 * @returns (
 *  <DateInput name={string} />
 *)
 */

const SelectList = (props) => {
  if (props.name === "state") {
    return (
      <select name={props.name} defaultValue={props.defaultValue} required>
        {props.data.map((item, index) => (
          <option value={item.abbreviation} key={index}>
            {item.name}
          </option>
        ))}
      </select>
    );
  } else {
    return (
      <select name={props.name} defaultValue={props.defaultValue} required>
        {props.data.map((item, index) => (
          <option value={item.name} key={index}>
            {item.name}
          </option>
        ))}
      </select>
    );
  }
};

export default SelectList;
