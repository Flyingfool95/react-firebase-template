import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { auth } from "../../services/firebase/firebase";

export default function useRegisterUser() {
    const registerUser = async (email: string, password: string, confirmPassword: string) => {
        if (!email || !password || !confirmPassword) return console.error("All fields must be filled");
        if (password !== confirmPassword) return console.error("Passwords must match");

        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {}
    };

    return {
        registerUser,
    };
}
