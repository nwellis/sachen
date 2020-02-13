import styled from "styled-components";
import { grey } from "@material-ui/core/colors";
import concentration from "assets/images/cropped-concentration.jpg";

export const LayoutGrid = styled.div`
  display: grid;
  flex: 1;
  min-height: 100%;
  background-color: ${grey[100]};

  grid-template-rows: auto auto 1fr;

  grid-template-areas:
    "about"
    "header"
    "content";
`;

export const AboutSection = styled.div`
  grid-area: about;
  background-image: url(${concentration});
  padding-top: ${({ theme }) => theme.spacing(64)}px;
`;

export const HeaderSection = styled.div`
  grid-area: header;
`;

export const ContentSection = styled.div`
  grid-area: content;
  display: flex;
`;
