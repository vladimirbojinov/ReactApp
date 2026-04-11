import { Link } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";
import '../styles/home.css';
import '../styles/button.css';

function Home() {
    return (
        <div className="home">
            <Nav />

            <section className="hero">
                <section>
                    <h1>Top DEALS</h1>
                    <p>Got money? Buy any tech you want.</p>
                    <Link className="btn btn-prime" to="/products">Shop now</Link>
                </section>
            </section>

            <section className="advantage">
                <div>
                    <p>Fast & Reliable Shipping</p>
                </div>
                <div>
                    <p>Easy Returns</p>
                </div>
                <div>
                    <p>24/7</p>
                    <p>Customer Support</p>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Home;