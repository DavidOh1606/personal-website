import Home from "../../components/Home.jsx";
import Image from "next/image";

export default function HobbiesPage() {
    return (
        <div className="hobbies-container">
            <section className="page-section">
                <div className="page-header">
                    <Home></Home>
                    <h2>My Hobbies</h2>
                </div>

                <p>
                    I love to play Chess, so feel free to challenge me to a game! And recently, I've gotten into playing Scrabble.
                </p>

                <p>
                    I like to play guitar and I like to doodle in my free time. Here's a sketch I made of Francisco Tarrega, a Spanish guitarist:
                </p>

                <Image
                        src="/figma/tarrega.jpg"
                        alt="doodle of francisco tarrega"
                        width={300}
                        height={400}
                />

                <p>My favorite book is Catch-22 and my favorite video games are Darkest Dungeon and Civilization 5.</p>
                
            </section>
        </div>
    )




}