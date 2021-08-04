import styled from '@emotion/styled/macro';

export const MoviesGallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
`;

export const MoviesItem = styled.li`
  max-width: 300px;
  margin-right: auto;
  margin-left: auto;

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    margin-right: 30px;
    flex-basis: calc((100% - 2 * 30px) / 3);

    &:nth-last-of-type(-n + 2) {
      margin-bottom: 0;
      margin-right: auto;
    }
  }

  @media screen and (max-width: 1024px) {
    &:nth-of-type(3n + 3) {
      margin-right: 0;
    }
  }

  @media screen and (min-width: 1024px) {
    margin-left: 0;
    flex-basis: calc((100% - 3 * 30px) / 4);

    &:nth-of-type(4n + 4) {
      margin-right: 0;
    }
    &:nth-last-of-type(-n + 4) {
      margin-bottom: 0;
    }
  }
`;

export const MoviesImgWrap = styled.div`
  margin-bottom: 10px;
  border-radius: 5px;
  height: 440px;
  overflow: hidden;
`;

export const MoveisTitle = styled.p`
  color: black;
`;
