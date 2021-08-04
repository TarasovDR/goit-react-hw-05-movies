import styled from '@emotion/styled/macro';

export const Btn = styled.button`
  padding: 6px 10px;
  margin-bottom: 30px;
  font-size: 1.1rem;
  background: radial-gradient(at top, #f6ffff, #e6e6e6);
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  &:active {
    transform: scale(0.95);
  }
`;

export const MovieWrap = styled.div`
  display: flex;
`;

export const MovieInfo = styled.ul`
  padding: 20px;
  font-size: 1.2rem;
  text-align: left;
`;

export const MovieImg = styled.img`
  width: 250px;
`;

export const Li = styled.li`
  margin-bottom: 20px;
`;

export const B = styled.b`
  margin-right: 20px;
`;

export const H3 = styled.h3``;
