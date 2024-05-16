interface HeaderProps {
    children: React.ReactNode,
    number?: number
}
const Header = ({ children, number }: HeaderProps) => {
    return (
        <h1 className="text-lg w-full font-semibold my-[10px]">
            {children} {number ? <span className="text-secondary">({number})</span> : ""}
        </h1>
    );
};

export default Header;