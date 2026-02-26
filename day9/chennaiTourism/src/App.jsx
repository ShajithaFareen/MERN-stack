import React from "react";
import { chennaiTouristPlaces } from "./data";

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Chennai Tourist Places</h1>

      <div style={styles.grid}>
        {chennaiTouristPlaces.map((place) => (
          <div key={place.id} style={styles.card}>
            <h2>{place.name}</h2>

            <p><strong>Location:</strong> {place.location}</p>
            <p><strong>Type:</strong> {place.type}</p>
            <p><strong>Established:</strong> {place.established}</p>
            <p><strong>Timings:</strong> {place.timings}</p>
            <p><strong>Entry Fee:</strong> ₹{place.entryFee}</p>
            <p><strong>Rating:</strong> ⭐ {place.rating}</p>

            <strong>Famous For:</strong>
            <ul>
              {place.famousFor.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh"
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px"
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
  }
};

export default App;