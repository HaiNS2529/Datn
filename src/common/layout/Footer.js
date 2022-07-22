import React from "react";
import { FooterContainer } from "./styled";
const Footer = (props) => {
  return (
    <FooterContainer className="container">
      <img src="/image/telegram.png" alt="telegram" />
      <img src="/image/twitter.png" alt="twitter" />
      <img src="/image/githab.png" alt="githab" />
    </FooterContainer>
  );
};
export default Footer;
