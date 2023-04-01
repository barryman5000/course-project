import React from 'react';
import Casual from '../../Images/casual.jpg';
import Sports from '../../Images/mens.jpg';
import { NavLink } from 'react-router-dom';
import CategoryImage from '../../ReusableComponents/CategoryImage';
import CategoryLink from '../../ReusableComponents/CategoryLink';


function Home() {
  return (
    <div className="Welcome">
      <header className="App-header">
        <p>
          <div class="category-images">
            <CategoryImage to="/casual" alt="Casual Wear" src={Casual} />
            <CategoryImage to="/sports" alt="Sports Wear" src={Sports} />
          </div>
          <div class="category-images">
            <CategoryLink to="/casual">Casual Wear</CategoryLink>
            <CategoryLink to="/sports">Sports Wear</CategoryLink>
          </div>
        </p>
        <p id="welcome-text">Welcome to Sports Apparel, the one-stop-shop for all your sports-centric and casual apparel needs!
           We are an online retailer that offers high-quality sports apparel at affordable prices. Whether you're
           an avid athlete or someone who loves to sport a sporty look, we've got you covered. From comfortable
           and stylish activewear to casual streetwear, we've curated a wide range of products to cater to your 
           every need. Our team of experts carefully selects the best quality materials to ensure that you get 
           the perfect fit and comfort that you deserve. So why wait? Browse through our collection and get your
            hands on the latest trends in sports apparel today!</p>
      </header>
    </div>
  );
}

export default Home;

