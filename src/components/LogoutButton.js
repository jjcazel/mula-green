import React from "react";
import { logout } from "../utils/auth";

const LogoutButton = () => <button onClick={logout}>Log Out</button>;

export default LogoutButton;
