import React from "react";

interface LabelProps {
    children: React.ReactNode,
    htmlFor: string
}

const Label = ({ htmlFor = '', children }: LabelProps) => {
    return (
        <label htmlFor={htmlFor} className="text-text2 text-sm font-medium my-[10px] dark:text-text3">
            {children}
        </label>
    );
};

export default Label;