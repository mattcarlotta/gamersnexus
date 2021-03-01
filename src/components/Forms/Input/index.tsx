import * as React from "react";
import styled from "@emotion/styled";
import FieldError from "~components/Forms/FieldError";
import Label from "~components/Forms/Label";
import { InputProps } from "~types";

const InputField = styled.input<{ errors?: string }>`
  text-indent: 10px;
  height: 100%;
  width: 100%;
  background: #f5f5f5;
  color: #3a3a3a;
  border: 1px solid ${({ errors }) => (errors ? "#d03916" : "#ccc")};
  border-radius: 4px;
  transition: 0.2s ease-in-out;
  transition-property: color, border;

  ::placeholder {
    color: #919191;
  }

  :focus {
    outline: 0;
    border: 1px solid #028ddf;
    box-shadow: 0 4px 14px 0 rgba(130, 130, 130, 0.19);
  }
`;

const InputComponent = ({
  className,
  onChange,
  errors,
  label,
  name,
  placeholder,
  type,
  value,
  style
}: InputProps) => (
  <div data-testid="input-container" style={style} className={className}>
    <Label htmlFor={name}>{label}</Label>
    <InputField
      aria-label={name}
      data-testid={name}
      errors={errors}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      type={type}
      tabIndex={0}
      value={value}
    />
    <FieldError errors={errors} />
  </div>
);

const Input = styled(InputComponent)<{ width?: string; height?: string }>`
  @media (max-width: 768px) {
    display: block !important;
    width: 100% !important;
  }

  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "auto"};
  padding: 0 10px;
  display: flex;
  flex-direction: column;
`;

export default Input;
