import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  const { image } = props;
  return (
    <nav className="navbar navbar-expand-lg mb-3 py-0">
      <a href="/">
        <img src={image} className="" alt="Logo" width="302px" height="120px" />
      </a>

      <div className="row">
        <form className="form-inline ">
          {/* <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Buscar"
          ></input> */}
        </form>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "Gold Anda Chile",
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
