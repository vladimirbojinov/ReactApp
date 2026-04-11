import { Link } from "react-router-dom";
import style from '../styles/home.module.css';
import styleBtn from '../styles/button.module.css';
import { useEffect } from "react";

function Home() {
    return (
        <div className={style.home}>
            <section className={style.hero}>
                <section>
                    <h1>Top DEALS</h1>
                    <p>Got money? Buy any tech you want.</p>
                    <Link className={`${style.btn} ${styleBtn.btn} ${styleBtn.btnPrime}`} to="/products">Shop now</Link>
                </section>
            </section>

            <section className={style.advantage}>
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
        </div>
    );
}

export default Home;