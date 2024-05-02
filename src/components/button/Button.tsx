
interface ButtonProp {
    className?: string,
    children: React.ReactNode
    type: "submit" | "reset" | "button" | undefined
    loading?: boolean
}

const Button = ({ className, children, loading, type = 'submit' }: ButtonProp) => {
    return (
        <button type={type} className={`bg-primary rounded-[10px] text-white text-base font-bold p-[13px]  ${className}`}>
            {!loading ? children : <div className="p-[13px] border-4 border-white w-fit rounded-full border-x-primary animate-spin mx-auto"></div>}
        </button>
    );
};

export default Button;