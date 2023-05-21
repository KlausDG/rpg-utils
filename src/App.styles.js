import styled from "styled-components";
import {
  Card as MaterialCard,
  TextField as MateiralTextField,
} from "@mui/material";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
`;

export const Card = styled(MaterialCard)`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const TextField = styled(MateiralTextField)`
  width: 500px;
`;

export const HelperText = styled.p`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-align: end;
`;
