import { useState } from "react";
import { auth } from "../../../services/firebase/firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    if (error) {
        //Add error to toast
        console.error(error);
    }

    if (loading) {
        //Set global state isLoading to true
        console.log("Loading...");
    }

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        signInWithEmailAndPassword(email, password);
    };

    return (
        <main className="login">
            <form onSubmit={(e) => handleLogin(e)}>
                <label>
                    Email
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Password
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <input type="submit" value={"Login"} />
                <Link to={"/register"}>Register here!</Link>
            </form>
        </main>
    );
}
