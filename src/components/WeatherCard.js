import React from "react";
import { Card } from "react-bootstrap";

const WeatherCard = ({ dt, temp_min, temp_max, main, icon }) => {
  const date = new Date(dt);
  return (
    <div>
      <Card.Img
        variant="top"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{main}</Card.Title>
        <p>
          <span style={{ fontSize: "1rem", fontWeight: "500" }}>
            {date.toLocaleTimeString}
          </span>
          <br />
          {date.toLocaleDateString}
        </p>
        <p>Min: {temp_min}</p>
        <p>Min: {temp_max}</p>
      </Card.Body>
    </div>
  );
};

export default WeatherCard;
