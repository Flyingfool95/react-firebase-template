import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase/firebase";
import useValidateRegisterForm from "./useValidateRegisterForm";

export default function useRegisterUser() {
    const { validateRegisterForm } = useValidateRegisterForm();

    const registerUser = async (email: string, password: string) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error(error);
        }
    };

    const handleRegister = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const confirmPassword = formData.get("confirmPassword") as string;

        if (!validateRegisterForm(email, password, confirmPassword)) return;

        await registerUser(email, password);
    };

    return {
        handleRegister,
    };
}
