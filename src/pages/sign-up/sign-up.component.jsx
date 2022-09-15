import { Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Button from "../../UI/button/button.component";
import { signInWithGoogle, signUpWithEmail } from "../../utils/firebase/firebase.utils";

const SignUp = () => {
    const formSchema = Yup.object().shape({
        userName: Yup.string()
          .required('User name is mandatory'),
        email: Yup.string()
          .required('Email is mandatory')
          .email('Please enter a valid email'),
        password: Yup.string()
          .required('Password is mendatory')
          .min(6, 'Password must be at 6 char long'),
        confirmPassword: Yup.string()
          .required('Password is mendatory')
          .oneOf([Yup.ref('password')], 'Passwords does not match'),
      })

    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, watch, formState: { errors } } = useForm(formOptions);
    const onSubmit = async (data) => {
        const user = await signUpWithEmail(data.email, data.password);
        console.log(user);
    };

    const signIn = async (e) => {
        e.preventDefault();
        const user = await signInWithGoogle();
        console.log(user);
    }

    return (
        <div>
            <div className="flex">
                <div className="min-h-screen w-1/2 bg-center">
                    <div className="w-2/3 mx-auto flex flex-col justify-center h-full">

                        <h2 className="text-3xl font-bold">Don't have an account?</h2>
                        <h3 className="text-lg mt-3">Create a new account to start your learning journey!</h3>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="my-5">
                                <Input error={Boolean(errors.userName)} color="purple" variant="standard" label="User name" {...register("userName")} />
                                <span className="text-red-500 text-xs">{errors.userName?.message}</span>
                            </div>
                            
                            <div className="my-5">
                                <Input error={Boolean(errors.email)} color="purple" variant="standard" label="Email" type="email" {...register("email")} />
                                <span className="text-red-500 text-xs">{errors.email?.message}</span>
                            </div>
                            
                            <div className="my-5">
                                <Input error={Boolean(errors.password)} color="purple" variant="standard" label="Password" type="password" {...register("password")} />
                                <span className="text-red-500 text-xs">{errors.password?.message}</span>
                            </div>
                            
                            <div className="my-5">
                                <Input error={Boolean(errors.confirmPassword)} color="purple" variant="standard" label="Confirm Password" type="password" {...register("confirmPassword")} />
                                <span className="text-red-500 text-xs">{errors.confirmPassword?.message}</span>
                            </div>

                            <div className="flex justify-between w-full">
                                <Button type="purple" classnames="border-secondary border w-1/4 block">Sign Up</Button>
                                <Button type="turquoise" classnames="border-primary border w-1/4 block" onClick={(e) => signIn(e)}>Google Sign Up</Button>
                            </div>
                        </form>

                        <div className="mt-5">
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