import useRegisterUser from "./hooks/auth/useRegisterUser";

function App() {
    const { handleRegister } = useRegisterUser();

    return (
        <>
            <h1>React Firebase Template</h1>

            <form onSubmit={(e) => handleRegister(e)}>
                <input type="email" name="email" id="email" />
                <input type="password" name="password" id="password" />
                <input type="password" name="confirmPassword" id="confirmPassword" />
                <input type="submit" value="Register" />
            </form>
        </>
    );
}

export default App;
