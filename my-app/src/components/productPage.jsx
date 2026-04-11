import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from '../styles/productPage.module.css';
import styleBtn from '../styles/button.module.css';

function ProductPage() {
    const params = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        fetch(`http://localhost:8000/product/${params.id}`)
            .then(r => r.json())
            .then(d => setProduct(d));
    }, [params.id]);

    if (product == undefined) return;

    return (
        <>
            <div className={style.container}>
                <div>
                    <img src={product.image} />
                </div>
                <aside>
                    <section className={style.detail}>
                        <h2>{product.name}</h2>
                        <p>{product.reviews.rating}⭐ ({product.reviews.count} reviews)</p>
                        <p className={style.price}>{product.price}&euro;</p>
                    </section>
                    <h2>Availability</h2>
                    <section className={style.delivery}>
                        <p>Pickup</p>
                        <p>Delivery</p>
                    </section>
                    <h2>Warranty Protection</h2>
                    <section className={style.warranty}>
                        <p>No plan</p>
                        <p>1-Year <br /> 129.99&euro;</p>
                    </section>
                    <button className={`${style.btn} ${styleBtn.btn} ${styleBtn.btnPrime}`}>Buy</button>
                </aside>
            </div>
        </>
    );
}

export default ProductPage;