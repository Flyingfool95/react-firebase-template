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

    return (
        <div className="App">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" value={confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)} />
            <button onClick={() => createUserWithEmailAndPassword(email, password)}>Register</button>
        </div>
    );
}
