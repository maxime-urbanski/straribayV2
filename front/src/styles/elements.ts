import styled from "styled-components";

export const Button = styled.button<{notValid?: boolean}>`
  width: 150px;
  height: 50px;

  text-align: center;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-top: 15px;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.notValid ? 'grey' : props.theme.orange};

  pointer-events: ${(props) => props.notValid && 'none'};
`;

export const Input = styled.input`
  border-radius: 5px;
  margin-top: -17px;
`;

export const Title = styled.h3`
  color: ${({theme}) => theme.blue};
  font-weight: ${({theme}) => theme.bold};
`;

export const Text = styled.p`
  color: ${({theme}) => theme.blue};
`

export const CardTitle = styled.h4`
  font-size: 30px;
  text-transform: uppercase;
  color: ${({theme}) => theme.blue};
  margin: 0 0 40px 0;
`