import * as React from "react";

interface IFormTextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  label: string;
  inputProps?: React.HTMLProps<HTMLInputElement>;
  className: string;
  value?: string;
}

const FormTextarea: React.FunctionComponent<IFormTextareaProps> = ({
  label,
  className,
  onChange,
  value,
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
      ></textarea>
    </div>
  );
};

export default FormTextarea;
