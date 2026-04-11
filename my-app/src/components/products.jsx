import RenderProduct from "./RenderProduct";
import style from '../styles/products.module.css';

function Products() {
    return (
        <>
            <h1 className={style.productHead}>Products</h1>
            <RenderProduct/>
        </>
    );
}

export default Products;