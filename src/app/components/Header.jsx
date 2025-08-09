import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header>
     <main>
      <div className="logo">LOGO</div>
      <ul>
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/about">ABOUT</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/TestingDummyJSON">Testing Dummy JSON</Link></li>
      </ul>
     </main>
    </header>
  );
}

export default Header;