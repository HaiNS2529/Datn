import styled from "styled-components";

export const StepsContainer = styled("div")`
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
  }
  .wrap-steps {
    h2 {
      font-size: 50px;
      line-height: 63px;
    }
    .wrap-step {
      font-size: 25px;
      line-height: 31px;
      white-space: pre-wrap;
      .step-title {
        font-weight: 700;
      }
      .step-description {
        font-weight: 400;
      }
    }
  }
`;
