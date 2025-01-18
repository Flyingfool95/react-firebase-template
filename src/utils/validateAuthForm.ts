export default function validateAuthForm(
    formType: string,
    formData: {
        email: string;
        password: string;
        confirmedPassword?: string;
    }
) {
    const MIN_PASSWORD_LENGTH = 8;
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const { email, password, confirmedPassword } = formData;

    if (!email || !password) {
        console.error("All fields must be filled");
        return false;
    }
    if (!EMAIL_REGEX.test(email)) {
        console.error("Email format is wrong");
        return false;
    }
    if (password.length < MIN_PASSWORD_LENGTH) {
        console.error(`Password must be at least ${MIN_PASSWORD_LENGTH} characters`);
        return false;
    }

    // Only validate confirmedPassword if formType is 'register'
    if (formType === "register") {
        if (!confirmedPassword) {
            console.error("Confirm password is required for registration");
            return false;
        }
        if (password !== confirmedPassword) {
            console.error("Passwords must match");
            return false;
        }
    }

    return true;
}
