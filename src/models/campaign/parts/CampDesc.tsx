
const CampDesc = ({ children, className = "mb-4 text-xs" }: { children?: React.ReactNode, className?: string }) => {
  return (
    <p className={`font-normal text-text3 ${className}`}>
      {children}
    </p>
  );
};

export default CampDesc;
