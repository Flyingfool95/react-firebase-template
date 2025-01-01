import { useRef } from "react";
import useRegisterUser from "./hooks/auth/useRegisterUser";
import useValidateAuthform from "./hooks/shared/useValidateAuthForm";

function App() {
    const { registerUser } = useRegisterUser();
    const { validateAuthForm } = useValidateAuthform();

    const formRef = useRef<HTMLFormElement | null>(null);

    const handleRegister = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const confirmPassword = formData.get("confirmPassword") as string;

        if (!validateAuthForm(email, password, confirmPassword)) return;

        await registerUser(email, password);

        formRef.current?.reset(); //Clears form after registration is successful
    };

    return (
        <>
            <h1>React Firebase Template</h1>

            <form onSubmit={(e) => handleRegister(e)} ref={formRef}>
                <input type="email" name="email" id="email" />
                <input type="password" name="password" id="password" />
                <input type="password" name="confirmPassword" id="confirmPassword" />
                <input type="submit" value="Register" />
            </form>
        </>
    );
}

export default App;
