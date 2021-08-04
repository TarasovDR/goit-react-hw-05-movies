import styled from '@emotion/styled/macro';

export const Form = styled.form`
  display: flex;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  max-width: 450px;
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 4px;
  border: 2px solid #dadada;

  font-size: 1.1rem;

  &:focus {
    outline: none;
    border-color: #70ffb0;
  }
`;

export const FormButton = styled.button`
  font-size: 1.1rem;
`;
