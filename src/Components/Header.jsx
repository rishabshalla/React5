import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="header-container">
        <Link to="/home" className="link">
          HOME
        </Link>
        <Link to="/student" className="link">
          STUDENTS
        </Link>
        <Link to="/contact" className="link">
          CONTACT
        </Link>
      </nav>
    </>
  );
};

export default Header;
