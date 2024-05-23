import './Receipt.css';
import React, { useState } from "react";
import Navbar from '../Components/navBar';
import z from '../Components/singleFileUploader';
import 'bootstrap/dist/css/bootstrap.css';
import { ElementPricingCard } from "../Components/receiptCard";
import { Link } from "react-router-dom";
//popular JavaScript library used for making HTTP requests from web browsers and 
// Node.js. It simplifies the process of making asynchronous HTTP requests to REST endpoints 
//and interacting with APIs
import axios from 'axios';
import SingleFileUploader from '../Components/singleFileUploader';

export default function Receipts() {
  return (
    <div className="receipts">
      <Navbar />
      <div className="body">
        <div className="upload">
          <h1>Upload Receipt</h1>
          <div className="overlap-group">
            <SingleFileUploader/>
            <div className="content">
              {/* <button className="element-button">
                <h3>Upload</h3>
              </button> */}
              <h3 id="file-drop">or drop file in</h3>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="text-wrapper-12">Past Receipts</div>
        <div className="overlap">
          <div className="element-pricing-card-2">
            <div className="header-2">
              <div className="text-wrapper-13">5/20/24</div>
              <div className="div-wrapper">
                <div className="text-wrapper-14">$56.97</div>
              </div>
            </div>
            <div className="feature-list-2">
              <div className="text-wrapper-15">dozen eggs</div>
              <div className="text-wrapper-16">1 gallon of milk</div>
              <p className="text-wrapper-16">2x loaf of white bread</p>
              <div className="text-wrapper-16">8 oz cream cheese</div>
            </div>
            <button className="button-2">
              <div className="text-wrapper-17">More</div>
            </button>
          </div>
          <ElementPricingCard className="sixteen-pricing-card" />
        </div> */}
      {/*<div className="element-pricing-card-3">
          <div className="header-2">
            <div className="text-wrapper-13">5/3/24</div>
            <div className="div-wrapper">
              <div className="text-wrapper-14">$187.46</div>
            </div>
          </div>
          <div className="feature-list-2">
            <div className="text-wrapper-15">dozen eggs</div>
            <div className="text-wrapper-16">1 gallon of milk</div>
            <p className="text-wrapper-16">2x loaf of white bread</p>
            <div className="text-wrapper-16">8 oz cream cheese</div>
          </div>
          <button className="button-2">
            <div className="text-wrapper-17">Button</div>
          </button>
        </div>
        <div className="element-pricing-card-4">
          <div className="header-2">
            <div className="text-wrapper-13">4/26/24</div>
            <div className="div-wrapper">
              <div className="text-wrapper-14">$33.99</div>
            </div>
          </div>
          <div className="feature-list-2">
            <div className="text-wrapper-15">dozen eggs</div>
            <div className="text-wrapper-16">1 gallon of milk</div>
            <p className="text-wrapper-16">2x loaf of white bread</p>
            <div className="text-wrapper-16">8 oz cream cheese</div>
          </div>
          <button className="button-2">
            <div className="text-wrapper-17">Button</div>
          </button>
        </div>
        <div className="element-pricing-card-5">
          <div className="header-2">
            <div className="text-wrapper-13">4/13/24</div>
            <div className="div-wrapper">
              <div className="text-wrapper-14">$77.89</div>
            </div>
          </div>
          <div className="feature-list-2">
            <div className="text-wrapper-15">dozen eggs</div>
            <div className="text-wrapper-16">1 gallon of milk</div>
            <p className="text-wrapper-16">2x loaf of white bread</p>
            <div className="text-wrapper-16">8 oz cream cheese</div>
          </div>
          <button className="button-2">
            <div className="text-wrapper-17">Button</div>
          </button>
        </div>
      </div> */}
    </div>
  );
};
