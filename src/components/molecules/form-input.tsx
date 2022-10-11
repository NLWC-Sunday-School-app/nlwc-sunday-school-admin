import * as React from "react";
import Tip from "./tip";

interface IFormInputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  tip?: { title: string; text: string };
  inputProps?: React.HTMLProps<HTMLInputElement>;
  showTip?: boolean;
}

const FormInput: React.FunctionComponent<IFormInputProps> = ({
  label,
  onChange,
  showTip,
  tip,
  ...props
}) => {
  return (
    <div className="form_input">
      <label htmlFor={label}>{label}</label>
      <input
        name={label}
        id={label}
        title={label}
        onChange={onChange}
        {...props}
      />
      {showTip && tip ? <Tip tipTitle={tip.title} tipText={tip.text} /> : ""}
    </div>
  );
};

export default FormInput;
