import { Outlet, Navigate } from "react-router";
import { User } from "firebase/auth";

export default function ProtectedLayout({ loading, user }: { loading: boolean; user: User }) {
    if (loading) return <div>Loading...</div>;

    if (!user) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}
