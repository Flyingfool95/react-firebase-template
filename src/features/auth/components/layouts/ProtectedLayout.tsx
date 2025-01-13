import { Outlet, Navigate } from "react-router";
import { User } from "firebase/auth";
import { Suspense } from "react";

export default function ProtectedLayout({ user }: { user: User | null | undefined }) {
    if (user) {
        return <Navigate to="/" />;
    }

    return (
        <Suspense fallback={<div>Big banana Loading 123 ...</div>}>
            <Outlet />
        </Suspense>
    );
}
