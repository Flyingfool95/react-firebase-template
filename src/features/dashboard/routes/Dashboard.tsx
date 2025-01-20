import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../../services/firebase/firebase";
import { useNavigate } from "react-router";
import useHandleDeleteUser from "../../auth/hooks/useHandleDeleteUser";

export default function Dashboard() {
    const [signOut, loading, error] = useSignOut(auth);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const {handleDeleteUser} = useHandleDeleteUser();

    const handleSignout = () => {
        signOut();
        if (!loading) navigate("/login");
    };

    return (
        <div>
            <h1>Welcome {user?.email}</h1>
            <button onClick={() => handleSignout()}>Logout</button>
            <button onClick={() => handleDeleteUser()}>Delete me!</button>
        </div>
    );
}
