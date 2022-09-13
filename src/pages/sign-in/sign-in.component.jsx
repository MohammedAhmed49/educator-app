import Button from "../../UI/button/button.component";
import { signInWithGoogle } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const signIn = async () => {
        const user = await signInWithGoogle();
        console.log(user);
    }

    return (
        <div className="container mx-auto mt-2">
            <Button type="purple" classnames="border-secondary border" onClick={signIn}>Sign in with Google</Button>
        </div>
    )
}

export default SignIn;