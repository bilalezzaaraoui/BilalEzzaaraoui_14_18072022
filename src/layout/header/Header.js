import "./Header.scss";
import { Link } from "react-router-dom";
import { BsPeopleFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/employe-list">
          <BsPeopleFill />
        </Link>
      </div>
      <div className="title">
        <h1>HRNet</h1>
      </div>
    </header>
  );
};

export default Header;
