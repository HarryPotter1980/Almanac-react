import React from "react";
import Timeline from "./months1";

const App = () => {
  const events = [
    { id: "event1", title: "Event 1", date: "2024-01-01", description: "Details about Event 1" },
    { id: "event2", title: "Event 2", date: "2024-02-01", description: "Details about Event 2" },
    { id: "event3", title: "Event 3", date: "2024-03-01", description: "Details about Event 3" },
  ];

  return (
    <div>
      <h1>Interactive Timeline</h1>
      <Timeline events={events} />
    </div>
  );
};

export default App;
