import { useController } from "react-hook-form";

interface InputProps {
    control: any,
    name: string,
    type: React.HTMLInputTypeAttribute | undefined,
    placeholder?: string,
    id?: string
}

const Input = (props: InputProps) => {
    const { field } = useController({
        name: props.name,
        control: props.control,
        defaultValue: "",
    });
    return (
        <div className="relative">
            <input type={props.type} {...field} id={props.id} placeholder={props.placeholder} className="px-[25px] py-[15px] placeholder:text-text4 border border-stock rounded-[10px] w-full text-text1 text-sm mb-[10px]" />
        </div>
    );
};

export default Input;
