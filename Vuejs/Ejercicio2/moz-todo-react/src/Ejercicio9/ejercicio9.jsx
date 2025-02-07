import React, { useState } from "react";

const robots = [
  { name: "Porsche Adams", job: "Hospitality Analyst", color: "brown" },
  { name: "Miki Weimann", job: "Senior Consulting Representative", color: "blue" },
  { name: "Christopher King", job: "Design Liaison", color: "blue" },
  { name: "Connie Glover", job: "Human Manufacturing Producer", color: "green" }
];

const getRandomRobots = () => {
  return Array.from({ length: 4 }, () => robots[Math.floor(Math.random() * robots.length)]);
};

export default function RobotCards() {
  const [randomRobots, setRandomRobots] = useState(getRandomRobots());

  return (
    <div style={{ padding: "20px" }}>
      <button style={{ marginBottom: "10px", padding: "10px", backgroundColor: "red", color: "white", border: "none", cursor: "pointer" }} 
        onClick={() => setRandomRobots(getRandomRobots())}>
        Fetch Random
      </button>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", backgroundColor: "#d4edda", padding: "10px", borderRadius: "10px" }}>
        {randomRobots.map((robot, index) => (
          <div key={index} style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "10px", textAlign: "center", backgroundColor: "white" }}>
            <div style={{ width: "60px", height: "60px", backgroundColor: robot.color, borderRadius: "50%", margin: "0 auto 10px" }}></div>
            <p style={{ fontWeight: "bold" }}>{robot.name}</p>
            <p style={{ color: "gray", fontSize: "14px" }}>{robot.job}</p>
          </div>
        ))}
      </div>
    </div>
  );
}