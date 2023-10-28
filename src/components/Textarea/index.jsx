import { Container } from "./styles";

export function Textarea({ placeholder, onChange, ...rest }) {
  return (
    <Container>
      <label htmlFor="description">Descrição</label>
      <textarea
        onChange={onChange}
        placeholder={placeholder}
        name="description"
        id="description"
        cols="30"
        rows="10"
        {...rest}
      ></textarea>
    </Container>
  );
}
