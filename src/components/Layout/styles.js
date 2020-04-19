import styled from "styled-components";
import { grey } from "@material-ui/core/colors";
import background from "assets/images/background.jpg";
import concentration from "assets/images/cropped-concentration.jpg";
import { theme } from "../../theme";

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
  color: ${theme.palette.white};
  background-image: url(${background});
  padding: ${({ theme }) => theme.spacing(6)}px;
`;

export const HeaderSection = styled.div`
  grid-area: header;
`;

export const ContentSection = styled.div`
  grid-area: content;
  display: flex;
`;
