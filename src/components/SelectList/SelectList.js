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
