import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginButton from "../src/components/LoginButton";
// Mock the auth module
jest.mock("../src/app/login", () => ({
  login: jest.fn(),
}));

describe("LoginButton", () => {
  it("renders correctly", () => {
    render(<LoginButton />);
    expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument();
  });

  it("calls login function on click", () => {
    const { login } = require("../src/app/login");
    render(<LoginButton />);
    fireEvent.click(screen.getByRole("button", { name: /log in/i }));
    expect(login).toHaveBeenCalledTimes(1);
  });
});
