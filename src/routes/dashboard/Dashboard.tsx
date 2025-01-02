import { auth } from "../../services/firebase/firebase";

export default function Dashboard() {
    return (
        <div>
            <h1>Welcome {auth.currentUser?.email}</h1>
            <button onClick={() => auth.signOut()}>Logout</button>
        </div>
    );
}
