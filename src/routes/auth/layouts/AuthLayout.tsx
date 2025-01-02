import { Outlet, Navigate } from "react-router";
import { User } from "firebase/auth";

export default function AuthLayout({ loading, user }: { loading: boolean; user: User | null | undefined }) {
    if (loading) return <div>Loading...</div>;

    if (!user) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
}
