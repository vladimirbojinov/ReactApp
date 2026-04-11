import { useEffect, useState } from "react";

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
        <div className="products-container">
            {products.map((p) => {
                return (
                    <div key={p.id} className="card">
                        <div>
                            <img src={p.image} />
                        </div>
                        <p>{p.name}</p>
                        <p>{p.reviews.rating}⭐ ({p.reviews.count} reviews)</p>
                        <p>{p.price}&euro;</p>
                    </div>
                );
            })}
        </div>
    );
}

export default RenderProduct;