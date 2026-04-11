import Footer from "./footer";
import Nav from "./nav";
import RenderProduct from "./RenderProduct";
import '../styles/products.css';

function Products() {
    return (
        <div className="products">
            <Nav />
            <h1>Products</h1>
            <RenderProduct/>
            <Footer />
        </div>
    );
}

export default Products;