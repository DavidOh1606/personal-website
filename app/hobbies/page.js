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
                    I love to play Chess, so feel free to challenge me to a game!
                </p>

                <p>
                    I like to play guitar and I like to doodle in my free time. This is a sketch I made of Francisco Tarrega, a Spanish guitarist.
                </p>

                <Image
                        src="/figma/tarrega.jpg"
                        alt="doodle of francisco tarrega"
                        width={300}
                        height={400}
                />
                
            </section>
        </div>
    )




}