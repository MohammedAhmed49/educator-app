import { Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../UI/button/button.component";

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(errors);
    return (
        <div>
            <div className="flex">
                <div className="min-h-screen w-1/2 bg-center">
                    <div className="w-2/3 mx-auto flex flex-col justify-center h-full">

                        <h2 className="text-3xl font-bold">Don't have an account?</h2>
                        <h3 className="text-lg mt-3">Create a new account to start your learning journey!</h3>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="my-5">
                                <Input color="purple" variant="standard" label="User name" {...register("userName",  { required: true, maxLength: 20 })} />
                                <p>{errors.userName?.message}</p>
                            </div>
                            
                            <div className="my-5">
                                <Input color="purple" variant="standard" label="Email" type="email" {...register("email", { required: true })} />
                                <p>{errors.email?.message}</p>
                            </div>
                            
                            <div className="my-5">
                                <Input color="purple" variant="standard" label="Password" type="password" {...register("password", { required: true, minLength: 6 })} />
                                <p>{errors.password?.message}</p>
                            </div>
                            
                            <div className="my-5">
                                <Input color="purple" variant="standard" label="Confirm Password" type="password" {...register("confirmPassword", { required: true, minLength: 6 })} />
                                <p>{errors.confirmPassword?.message}</p>
                            </div>

                            <Button type="purple" classNames="border-secondary border w-1/4 block ml-auto">Sign up</Button>
                        </form>

                        <div>
                            <p>Already have an account? <Link to="/sign-in" className="text-secondary underline">Sign in</Link></p>
                        </div>
                    </div>
                </div>
                <div className="min-h-screen bg-auth-side w-1/2 bg-center"></div>
            </div>
        </div>
    )
}

export default  SignUp;