import styled from "styled-components";
import { Card, CardContent } from "@material-ui/core";

export const FlexCard = styled(Card)`
  display: flex;
  margin: 16px;
  align-items: center;
`;

export const HorizontalCard = styled(FlexCard)`
  flex-flow: row nowrap;
`;

export const VerticalCard = styled(FlexCard)`
  flex-flow: column nowrap;
  padding-top: ${({ theme }) => theme.spacing(4)}px;
`;

export const HorizontalContent = styled(CardContent)`
  flex: 1;
`;
