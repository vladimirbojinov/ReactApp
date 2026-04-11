import Footer from "./footer";
import Nav from "./nav";
import '../styles/aboutme.css'

function AboutMe() {
    return (
        <div className="aboutme">
            <Nav />
            <section>
                <div>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3778876%2Fpexels-photo-3778876.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-olly-3778876.jpg%26fm%3Djpg&f=1&nofb=1&ipt=bb436140664fc5f55365b6d32533c57bf2aa47bb656d68efc0cb544a75e9459b" />
                </div>
                <div>
                    <h2>Lorem ipsum dolor sit amet,</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque sapien sit amet eros hendrerit sodales. Ut sollicitudin eget orci sed hendrerit. Integer et ornare arcu, et euismod tortor. Donec sit amet odio a purus auctor pellentesque rutrum in odio. Aliquam id bibendum massa, a faucibus tellus.</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet,</li>
                        <li>Lorem ipsum dolor sit amet,</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque sapien sit amet eros hendrerit sodales. Ut sollicitudin eget orci sed hendrerit. Integer et ornare arcu, et euismod tortor. Donec sit amet odio a purus auctor pellentesque rutrum in odio. Aliquam id bibendum massa, a faucibus tellus.</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet,</li>
                        <li>Lorem ipsum dolor sit amet,</li>
                    </ul>
                </div>
            </section>
            <Footer />
        </div>
    )

}

export default AboutMe;