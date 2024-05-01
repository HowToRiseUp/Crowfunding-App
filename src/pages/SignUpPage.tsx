import { Link } from "react-router-dom";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { useForm } from "react-hook-form"
import { Input } from "../components/input";
import { Label } from "../components/label";
import FormGroup from "../components/common/FormGroup";
import Button from "../components/button";
import CheckBox from "../components/checkBox";
import { useState } from "react";

type FormValues = {
    FullName: string,
    Email: string,
    Password: string,
    term: boolean
}

const SignUpPage = () => {
    const { handleSubmit, control } = useForm<FormValues>({
        defaultValues: {
            FullName: '',
            Email: '',
            Password: '',
            term: false,
        }
    })
    const onSubmit = (data: FormValues) => {
        console.log(data)
    }

    const [acceptTerm, setAcceptTerm] = useState(false)
    const handleToggleTerm = () => {
        setAcceptTerm(acceptTerm => !acceptTerm)
    }
    return (
        <>
            <LayoutAuthentication header="Sign Up">
                <p className="text-center text-text3 text-xs lg:text-sm mb-[25px] lg:mb-[30px]">Already have an account? <Link className="text-primary" to="/">Sign in</Link></p>
                <div className="cursor-pointer flex items-center justify-center gap-[10px] border border-stock rounded-[10px] mb-[10px]">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3055 10.0415L21.5 10.0415L21.5 10L12.5 10L12.5 14L18.1515 14C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z" fill="#FBC02D" />
                        <path d="M3.65332 7.3455L6.93882 9.755C7.82782 7.554 9.98082 6 12.5003 6C14.0298 6 15.4213 6.577 16.4808 7.5195L19.3093 4.691C17.5233 3.0265 15.1343 2 12.5003 2C8.65932 2 5.32832 4.1685 3.65332 7.3455Z" fill="#E53935" />
                        <path d="M12.5002 22C15.0832 22 17.4302 21.0115 19.2047 19.404L16.1097 16.785C15.1057 17.5455 13.8577 18 12.5002 18C9.89916 18 7.69066 16.3415 6.85866 14.027L3.59766 16.5395C5.25266 19.778 8.61366 22 12.5002 22Z" fill="#4CAF50" />
                        <path d="M22.3055 10.0415L22.2975 10L21.5 10L12.5 10L12.5 14L18.1515 14C17.7555 15.1185 17.036 16.083 16.108 16.7855C16.1085 16.785 16.109 16.785 16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z" fill="#1565C0" />
                    </svg>
                    <span className="py-[13px] text-center text-base font-bold text-text2">Sign up with google</span>
                </div>
                <div className="text-text2 lg:text-sm text-xs text-center p-[10px]">Or sign up with email</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                        <Label htmlFor="FullName">Full Name *</Label>
                        <Input control={control} type="text" id="FullName" name="FullName" placeholder="John Doe" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="Email">Email *</Label>
                        <Input control={control} type="email" id="Email" name="Email" placeholder="example@gmail.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="Password">Password *</Label>
                        <Input control={control} type="password" id="Password" name="Password" placeholder="Create a password" />
                    </FormGroup>
                    <CheckBox control={control} name="term" checked={acceptTerm} onClick={handleToggleTerm}>
                        <p className="flex-1 text-xs lg:text-sm text-text2 dark:text-text3">
                            I agree to the
                            <span className="underline text-secondary">
                                {" "}
                                Terms of Use
                            </span>{" "}
                            and have read and understand the
                            <span className="underline text-secondary"> Privacy policy.</span>
                        </p>
                    </CheckBox>
                    <Button type="submit" className="w-full">Create my account</Button>
                </form>


            </LayoutAuthentication>
        </>
    );
};

export default SignUpPage;