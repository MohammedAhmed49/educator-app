import { getUserDocument, signInWithEmail, signInWithGoogle } from "../../utils/firebase/firebase.utils";
import { Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Button from "../../UI/button/button.component";

const SignIn = () => {
    const formSchema = Yup.object().shape({
        email: Yup.string()
          .required('Email is mandatory')
          .email('Please enter a valid email'),
        password: Yup.string()
          .required('Password is mendatory')
          .min(6, 'Password must be at 6 char long'),
      });

    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState: { errors } } = useForm(formOptions);
    const onSubmit = async (data) => {
        const user = await signInWithEmail(data.email, data.password);
        const res = await getUserDocument(user.user);
        if (user) {
            reset ({
                email: '',
                password: '',
            });
        }
    };
    const gooleSignIn = async (e) => {
        e.preventDefault();
        const user = await signInWithGoogle();
        if (user) {
            reset ({
                email: '',
                password: '',
            });
        }
    }

    return (
        <div>
            <div className="flex">
                <div className="min-h-screen w-1/2 bg-center">
                    <div className="w-2/3 mx-auto flex flex-col justify-center h-full">

                        <h2 className="text-3xl font-bold">Sign in to continue learning.</h2>
                        <h3 className="text-lg mt-3">Continue your learning journey with courses you started!</h3>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            
                            <div className="my-5">
                                <Input error={Boolean(errors.email)} color="purple" variant="standard" label="Email" type="email" {...register("email")} />
                                <span className="text-red-500 text-xs">{errors.email?.message}</span>
                            </div>
                            
                            <div className="my-5">
                                <Input error={Boolean(errors.password)} color="purple" variant="standard" label="Password" type="password" {...register("password")} />
                                <span className="text-red-500 text-xs">{errors.password?.message}</span>
                            </div>

                            <div className="flex justify-between w-full">
                                <Button type="purple" classnames="border-secondary border w-1/4 block">Sign In</Button>
                                <Button type="turquoise" classnames="border-primary border w-1/4 block" onClick={(e) => gooleSignIn(e)}>Google Sign In</Button>
                            </div>
                        </form>

                        <div className="mt-5">
                            <p>Don't have an account? <Link to="/sign-up" className="text-secondary underline">Create account now!</Link></p>
                        </div>
                    </div>
                </div>
                <div className="min-h-screen bg-auth-side w-1/2 bg-center"></div>
            </div>
        </div>
    )
}

export default SignIn;