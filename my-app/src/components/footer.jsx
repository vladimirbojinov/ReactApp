function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <p>Store pricing may vary. Prices and offers are subject to change. &copy;{year}, All rights reserved</p>
        </footer>
    );
}

export default Footer;