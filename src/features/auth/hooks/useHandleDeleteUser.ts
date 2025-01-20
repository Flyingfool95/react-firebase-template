import { useDeleteUser } from "react-firebase-hooks/auth";
import { auth } from "../../../services/firebase/firebase";

export default function useHandleDeleteUser() {
    const [deleteUser, loading, error] = useDeleteUser(auth);

    if (error) {
        //Add error to toast
        console.error(error);
    }

    if (loading) {
        throw new Promise(() => {});
    }

    const handleDeleteUser = async () => {
        //Delete all data belonging to user here first

        const success = await deleteUser();

        if (success) {
            console.log("User deleted...");
        }
    };

    return {
        handleDeleteUser,
    };
}
