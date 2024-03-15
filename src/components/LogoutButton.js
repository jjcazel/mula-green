"use client";
import React from "react";
import { logout } from "../app/logout";

const LogoutButton = () => <button onClick={logout}>Log Out</button>;

export default LogoutButton;
