import useLoginUser from "../hooks/useLoginUser";

export default function Login() {
    const { handleLogin } = useLoginUser();

    return (
        <>
            <form onSubmit={(e) => handleLogin(e)}>
                <input type="email" name="email" id="email" />
                <input type="password" name="password" id="password" />
                <input type="submit" value="Login" />
            </form>
        </>
    );
}
