import react from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HeroSection from './herosec.jsx';
import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

const centeredStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginTop: '20px',
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



function February() {
    return (
        <div>
          <Navbar />
          <section id="hero">
            <div className="hero-container" style={centeredStyle}>
              <h1>February</h1>
            </div>
          </section>
          <main id="main">
            <section id="about" className="about">
              <div className="container">
                <div className="section-title" style={centeredStyle}>
                  
                  <p>
                    <br />
                    From greeting the year with a launch to sending January off with beautiful celestial showers and passes, this month truly was a cosmic beginning of 2024. 
                  </p>
                  <br />
                </div>
                <div >
                  <AlternatingEvents />
                </div>
              </div>
            </section>
          </main>
          <Footer />

        </div>
      
    );
  }

export default February;
  


const events = [
  {
    title: "XPoSAT, launched by ISRO",
    date: "01 January 2024",
    description: "On January 1st, 2024, PSLV-C58, in its 60th flight, successfully launched its first polarimetry mission, the XPoSAT, to study the polarisation of X-rays. The spacecraft carried two scientific payloads developed by the Raman Research Institute and ISRO. The primary payload POLIX is an X-ray polarimeter for astronomical observations in the 8-30 keV energy bands. It is the first payload in the medium X-ray energy band dedicated to polarimetry measurements. XSPECT is an X-ray spectroscopy and timing payload, which can provide fast timing and good spectroscopic resolution in soft X-rays. The lifespan of the mission is expected to be at least five years. The observatory was placed in a low Earth orbit of 500-700 km..",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Event Two",
    date: " ",
    description: "This is the description for event two. It has text on the right and an image on the left.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Event Three",
    date: " ",
    description: "This is the description for event three. It has text on the left and an image on the right.",
    image: "https://via.placeholder.com/300",
  },
];

const AlternatingEvents = () => {
  return (
    <div style={styles.container}>
      {events.map((event, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={index}
            style={{
              ...styles.eventContainer,
              flexDirection: isEven ? "row" : "row-reverse",
            }}
          >
            <div style={styles.textContainer}>
              <h2 style={styles.title}>{event.title}</h2>
              <h3 style={styles.date}>{event.date}</h3>
              <p style={styles.description}>{event.description}</p>
            </div>
            <div style={styles.imageContainer}>
              <img
                src={event.image}
                alt={`Event ${index + 1}`}
                style={styles.image}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const styles = {
  container: {
    width: "80%",
    margin: "0 auto",
    padding: "20px",
  },
  eventContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "40px",
    gap: "20px",
  },
  textContainer: {
    flex: 1,
    padding: "10px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  date: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  description: {
    fontSize: "16px",
    lineHeight: "1.5",
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  image: {
    maxWidth: "100%",
    borderRadius: "8px",
  },
};

 