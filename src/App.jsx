
import"./app.scss"
import NavBar from "./componnents/navbar/NavBar"; // Check the correct extension
import Hero from "./componnents/Hero/Hero"; // Check the correct extension
import Parallax from "./componnents/parallax/Parallax";
import Services from "./componnents/services/Services";
import Portfolio from "./componnents/portfolio/Portfolio";
import Contact from "./componnents/contact/Contact";
const App = () => {
  return <div>
    <section id="Homepage">
    <NavBar/>
    <Hero/>

    </section>
    
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id ="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact"><Contact/></section> 
    
    
    </div>;

    
};

export default App;
