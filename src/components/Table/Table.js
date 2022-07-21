import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const Table = (props) => {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          {props.header.map((item, index) => {
            const type =
              item.obj === "startDate" || item.obj === "dateOfBirth"
                ? "date"
                : "string";
            return (
              <th key={index}>
                <div className="th-layout">
                  <span>{item.name}</span>
                  <div
                    className="svg-layout"
                    onClick={() => props.sorting(item.obj, "ASC", type)}
                  >
                    <FiChevronUp />
                  </div>
                  <div
                    className="svg-layout"
                    onClick={() => props.sorting(item.obj, "DES", type)}
                  >
                    <FiChevronDown />
                  </div>
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {props.newData.length >= 1
          ? props.newData.map((item, index) => {
              const startDate = `${item.startDate.split("-")[2]}-${
                item.startDate.split("-")[1]
              }-${item.startDate.split("-")[0]}`;
              const dateOfBirth = `${item.dateOfBirth.split("-")[2]}-${
                item.dateOfBirth.split("-")[1]
              }-${item.dateOfBirth.split("-")[0]}`;
              return (
                <tr key={index}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{startDate}</td>
                  <td>{item.department}</td>
                  <td>{dateOfBirth}</td>
                  <td>{item.street}</td>
                  <td>{item.city}</td>
                  <td>{item.state.toUpperCase()}</td>
                  <td>{item.zipCode}</td>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
};

export default Table;
