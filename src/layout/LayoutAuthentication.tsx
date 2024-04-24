import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { withErrorBoundary } from 'react-error-boundary'
import ErrorFallback from "../components/common/ErrorFallback";

interface LayoutAuthenticationProps {
    header: string,
    children: ReactNode,
}


const LayoutAuthentication = ({ children, header }: LayoutAuthenticationProps) => {
    return (
        <div className="w-full min-h-screen bg-lite relative overflow-hidden isolate p-[24px] lg:p-[40px]">
            <Link to={"/"} className="mb-[20px] lg:mb-[13px] inline-block lg:w-[52px] lg:h-[52px] w-[40px] h-[40px]">
                <img srcSet="/logo.png 2x" alt="logo" className="w-full" />
            </Link>
            <div className="ellipse w-[2838px] h-[2838px] bg-secondary rounded-full z-[-1] absolute opacity-[0.03] left-[-6%] top-1/4"></div>
            <div className="max-w-[556px] rounded-xl bg-white mx-auto z-1 px-[63px] py-[50px]">
                <div className="text-[20px] font-semibold text-center mb-[5px] lg:mb-[10px]">{header}</div>
                {children}
            </div>
        </div>
    );
};

export default withErrorBoundary(LayoutAuthentication, {
    FallbackComponent: ErrorFallback
});