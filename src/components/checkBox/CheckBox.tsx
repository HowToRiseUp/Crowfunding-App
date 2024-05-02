import { useEffect } from "react";
import { useController } from "react-hook-form";

interface CheckBoxProps {
    name: string;
    checked: boolean;
    onClick: () => void;
    children?: React.ReactNode;
    control: any
}

const CheckBox = ({ name, checked = false, onClick, children, control }: CheckBoxProps) => {
    const { field, fieldState } = useController({
        name,
        control
    });
    useEffect(() => {
        field.value = checked;
    }, [])
    return (
        <div className='inline-flex items-start gap-4'>
            <div className="checkbox cursor-pointer relative" onClick={onClick} >
                <span className={`flex justify-center bg-primary p-1 rounded items-center w-5 h-5 ${!checked ? 'bg-white dark:bg-darkSecondary  border-2 border-text3' : ''}`} >
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.60078 7.91999L2.48078 4.79999L0.800781 6.47999L5.60078 11.28L15.2008 1.68L13.5208 0L5.60078 7.91999Z" fill="white" />
                    </svg>
                </span>
                <input className="absolute inset-0 opacity-0 dark:text-darkSecondary "  {...field} type="checkbox" defaultChecked={field.value} name={name} />
                <div className={`absolute  p-2 top-[2px] left-[2px] rounded-sm ${checked ? "bg-transparent" : "dark:bg-darkSecondary"}`}></div>
            </div>

            <div className="label " onClick={onClick}>
                {children}
            </div>
        </div >
    );
};

export default CheckBox;