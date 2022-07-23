import styled from "styled-components";

export const AboutContainer = styled("div")`
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

  .wrap-about {
    width: 543px;
    height: auto;
    min-height: 400px;
    padding-top: 60px;
    padding-bottom: 60px;
    background: #d9d9d9;
    display: flex;
    flex-direction: column;
    gap: 57px;
    align-items: center;
    justify-content: center;
    transition: 300ms;
    cursor: pointer;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0px 3px 15px #fda4ba;
    }
    .about-title {
      font-weight: 700;
      font-size: 55px;
      line-height: 69px;
      color: #000000;
    }
  }
`;
