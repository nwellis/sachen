import styled from "styled-components";
import { Card } from "../Common";
import { Container } from "@material-ui/core";

export const MainContainer = styled(Container)`
  padding: ${({ theme }) => theme.spacing(4)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ExhibitionCard = styled(Card)`
  width: fit-content;
  height: max-content;
`;
