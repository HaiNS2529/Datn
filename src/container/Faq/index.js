import React from "react";
import { FaqContainer } from "./styled";
import { ListFaq } from "../../common/const";
const Faq = (props) => {
  return (
    <FaqContainer>
      <h1 className="title">FAQs</h1>
      <div className="description">
        We hope this information is useful to you while using.
      </div>
        <div className="wrap-faqs container">
          {ListFaq.map((item, index) => {
            return (
              <div className="wrap-faq" key={index}>
                <span>{item}</span>
              </div>
            );
          })}
        </div>
    </FaqContainer>
  );
};

export default Faq;
