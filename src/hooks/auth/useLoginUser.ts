import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase/firebase";
import useValidateLoginForm from "./useValidateLoginForm";

export default function useLoginUser() {
    const { validateLoginForm } = useValidateLoginForm();

    const loginUser = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogin = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        if (!validateLoginForm(email, password)) return;

        await loginUser(email, password);
    };

    return {
        handleLogin,
    };
}
