import styled from "styled-components";

export const Button = styled.button`
  width: 150px;
  height: 50px;

  text-align: center;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.orange};
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.blue};
  font-weight: ${(props) => props.theme.bold};

  margin: 50px 0 50px 50px;
`;
