import { Link } from "react-router";
import useHandleRegisterUser from "../hooks/useHandleRegisterUser";

export default function Register() {
    const { handleRegister } = useHandleRegisterUser();

    return (
        <main>
            <form onSubmit={(e) => handleRegister(e)}>
                <input type="email" name="email" id="email" />
                <input type="password" name="password" id="password" />
                <input type="password" name="confirmPassword" id="confirmPassword" />
                <input type="submit" value="Register" />
            </form>
            <Link to={"/login"}>Login here!</Link>
        </main>
    );
}
