import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginButton from "../LoginButton";
// Mock the auth module
jest.mock("../../utils/auth", () => ({
  login: jest.fn(),
}));

describe("LoginButton", () => {
  it("renders correctly", () => {
    render(<LoginButton />);
    expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument();
  });

  it("calls login function on click", () => {
    const { login } = require("../../utils/auth");
    render(<LoginButton />);
    fireEvent.click(screen.getByRole("button", { name: /log in/i }));
    expect(login).toHaveBeenCalledTimes(1);
  });
});
