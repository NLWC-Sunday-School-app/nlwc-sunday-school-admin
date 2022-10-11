import * as React from "react";
import Tip from "./tip";

interface IFormTextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  label: string;
  inputProps?: React.HTMLProps<HTMLInputElement>;
  className: string;
  value?: string;
  tip?: { title: string; text: string };
  showTip?: boolean;
}

const FormTextarea: React.FunctionComponent<IFormTextareaProps> = ({
  label,
  className,
  onChange,
  showTip,
  value,
  tip,
  ...props
}) => {
  return (
    <div className="form_input">
      <label htmlFor={label}>{label}</label>
      <textarea
        className={className}
        name={label}
        id={label}
        title={label}
        // {...inputProps}
        onChange={onChange}
        defaultValue={value}
        {...props}
      ></textarea>
      {showTip && tip ? <Tip tipText={tip.text} tipTitle={tip.title} /> : ""}
    </div>
  );
};

export default FormTextarea;
