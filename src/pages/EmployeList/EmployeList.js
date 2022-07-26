import "./EmployeList.scss";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
// import data from "../../assets/data/data"; // Fake Data
import headOfTable from "../../assets/data/headOfTable";
import { useSelector } from "react-redux";
import Table from "../../components/Table/Table";

/**
 * Component to display a page of list of employees
 *
 * @component
 *
 *
 * @returns (
 *  <EmployeList />
 *)
 */

const EmployeList = () => {
  const storeData = useSelector((state) => state.user.arr); // Data original
  const [data, setData] = useState(storeData);
  const [value, setValue] = useState("");

  const sorting = (obj, order, type) => {
    if (type === "string") {
      if (order === "ASC") {
        const sorted = [...data]
          .map((item) => item)
          .sort((a, b) =>
            a[obj].toLowerCase() > b[obj].toLowerCase() ? 1 : -1
          );
        setData(sorted);
      }

      if (order === "DES") {
        const sorted = [...data].sort((a, b) =>
          a[obj].toLowerCase() < b[obj].toLowerCase() ? 1 : -1
        );
        setData(sorted);
      }
    }

    if (type === "date") {
      if (order === "ASC") {
        const sorted = [...data].sort(
          (a, b) => new Date(a[obj]) - new Date(b[obj])
        );
        setData(sorted);
      }

      if (order === "DES") {
        const sorted = [...data].sort(
          (a, b) => new Date(b[obj]) - new Date(a[obj])
        );
        setData(sorted);
      }
    }
  };

  useEffect(() => {
    if (value.length >= 1) {
      const filteredData = storeData
        .map((item) => item)
        .filter((item) => {
          const search = Object.values(item).find((element) => {
            if (element.toLowerCase().startsWith(value)) {
              return element;
            }
          });

          if (search !== undefined) {
            return item;
          }
        });

      setData(filteredData);
    }

    if (value.length === 0) {
      setData(storeData);
    }
  }, [value]);

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
          <Table header={headOfTable} newData={data} sorting={sorting} />
          {data.length === 0 ? (
            <div className="error-message">
              <h3>no employees</h3>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </main>
  );
};

export default EmployeList;
