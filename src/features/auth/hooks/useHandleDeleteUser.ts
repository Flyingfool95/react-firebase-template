import { useDeleteUser } from "react-firebase-hooks/auth";
import { auth } from "../../../services/firebase/firebase";

export default function useHandleDeleteUser() {
    const [deleteUser, loading, error] = useDeleteUser(auth);

    const handleDeleteUser = () => {};

    return {
        handleDeleteUser,
    };
}
