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
                <label htmlFor="email">
                    Email
                    <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label htmlFor="password">
                    Password
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label htmlFor="confirmPassword">
                    Confirm Password
                    <input
                        id="confirmPassword"
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
