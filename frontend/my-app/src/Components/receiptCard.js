import React from "react";
import "./receiptCard.css";

export const ElementPricingCard = ({ className, headerClassName }) => {
  return (
    <div className={`element-pricing-card ${className}`}>
      <div className={`header ${headerClassName}`}>
        <div className="text-wrapper">5/20/24</div>
        <div className="price">
          <div className="div">$56.97</div>
        </div>
      </div>
      <div className="feature-list">
        <div className="text-wrapper-2">dozen eggs</div>
        <div className="text-wrapper-3">1 gallon of milk</div>
        <p className="text-wrapper-3">2x loaf of white bread</p>
        <div className="text-wrapper-3">8 oz cream cheese</div>
      </div>
      <button className="button">
        <div className="text-wrapper-4">More</div>
      </button>
    </div>
  );
};