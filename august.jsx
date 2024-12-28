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



function august() {
    return (
        <div>
          <Navbar />
          <section id="hero">
            <div className="hero-container" style={centeredStyle}>
              <h1>Ambitious April</h1>
            </div>
          </section>
          <main id="main">
            <section id="about" className="about">
              <div className="container">
                <div className="section-title" style={centeredStyle}>
                  
                  <p>
                    <br />
                    March 2024 witnessed many space and astronomical events. ISRO's RLV Landing Experiment proved reusable technology by landing autonomously with Pushpak. SpaceX Crew-8 carried humans to the ISS. The KAIROS rocket caught ablaze just above Japan. Russia's Soyuz 2.1a launched many satellites successfully; there was a transition season on the March Equinox.

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

export default March;
  


const events = [
  // {
  //   title: "SpaceX Crew-8 Launch",
  //   date: "3rd March 2024",
  //   description: "On March 3, 2024, SpaceX launched its Crew-8 mission from Kennedy Space Centre in Florida. The Falcon 9 rocket launched at 10:53 PM EST, taking four astronauts, Matthew Dominick, Michael Barratt, and Jeanette Epps from NASA, together with Alexander Grebenkin from Russia. This is one of the missions that are part of NASA's Commercial Crew Program, indicating the cooperation of nations in their space exploration. The Crew Dragon spacecraft, called Endeavour, docked at the ISS on 5 March, from where they will spend the next six months doing more than 200 cool science experiments in microgravity. That is one huge win for SpaceX and human space travel!.",
  //   image: "https://www.nasa.gov/wp-content/uploads/2024/03/crew8launch030324.jpg?resize=2000,1333",
  // },
  // {
  //   title: "KAIROS Launch Failure",
  //   date: "13th March 2024",
  //   description: "March 13, 2024, saw another reverse for Japan. Just some five seconds into liftoff from the Kii Space Port, KAIROS, its latest launch rocket meant to boost a small satellite to orbiting altitude, went down and exploded in flight with failure due to an apparently misdirected trajectory. Though disappointing for the engineers and technicians involved in the KAIROS program, this incident is a reminder of the risks associated with space exploration. There are already investigations underway to determine what went wrong and how future launches can be improved. Despite this failure, Japan is committed to furthering its space capabilities through innovative technologies and partnerships within the commercial sector. The KAIROS program was designed to enhance Japan's competitiveness in the burgeoning small satellite market, which has seen increasing demand for rapid deployment capabilities.",
  //   image: "https://www.reuters.com/resizer/v2/AEJ6OKT6JNJIXA3T67O7QTNVW4.jpg?auth=fbb1e0434ec4136d2323e6fda893c5b9c3d4de0f32b64b180a1f491ca235fe99&width=1200&quality=80",
  // },
  // {
  //   title: "March Equinox",
  //   date: "20th March 2024",
  //   description: "The March equinox—aka the vernal equinox—marks the sun’s crossing above Earth’s equator, moving from south to north. Earth’s tilt on its axis is what causes this northward shift of the sun’s path across our sky at this time of year. Earth’s tilt is now bringing spring and summer to the Northern Hemisphere. At the same time, the March equinox marks the beginning of autumn—and a shift toward winter—in the Southern Hemisphere..",
  //   image: "https://c.tadst.com/gfx/750w/march-equinox-dark.png?1",
  // },
  // {
  //   title: "ISRO’s RLV Landing Experiment",
  //   date: "22nd March 2024",
  //   description: "ISRO has successfully completed the RLV LEX-02 landing experiment on March 22, 2024, at the Aeronautical Test Range in Chitradurga, Karnataka. This is an important milestone in the technology of reusable launch vehicle technology, wherein the autonomous landing of the RLV was carried out under challenging conditions. In this experiment, the winged vehicle, Pushpak, was airlifted by an Indian Air Force Chinook helicopter and released from an altitude of 4.5 km. After release, Pushpak autonomously navigated toward the runway, making necessary corrections to its trajectory before landing precisely and coming to a stop using its brake parachute and landing gear systems.",
  //   image: "https://www.isro.gov.in/media_isro/image/RLV/RLVLEX026.jpg",
  // },
  // {
  //   title: "Soyuz-2.1a Launch",
  //   date: "29th March 2024",
  //   description: "On March 29, 2024, Russia launched a Soyuz-2.1a rocket from Baikonur Cosmodrome, carrying several satellites into orbit as part of ongoing missions aimed at enhancing communications and Earth observation capabilities. The launch occurred at approximately 11:00 AM local time and successfully deployed multiple payloads into their designated orbits.",
  //   image: "https://pbs.twimg.com/media/GUAauViXEAAPGw2?format=jpg&name=4096x4096",
  // },
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
    flex: 0.5,
    display: "flex",
    justifyContent: "center",
  },
  image: {
    maxWidth: "400%",
    borderRadius: "1px",
    height: "auto",
    display: "block",
  },
};

