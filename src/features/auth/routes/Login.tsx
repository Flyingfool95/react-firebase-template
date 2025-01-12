import { Link } from "react-router";
import useHandleLoginUser from "../hooks/useHandleLoginUser";

export default function Login() {
    const { handleLogin } = useHandleLoginUser();

    return (
        <>
            <form onSubmit={(e) => handleLogin(e)}>
                <input type="email" name="email" id="email" />
                <input type="password" name="password" id="password" />
                <input type="submit" value="Login" />
            </form>
            <Link to={"/register"}>Register here!</Link>
        </>
    );
}
