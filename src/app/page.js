"use client";

import { useState } from "react";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function Home() {
  const [name, setName] = useState("Acessar");

  return (
    <div className="text-center">
      <Menu />

      <p>Projeto Celke</p>

      <button onClick={() => setName("Humberto")}>{name}</button>

      <Footer />
    </div>
  );
}

export default Home;