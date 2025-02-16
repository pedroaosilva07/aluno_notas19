'use client'
import { useState } from 'react';

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import User from "@/components/User";

export default function Home() {

  const [userName, setUserName] = useState('Pedro');

  return (
    <div>
      <Menu />  <br />

      <User name={userName}>
        <h1>Olá {userName}</h1>
      </User> <br />
      <button onClick={() => setUserName("Theo")}>Alterar</button>
      <Footer />
    </div>
  );
}
