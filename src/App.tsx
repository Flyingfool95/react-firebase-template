import { Routes, Route } from "react-router";
import Register from "./routes/auth/Register";
import Login from "./routes/auth/Login";
import AuthLayout from "./routes/auth/layouts/AuthLayout";
import Dashboard from "./routes/dashboard/Dashboard";
import ProtectedLayout from "./routes/auth/layouts/ProtectedLayout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./services/firebase/firebase";

function App() {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div className="app">
            <Routes>
                {/* Public routes */}

                {/* Routes protected from loggedin users */}
                <Route element={<ProtectedLayout loading={loading} user={user} />}>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Route>

                {/* Auth routes */}
                <Route element={<AuthLayout loading={loading} user={user} />}>
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
        </div>
    );
}

export default App;
