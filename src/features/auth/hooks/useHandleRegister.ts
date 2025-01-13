import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../services/firebase/firebase";
import useValidateRegisterForm from "./useValidateRegisterForm";

export default function useHandleRegister() {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const { validateRegisterForm } = useValidateRegisterForm();

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
        validateRegisterForm(email, password, confirmedPassword);
        createUserWithEmailAndPassword(email, password);
    };

    return {
        handleRegister,
    };
}
