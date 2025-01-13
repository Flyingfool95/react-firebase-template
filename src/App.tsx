import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import { auth } from "./services/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

/* Public routes */
import Login from "./features/auth/routes/Login";
import Register from "./features/auth/routes/Register";
/* Auth routes */
const Dashboard = lazy(() => import("./features/dashboard/routes/Dashboard"));
const AuthLayout = lazy(() => import("./features/auth/components/layouts/AuthLayout"));
const ProtectedLayout = lazy(() => import("./features/auth/components/layouts/ProtectedLayout"));

function App() {
    const [user, loading, error] = useAuthState(auth);

    if (error) {
        <div>Error: {error.message}</div>;
    }

    if (loading) {
        <div>Loading...</div>;
    }

    return (
        <>
            <Routes>
                {/* Public routes */}

                {/* Routes protected from loggedin users */}
                <Route element={<ProtectedLayout user={user} />}>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Route>

                {/* Auth routes */}
                <Route element={<AuthLayout user={user} />}>
                    <Route path="/" element={<Dashboard />} />
                </Route>

                <Route
                    path="*"
                    element={
                        <div>
                            <h1>404</h1>
                        </div>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
