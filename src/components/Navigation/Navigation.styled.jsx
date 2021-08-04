import styled from '@emotion/styled/macro';

export const Nav = styled.nav`
  margin-bottom: 30px;
`;

export const UlNav = styled.ul`
  display: flex;
  justify-content: center;
  font-size: 1.6rem;
  /* color: #000; */
`;

export const LiNav = styled.li`
  padding: 8px 16px;
  min-width: 80px;
  background: radial-gradient(at top, #f7ffff, #c4e2e1);
  border-radius: 8px;

  &:not(:last-child) {
    margin-right: 50px;
  }
`;
