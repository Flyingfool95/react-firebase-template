import { auth } from "../../services/firebase/firebase";
import useValidateRegisterForm from "./useValidateRegisterForm";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

export default function useRegisterUser() {
    const { validateRegisterForm } = useValidateRegisterForm();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const confirmPassword = formData.get("confirmPassword") as string;

        if (!validateRegisterForm(email, password, confirmPassword)) return;

        createUserWithEmailAndPassword(email, password);
    };

    return {
        handleRegister,
    };
}
