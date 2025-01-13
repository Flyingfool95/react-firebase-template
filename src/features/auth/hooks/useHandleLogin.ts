import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../services/firebase/firebase";
import useValidateLoginForm from "./useValidateLoginForm";

export default function useHandleLogin() {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const { validateLoginForm } = useValidateLoginForm();
    if (error) {
        //Add error to toast
        console.error(error);
    }

    if (loading) {
        throw new Promise(() => {});
    }

    const handleLogin = (e: React.FormEvent<HTMLFormElement>, email: string, password: string) => {
        e.preventDefault();
        validateLoginForm(email, password);
        signInWithEmailAndPassword(email, password);
    };

    return {
        handleLogin,
    };
}
