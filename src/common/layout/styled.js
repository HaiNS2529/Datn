import styled from "styled-components";

export const HeaderContainer = styled("div")`
  .wrap-navbar {
    display: flex;
    align-items: center;
    gap: 72px;
    .wrap-navlink {
      display: flex;
      align-items: center;
      gap: 30px;
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      text-transform: capitalize;
      a {
        color: #000000;
        &:hover {
          color: #1890ff;
        }
      }
    }
    .btn-action {
      button {
        background: #fda4ba;
        border-radius: 50px;
        width: 160px;
        height: 45px;
        font-weight: 600;
        font-size: 18px;
        line-height: 23px;
        text-align: center;
        text-transform: capitalize;
        color: #000000;
        border: none ;
        transition: 300ms;
        &:hover{
            transform: translateY(-3px);
            box-shadow: 0px 3px 15px #FDA4BA;
        }
        &:active{
            transform: translateY(0px);
            box-shadow: 0px 3px 15px #FDA4BA;
        }
      }
    }
  }
`;
export const FooterContainer = styled("div")`
display: flex ;
align-items: center;
gap: 30px;
justify-content: flex-end;
margin-top: -50px;
z-index: 6;
img{
    cursor: pointer;
}
`;
