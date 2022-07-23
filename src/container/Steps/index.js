import React from "react";
import { StepsContainer } from "./styled";
import { ListSteps } from "../../common/const";
const Steps = (props) => {
  return (
    <StepsContainer>
      <h1 className="title">Get Started with 4 Easy Steps</h1>
      <div className="wrap-steps">
        {ListSteps.map((item, index) => {
          return (
            <div className="wrap-step" key={index}>
              <h2>0{index+1}</h2>
              <div className="step-title">{item.title}</div>
              <div className="step-description">{item.description}</div>
            </div>
          );
        })}
      </div>
    </StepsContainer>
  );
};

export default Steps;
