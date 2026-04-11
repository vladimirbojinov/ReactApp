import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import style from '../styles/products.module.css';
import styleBtn from '../styles/button.module.css'

function RenderProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/product')
            .then((r) => r.json())
            .then((d) => {
                setProducts(d)
            })
    }, []);

    return (
        <div className={style.productsContainer}>
            {products.map((p) => {
                return (
                    <div key={p.id} className={style.card}>
                        <div>
                            <img src={p.image} />
                        </div>
                        <p>{p.name}</p>
                        <p>{p.reviews.rating}⭐ ({p.reviews.count} reviews)</p>
                        <p>{p.price}&euro;</p>
                        <NavLink className={styleBtn.btn} to={'/products/' + p.id}>
                            <button className={`${styleBtn.btn} ${styleBtn.btnPrime}`}>Buy</button>
                        </NavLink>
                    </div>
                );
            })}
        </div>
    );
}

export default RenderProduct;