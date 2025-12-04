import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar.jsx";

export default function Home() {
  return (
    <div className="home-container">
        <section className="hero-section">
          <h1>Hi, I'm David Oh</h1>
          <p className="hero-subtitle">
            ACMS @ UW | Mathematician | Beginning Web Developer
          </p>

          <div className="hero-buttons">
            <Link href="/contact" className="btn btn-primary">Contact</Link>
            <Link href="/about-me" className="btn btn-primary">About Me</Link>
            <Link href="/hobbies" className="btn btn-primary">Hobbies</Link>
          </div>

        </section>
    </div>
  );
}
