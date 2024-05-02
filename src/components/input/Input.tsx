import { useController } from "react-hook-form";

interface InputProps {
    control: any,
    name: string,
    type: React.HTMLInputTypeAttribute | undefined,
    placeholder?: string,
    id?: string
    errors?: any
}

const Input = ({ type, id, name, placeholder, errors, control }: InputProps) => {
    const { field } = useController({
        name,
        control,
        defaultValue: "",
    });
    return (
        <div className="relative">
            <input type={type} {...field} id={id} placeholder={placeholder} className={`px-[25px] py-[15px] placeholder:text-text4 dark:placeholder:text-text3 dark:border-darkStroke border  rounded-[10px]  w-full  text-text1 text-sm mb-[10px] dark:text-white 
            ${errors[name]?.message ? 'placeholder:text-transparent dark:placeholder:text-transparent dark:text-transparent text-transparent border-error dark:border-error focus:text-text1 focus:dark:text-white' : 'border-stock'}
            `} />
            <div className="absolute top-2/4 -translate-y-3/4 left-[25px] select-none pointer-events-none error-message text-error text-sm">{errors[name]?.message}</div>
        </div>
    );
};

export default Input;
