import * as React from "react";

interface IFormInputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  // inputProps?: React.HTMLProps<HTMLInputElement>;
  inputProps?: React.HTMLProps<HTMLInputElement>;
}

const FormInput: React.FunctionComponent<IFormInputProps> = ({
  label,
  onChange,
  ...props
}) => {
  return (
    <div className="form_input">
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        name={label}
        id={label}
        title={label}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default FormInput;
