import React, { useState, useEffect } from "react";
import axios from "axios";

const FlightInformation = () => {
  const [flightData, setFlightData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://opensky-network.org/api/states/all"
      );
      setFlightData(result.data.states);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Flight Information</h1>
      <ul>
        {flightData.map((flight) => (
          <li key={flight[0]}>
            Flight: {flight[1]} - Longitude: {flight[5]} - Latitude: {flight[6]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightInformation;