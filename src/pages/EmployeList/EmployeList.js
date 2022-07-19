import "./EmployeList.scss";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import data from "../../assets/data/data";
import headOfTable from "../../assets/data/headOfTable";

const EmployeList = () => {
  const [mockedData, setMockedData] = useState(data);
  const [value, setValue] = useState("");

  const sorting = (obj, order, type) => {
    if (type === "string") {
      console.log("string ok");
      if (order === "ASC") {
        const sorted = [...mockedData].sort((a, b) =>
          a[obj].toLowerCase() > b[obj].toLowerCase() ? 1 : -1
        );
        setMockedData(sorted);
      }

      if (order === "DES") {
        const sorted = [...mockedData].sort((a, b) =>
          a[obj].toLowerCase() < b[obj].toLowerCase() ? 1 : -1
        );
        setMockedData(sorted);
      }
    }

    if (type === "date") {
      if (order === "ASC") {
        const sorted = [...mockedData].sort(
          (a, b) => new Date(a[obj]) - new Date(b[obj])
        );
        setMockedData(sorted);
      }

      if (order === "DES") {
        const sorted = [...mockedData].sort(
          (a, b) => new Date(b[obj]) - new Date(a[obj])
        );
        setMockedData(sorted);
      }
    }
  };

  if (value.length >= 1) {
    const filteredData = mockedData.filter((item) => {
      const search = Object.values(item).find((element) => {
        if (element.toLowerCase().startsWith(value)) {
          return element;
        }
      });

      if (search !== undefined) {
        return item;
      }
    });

    // setMockedData(filteredData);
    // setMockedData(filteredData);
  }

  // if (value.length === 0) {
  //   setMockedData(data);
  // }

  return (
    <main className="employe-list-container">
      <div className="title">
        <h2>Current Employees</h2>
      </div>
      <div className="table-container">
        <div className="search-container">
          <div className="input-container">
            <div className="icon-container">
              <FaSearch />
            </div>
            <input
              type="text"
              id="search-info"
              placeholder="Search..."
              onChange={(e) => setValue(e.target.value.toLowerCase())}
            />
          </div>
        </div>
        <div className="table-layout">
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                {headOfTable.map((item, index) => {
                  const type =
                    item.obj === "start_date" || item.obj === "date_of_birth"
                      ? "date"
                      : "string";
                  return (
                    <th key={index}>
                      <div className="th-layout">
                        <span>{item.name}</span>
                        <div
                          className="svg-layout"
                          onClick={() => sorting(item.obj, "ASC", type)}
                        >
                          <FiChevronUp />
                        </div>
                        <div
                          className="svg-layout"
                          onClick={() => sorting(item.obj, "DES", type)}
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
              {mockedData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.start_date}</td>
                    <td>{item.department}</td>
                    <td>{item.date_of_birth}</td>
                    <td>{item.street}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                    <td>{item.zip_code}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default EmployeList;
