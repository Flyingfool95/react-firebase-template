import { Outlet, Navigate } from "react-router";
import { User } from "firebase/auth";

export default function ProtectedLayout({ user }: { user: User | null | undefined }) {
    if (user) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
}
