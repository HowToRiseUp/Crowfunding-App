
interface ButtonProp {
    className?: string,
    children: React.ReactNode
    type: "submit" | "reset" | "button" | undefined
}

const Button = ({ className, children, type = 'submit' }: ButtonProp) => {
    return (
        <button type={type} className={`bg-primary rounded-[10px] text-white text-base font-bold p-[13px] ${className}`}>
            {children}
        </button>
    );
};

export default Button;