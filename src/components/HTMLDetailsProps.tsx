import React from "react";

type ButtonProps = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({ children, ...rest }: ButtonProps) => {
  return <button {...rest}>{children}</button>;
};

const HTMLDetailsProps = () => {
  return <Button>cccc</Button>;
};

export default HTMLDetailsProps;
