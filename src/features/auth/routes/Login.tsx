import { useState } from "react";
import { Link } from "react-router";
import useHandleLogin from "../hooks/useHandleLogin";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { handleLogin } = useHandleLogin();

    return (
        <main className="login">
            <form onSubmit={(e) => handleLogin(e, email, password)}>
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
