import { Routes, Route } from "react-router";
import { auth } from "./services/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Register from "./routes/auth/Register";
import Login from "./routes/auth/Login";
import Dashboard from "./routes/dashboard/Dashboard";
import AuthLayout from "./components/layouts/AuthLayout";
import ProtectedLayout from "./components/layouts/ProtectedLayout";

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
