import logo2 from "../assets/img/images/amazon.png";
import logo3 from "../assets/img/images/flipkart.png";
import logo4 from "../assets/img/images/hero-image.png";

const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondry-btn">Catogory</button>
        </div>
        <div className="shopping">
          <p>Also Available on</p>
          <div className="brand-icons">
            <img src={logo2} alt="amazon-logo" />
            <img src={logo3} alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
      <img src={logo4} alt="amazon-logo" />
      </div>
    </main>
  );
};

export default HeroSection;
