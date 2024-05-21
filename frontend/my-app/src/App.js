import logo from './logo.svg';
import coverArt from './media/coverArt.png'
import './App.css';
import Navbar from './Components/navBar';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router, Routes,
  Route
} from "react-router-dom";

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Navbar/>
        <div className="front">
          <div class="left">
            <div class="text">
              <h2 style={{ color: "#4F5933" }} className="text1">Eat Nutritiously.</h2>
              <h2 style={{ color: "#787771" }} className="text2">Donate Meaningfully.</h2>
              <h2 style={{ color: "#ADC178" }} className="text3">Shop Locally.</h2>
              <button type="button" class="btn btn-primary btn-lg">Get Started</button>
            </div>
          </div>
          <div class="right">
            <img src={coverArt} class="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
        <div className="mission">
          <h1 id = "mission">Our Mission</h1>
          <p><div className = "indent">Every day, thousands of people throw out their expired groceries, not even knowing they had expired in the first place. All of this food goes to waste while hunger in the world remains as one of the greatest problems.</div> <br/>
          <div className = "indent">GroDonor’s main mission is to minimize global food waste by sending notifications about when user’s groceries are about to expire. But that’s not all. GroDonor also recommends local food banks that are in need of that type of grocery. </div><br/>
          <div className = "indent">By uploading your grocery store receipts, not only will GroDonor help you minimize food waste, but it will also recommend nutritious meals based on your common groceries as well as local farmer’s markets that specialize in your common buys. GroDonor emphasizes supporting local communities in a sustainable manner. </div></p>
        </div>
      </header>
    </div>
  );
}

export default App;
