import React from "react";
import { login } from "../utils/auth";

const LoginButton = () => <button onClick={login}>Log In</button>;

export default LoginButton;
