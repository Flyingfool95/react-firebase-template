import { it, expect, describe } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Login from "../../../features/auth/routes/Login";
import { MemoryRouter } from "react-router";

describe("Login", () => {
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
});
