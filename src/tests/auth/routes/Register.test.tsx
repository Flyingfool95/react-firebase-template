import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Register from "../../../features/auth/routes/Register";

describe("Register page", () => {
    it("should update state on input change", () => {
        render(
            <MemoryRouter>
                <Register />
            </MemoryRouter>
        );

        const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
        const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;
        const confirmPasswordInput = screen.getByLabelText("Confirm Password") as HTMLInputElement;

        fireEvent.change(emailInput, { target: { value: "test@mail.com" } });
        fireEvent.change(passwordInput, { target: { value: "password123" } });
        fireEvent.change(confirmPasswordInput, { target: { value: "password123" } });

        expect(emailInput.value).toBe("test@mail.com");
        expect(passwordInput.value).toBe("password123");
        expect(confirmPasswordInput.value).toBe("password123");
    });

    it("should render a link to Login page", () => {
        render(
            <MemoryRouter>
                <Register />
            </MemoryRouter>
        );

        const registerLink = screen.getByRole("link", { name: /login/i }) as HTMLInputElement;

        expect(registerLink).toBeInTheDocument();

        expect(registerLink).toHaveAttribute("href", "/login");
    });
});
