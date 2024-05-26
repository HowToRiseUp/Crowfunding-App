import React from "react";
import { Link } from "react-router-dom";
import classNames from "../../utils/className";

interface ButtonProps {
    className?: string;
    children: React.ReactNode;
    type?: "submit" | "reset" | "button";
    kind?: "primary" | "secondary" | "ghost";
    isLoading?: boolean;
    onClick?: () => void;
    href?: string; // Add href property to ButtonProps
}

const Button: React.FC<ButtonProps> = ({
    type = "button",
    children,
    className = "",
    isLoading = false,
    kind,
    href,
    ...rest
}: ButtonProps) => {
    const child = !!isLoading ? (
        <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent border-b-transparent animate-spin"></div>
    ) : (
        children
    );
    let defaultClassName =
        "flex items-center justify-center p-4 text-base font-semibold rounded-xl min-h-[56px]";
    switch (kind) {
        case "primary":
            defaultClassName = defaultClassName + " bg-primary text-white";
            break;
        case "secondary":
            defaultClassName = defaultClassName + " bg-secondary text-white";
            break;
        case "ghost":
            defaultClassName =
                defaultClassName + " bg-secondary bg-opacity-10 text-secondary";
            break;
        default:
            break;
    }
    if (href)
        return (
            <Link to={href} className={classNames(defaultClassName, className)}>
                {child}
            </Link>
        );
    return (
        <button
            className={classNames(
                defaultClassName,
                !!isLoading ? "opacity-50 pointer-events-none" : "",
                className
            )}
            type={type}
            {...rest}
        >
            {child}
        </button>
    );
};

export default Button;
