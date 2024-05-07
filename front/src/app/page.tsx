"use client";

import HomePage from "../app/Home/page";
import { useState } from "react";
import Login from "./Login/page";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const [token, setToken] = useState(localStorage.getItem("userToken") || null);

  return (
    <>
      {token && <NavBar token={token} setToken={setToken} />}
      {token ? <HomePage /> : <Login setToken={setToken} />}
      {token && <Footer />}
    </>
  );
}
