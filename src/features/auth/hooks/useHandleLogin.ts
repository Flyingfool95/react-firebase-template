import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../services/firebase/firebase";
import validateAuthForm from "../../../utils/validateAuthForm";

export default function useHandleLogin() {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    if (error) {
        //Add error to toast
        console.error(error);
    }

    if (loading) {
        throw new Promise(() => {});
    }

    const handleLogin = (e: React.FormEvent<HTMLFormElement>, email: string, password: string) => {
        e.preventDefault();

        if (!validateAuthForm("login", { email, password })) return;
        
        signInWithEmailAndPassword(email, password);
    };

    return {
        handleLogin,
    };
}
