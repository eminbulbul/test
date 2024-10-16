import React from "react";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";

interface props {
  children?: React.ReactNode;
  onChange?: CheckboxProps["onChange"];
  checked?: boolean;
}

const FormCheckbox: React.FC<props> = ({ children, onChange, checked }) => (
  <div className="flex ">
    <Checkbox onChange={onChange} checked={checked}></Checkbox>
    {children && <div className="ml-3">{children}</div>}
  </div>
);

export default FormCheckbox;
