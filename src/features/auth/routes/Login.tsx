import { useState } from "react";
import { auth } from "../../../services/firebase/firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

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

    return (
        <main>
            <form onSubmit={() => signInWithEmailAndPassword(email, password)}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value={"Sign In"} />
            </form>
        </main>
    );
}
