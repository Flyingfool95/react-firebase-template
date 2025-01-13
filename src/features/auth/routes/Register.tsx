import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../services/firebase/firebase";
import { Link } from "react-router";

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
        //Use Supsense to handle loading state
        throw new Promise(() => {});
    }

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        createUserWithEmailAndPassword(email, password);
    };

    return (
        <main className="register">
            <form onSubmit={(e) => handleRegister(e)}>
                <label>
                    Email
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Password
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    Confirm Password
                    <input
                        type="password"
                        value={confirmedPassword}
                        onChange={(e) => setConfirmedPassword(e.target.value)}
                    />
                </label>
                <input type="submit" value={"Register"} />
                <Link to={"/login"}>Login here!</Link>
            </form>
        </main>
    );
}
