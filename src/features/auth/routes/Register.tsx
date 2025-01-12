import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../services/firebase/firebase";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    if (error) {
        //Add error to toast
        console.error(error);
    }

    if (loading) {
        //Set global state isLoading to true
        console.log("Loading...");
    }

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        createUserWithEmailAndPassword(email, password);
    };

    return (
        <main className="register">
            <form onSubmit={(e) => handleRegister(e)}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input
                    type="password"
                    value={confirmedPassword}
                    onChange={(e) => setConfirmedPassword(e.target.value)}
                />
                <input type="submit" value={"Register"} />
            </form>
        </main>
    );
}
