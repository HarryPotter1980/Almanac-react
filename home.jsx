import react from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Card from './Card.jsx';
import HeroSection from './herosec.jsx';
import Navbar from './navbar.jsx';
import Footer from './footer.jsx';
//import January from "./pages/january.jsx";
import CustomizedTimeline from "./months1.jsx";

const centeredStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginTop: '20px',
    height: '40vh',
  };

  // const centeredStyle2 = {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   // justifyContent: 'center',
  //   alignItems: 'center',
  //   gap: '20px',
  //   marginTop: '20px',
  //   height: '50vh',
  // };

  const centeredStyle2 = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between', // Ensure proper spacing between cards
  alignItems: 'center', // Align items to the center vertically
  gap: '10px', // Space between cards
  marginTop: '20px',
  padding: '10px', // Optional padding around the row
};



function Home() {
    return (
        <div>
          <Navbar />
          <section id="hero">
            <div className="hero-container" style={centeredStyle}>
              <h1>Antariksh</h1>
            </div>
          </section>
          <main id="main">
            <section id="about" className="about">
              <div className="container">
                <div className="section-title">
                  <h2>About</h2>
                  <p>
                    Antariksh Club, also known as Antariksh Astronomy Club, is an inter-institutional club operating
                    under the umbrella of Vishwakarma Institutes...
                  </p>
                  <br />
                </div>
                <div >
                  <Card />
                </div>
              </div>
            </section>
          </main>
          <Footer />
  
          <Routes>
            
          </Routes>
        </div>
      
    );
  }

export default Home;
  