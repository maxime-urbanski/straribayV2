import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  position: fixed;
  background-color: ${(props) => props.theme.white};
  -webkit-box-shadow: 0px 5px 10px 0px rgba(51, 50, 50, 0.63);
  -moz-box-shadow: 0px 5px 10px 0px rgba(51, 50, 50, 0.63);
  box-shadow: 0px 5px 10px 0px rgba(51, 50, 50, 0.63);
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  padding: 100px 0 0 0;
  background-color: ${(props) => props.theme.blue};
  width: 100px;
  height: 100%;
`;

export const BottomContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;
export const LastContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 100px 0 0 100px;
  width: 100%;
  max-height: 100%;
`;

export const CreationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 80%;
  height: 60%;
  border-radius: 20px;
  margin: 0 0 50px 0;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(51, 50, 50, 0.63);
  -moz-box-shadow: 0px 5px 10px 0px rgba(51, 50, 50, 0.63);
  box-shadow: 0px 5px 10px 0px rgba(51, 50, 50, 0.63);
`;

export const Card = styled.div`
  height: 300px;
  display: flex;
  margin: 0 50px 50px 50px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(51, 50, 50, 0.63);
  -moz-box-shadow: 0px 5px 10px 0px rgba(51, 50, 50, 0.63);
  box-shadow: 0px 5px 10px 0px rgba(51, 50, 50, 0.63);
`;

export const CardPicture = styled.img`
  border-radius: 10px 0 0 10px;
  max-height: 300px;
`

export const CardBody = styled.div`
  display: flex;
  max-height: 100%;
  width: 100%;
  flex-direction: column;
  padding: 20px;
`

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const CardButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`