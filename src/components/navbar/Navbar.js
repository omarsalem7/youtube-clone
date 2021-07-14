import { React, useState } from "react";
import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";

const Navbar = (props) => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmitForm } = props;
    onSubmitForm(search);
  };

  return (
    <div className="container">
      <div className="bar">
        <IconContext.Provider value={{ color: "#FF0000", size: "37px" }}>
          <FaYoutube className="youtube-icon" />
        </IconContext.Provider>
        <div className="search-bar">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" onChange={handleChange} />
            <button>
              <AiOutlineSearch color="#585858" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
