import { Outlet, Navigate } from "react-router";
import { User } from "firebase/auth";
import { Suspense } from "react";

export default function AuthLayout({ user }: { user: User | null | undefined }) {
    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <Suspense fallback={<div>Big pinapple Loading 123 ...</div>}>
            <Outlet />
        </Suspense>
    );
}
