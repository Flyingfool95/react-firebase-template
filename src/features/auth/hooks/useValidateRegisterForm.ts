export default function useValidateRegisterForm(MIN_PASSWORD_LENGTH = 8) {
    const validateRegisterForm = (email: string, password: string, confirmPassword: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !password || !confirmPassword) {
            console.error("All fields must be filled");
            return false;
        }
        if (!emailRegex.test(email)) {
            console.error("Email format is wrong");
            return false;
        }
        if (password.length < MIN_PASSWORD_LENGTH) {
            console.error(`Password must be at least ${MIN_PASSWORD_LENGTH} characters`);
            return false;
        }
        if (password !== confirmPassword) {
            console.error("Passwords must match");
            return false;
        }

        return true;
    };

    return {
        validateRegisterForm,
    };
}
