import React from "react";
import { HeaderContainer } from "./styled";
import { navLink } from "../const";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <HeaderContainer className="container d-flex justify-content-between align-items-center">
      <div className="wrap-logo">
        <img src="/image/logo.png" alt="logo" />
      </div>
      <div className="wrap-navbar">
        <div className="wrap-navlink">
          {navLink.map((item, index) => {
            return (
              <Link className="item-navlink" to={item.link}>
                  <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
        <div className="btn-action">
            <button>Connect wallet</button>
        </div>
      </div>
    </HeaderContainer>
  );
};
export default Header;
