import { Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../UI/button/button.component";

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <div className="flex">
                <div className="min-h-screen w-1/2 bg-center">
                    <div className="w-2/3 mx-auto flex flex-col justify-center h-full">

                        <h2 className="text-3xl font-bold">Don't have an account?</h2>
                        <h3 className="text-lg mt-3">Create a new account to start your learning journey!</h3>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="my-5">
                                <Input error={Boolean(errors.userName)} color="purple" variant="standard" label="User name" {...register("userName",  { required: true, maxLength: 20 })} />
                                {errors.userName?.type === "required" && <span className="text-red-500 text-xs">This field is required</span>}
                                {errors.userName?.type === "maxLength" && <span className="text-red-500 text-xs">Max legnth exceeded</span>}
                            </div>
                            
                            <div className="my-5">
                                <Input error={Boolean(errors.email)} color="purple" variant="standard" label="Email" type="email" {...register("email", { required: true })} />
                                {errors.email?.type === "required" && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>
                            
                            <div className="my-5">
                                <Input error={Boolean(errors.password)} color="purple" variant="standard" label="Password" type="password" {...register("password", { required: true, minLength: 6 })} />
                                {errors.password?.type === "required" && <span className="text-red-500 text-xs">This field is required</span>}
                                {errors.password?.type === "minLength" && <span className="text-red-500 text-xs">Your password should be longer than 5 digits!</span>}
                            </div>
                            
                            <div className="my-5">
                                <Input error={Boolean(errors.confirmPassword)} color="purple" variant="standard" label="Confirm Password" type="password" {...register("confirmPassword", { required: true, minLength: 6 })} />
                                {errors.confirmPassword?.type === "required" && <span className="text-red-500 text-xs">This field is required</span>}
                                {errors.confirmPassword?.type === "minLength" && <span className="text-red-500 text-xs">Your password should be longer than 5 digits!</span>}
                            </div>

                            <Button type="purple" classnames="border-secondary border w-1/4 block ml-auto">Sign up</Button>
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