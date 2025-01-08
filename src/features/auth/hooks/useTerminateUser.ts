import { useDeleteUser } from "react-firebase-hooks/auth";
import { auth } from "../../../services/firebase/firebase";

export default function useTerminateUser() {
    const [deleteUser, loading, error] = useDeleteUser(auth);

    const handleDeleteUser = () => {};

    return {
        handleDeleteUser,
    };
}
