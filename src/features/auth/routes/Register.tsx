import { useState } from "react";
import { Link } from "react-router";
import useHandleRegister from "../hooks/useHandleRegister";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    const { handleRegister } = useHandleRegister();

    return (
        <main className="register">
            <form onSubmit={(e) => handleRegister(e, email, password, confirmedPassword)}>
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
