import React from "react";
import { AboutContainer } from "./styled";
import { ListAbout } from "../../common/const";
import { Col, Row } from "antd";
const About = (props) => {
  return (
    <AboutContainer>
      <h1 className="title">About Us</h1>
      <div className="container">
        <Row className="wrap-abouts" gutter={[100, 10]}>
          {ListAbout.map((item, index) => {
            return (
              <Col key={index} span={12}>
                <div className="wrap-about">
                  <img src={item.image} alt={item.title} />
                  <div className="about-title">{item.title}</div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </AboutContainer>
  );
};

export default About;
