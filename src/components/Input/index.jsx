/* eslint-disable react/prop-types */
import { Container } from "./styles.js";

export function Input({
  idContainer,
  title,
  placeholder,
  id,
  type,
  onChange,
  icon,
  required,
  ...rest
}) {
  return (
    <Container id={idContainer}>
      <label htmlFor={id}>
        <span>{icon}</span>
        {title}
      </label>

      <input
        onChange={onChange}
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        required={required}
        {...rest}
      />
    </Container>
  );
}
