export default function useRegisterUser() {
    interface TRegisterFormData {
        email: string;
        password: string;
        confirmPassword: string;
    }

    const registerUser = async (registerFormData: TRegisterFormData) => {
        try {
        } catch (error) {}
    };

    return {
        registerUser,
    };
}
