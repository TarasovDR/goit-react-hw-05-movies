import { ButtonMore } from './Button.styled';

export default function Button({ onClick }) {
  return (
    <ButtonMore type="button" onClick={onClick}>
      Load more
    </ButtonMore>
  );
}
