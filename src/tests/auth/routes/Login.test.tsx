import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Login from "../../../features/auth/routes/Login";

describe("Login page", () => {
    it("should update state on input change", () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
        const passwordInput = screen.getByLabelText(/password/i) as HTMLInputElement;

        fireEvent.change(emailInput, { target: { value: "test@mail.com" } });
        fireEvent.change(passwordInput, { target: { value: "password123" } });

        expect(emailInput.value).toBe("test@mail.com");
        expect(passwordInput.value).toBe("password123");
    });

    it("should render a link to Register page", () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        const registerLink = screen.getByRole("link", { name: /register/i }) as HTMLInputElement;

        expect(registerLink).toBeInTheDocument();

        expect(registerLink).toHaveAttribute("href", "/register");
    });
});
