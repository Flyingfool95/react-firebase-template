import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../services/firebase/firebase";
import validateAuthForm from "../../../utils/validateAuthForm";

export default function useHandleRegister() {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    if (error) {
        //Add error to toast
        console.error(error);
    }

    if (loading) {
        throw new Promise(() => {});
    }

    const handleRegister = (
        e: React.FormEvent<HTMLFormElement>,
        email: string,
        password: string,
        confirmedPassword: string
    ) => {
        e.preventDefault();

        if (!validateAuthForm("register", { email, password, confirmedPassword })) return;

        createUserWithEmailAndPassword(email, password);
    };

    return {
        handleRegister,
    };
}
