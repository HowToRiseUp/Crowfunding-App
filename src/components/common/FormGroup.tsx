import React from "react";

interface FormGroupProps {
    children: React.ReactNode,
    className?: string
}

const FormGroup = ({ children, className }: FormGroupProps) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {children}
        </div>
    );
};

export default FormGroup;