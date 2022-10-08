import * as React from "react";

interface IContentWrapperProps {
  children: JSX.Element;
  className?: string;
}

const ContentWrapper: React.FunctionComponent<IContentWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`content-wrapper ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default ContentWrapper;
