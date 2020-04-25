import styled from "styled-components";

// export const MainContainer = styled(Container)`
//   padding: ${({ theme }) => theme.spacing(4)}px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// export const ExhibitionCard = styled(Card)`
//   width: fit-content;
//   height: max-content;
// `;

export const ExhibitionsGrid = styled.div`
  display: grid;
  flex: 1;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;

  grid-template-areas:
    "events cover"
    "gallery gallery";
`;

export const EventsSection = styled.div`
  grid-area: events;
  padding: ${({ theme }) => theme.spacing(2)}px;
  display: flex;
  justify-content: end;
`;

export const CoverSection = styled.div`
  grid-area: cover;
  padding: ${({ theme }) => theme.spacing(2)}px;
  display: flex;
  justify-content: end;
`;

export const GallerySection = styled.div`
  grid-area: content;
`;
