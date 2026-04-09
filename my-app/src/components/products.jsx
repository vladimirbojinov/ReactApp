import Footer from "./footer";
import Nav from "./nav";
import RenderProduct from "./RenderProduct";

function Products() {
    return (
        <div>
            <Nav />

            <section>
                <h1>Products</h1>
                <RenderProduct/>
            </section>

            <Footer />
        </div>
    );
}

export default Products;