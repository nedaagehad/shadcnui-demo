"use client"

import Dashboard from "./dashboard/page";
import Login from "./login/page"

export default function Home() {

  const userAuthenticated = localStorage.getItem("loggedIn")

  return (
    !userAuthenticated ? <Login /> : <Dashboard />
  );
}
