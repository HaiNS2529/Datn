import styled from "styled-components";

export const FaqContainer = styled("div")`
  background: rgba(171, 215, 216, 0.6);
  padding-bottom: 100px;
  padding-top: 30px;
  color: #000000;
  text-align: center;
  text-transform: capitalize;
  h1 {
    font-size: 55px;
    line-height: 69px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  .description {
    font-weight: 500;
    font-size: 25px;
    line-height: 31px;
  }
  .wrap-faqs {
    margin-top: 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    .wrap-faq {
      width: 1000px;
      max-width: 80%;
      height: 100px;
      background: #d9d9d9;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      transition: 300ms;
      cursor: pointer;
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0px 3px 15px #fda4ba;
      }
      span {
        font-feature-settings: "case" on;
        font-weight: 700;
        font-size: 25px;
        line-height: 31px;
      }
    }
  }
`;
