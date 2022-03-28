import React from "react";
import { Link } from "react-router-dom";
import { RoundImageCard } from "../components/RoundImageCard";

export const HomeScreen = () => {
  const [category, setCategory] = React.useState([]);

  React.useEffect(() => {
    fetch("https://localhost:3000/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data.categories);
      });
  }, []);

  return (
    <div id="main">
      <div className="hero-section">
        <div className="hero-content">
          <p className="hero-heading h2 white-0">
            Walk in fashion with our latest collection
          </p>
          <p className="hero-subheading h6 regular white-0">
            We bring the most authentic and trending fabric to make you stand
            out this era of fashion
          </p>
          <Link to="/products" className="btn btn-primary btn-lg">
            SHOP NOW
          </Link>
        </div>
      </div>
      {/* <!-- offer-section --> */}
      <div className="offer-section">
        <h2 className="h2 tx-center m-20 p-20 black-6">Categories</h2>
        <div className="offer-container">
          {category.map((item) => {
            return (
              <RoundImageCard
                key={item.id}
                imageUrl={item.imageUrl}
                title={item.categoryName.toUpperCase()}
                onClick={() => console.log("Clicked")}
              />
            );
          })}
        </div>
      </div>
      <div className="feature-section">
        <h2 className="h2 tx-center m-20 p-20 black-6">Why Us ?</h2>
        <div className="feature-cards-container">
          <div className="feature-card">
            <i className="uil uil-shield-check feature-icon"></i>
            <h3 className="feature-card-heading">Fully Secure</h3>
            <p className="feature-card-subheading">
              Shopping with us ensure full security for our customer
            </p>
          </div>

          <div className="feature-card">
            <i className="uil uil-gift feature-icon"></i>
            <h3 className="feature-card-heading">Amazing Offers</h3>
            <p className="feature-card-subheading">
              Shopping with us ensure full security for our customer
            </p>
          </div>
          <div className="feature-card">
            <i className="uil uil-truck feature-icon"></i>
            <h3 className="feature-card-heading">Ontime Shipment</h3>
            <p className="feature-card-subheading">
              Shopping with us ensure full security for our customer
            </p>
          </div>
          <div className="feature-card">
            <i className="uil uil-wallet feature-icon"></i>
            <h3 className="feature-card-heading">Easy Payment</h3>
            <p className="feature-card-subheading">
              Shopping with us ensure full security for our customer
            </p>
          </div>
          <div className="feature-card">
            <i className="uil uil-phone-volume feature-icon"></i>
            <h3 className="feature-card-heading">24*7 Support</h3>
            <p className="feature-card-subheading">
              Shopping with us ensure full security for our customer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
