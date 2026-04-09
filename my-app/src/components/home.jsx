import { Link } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";

function Home() {
    return (
        <div>
            <Nav />

            <section>
                <h1>Top DEALS</h1>
                <p>Have money? Buy anything you want.</p>
                <Link>Shop now</Link>
            </section>

            <section>
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