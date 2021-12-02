import React, { useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";

const CitySelector = ({ onSearch }) => {
  const [city, setCity] = useState("");
  return (
    <>
      <Row>
        <Col>
          <h1>Search your city</h1>
        </Col>
      </Row>
      <Row>
        <Col xl={5}>
          <FormControl
            placeholder="enter city"
            onChange={(event) => setCity(event.target.value)}
            value={city}
          ></FormControl>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => onSearch(city)}>Search your city</Button>
        </Col>
      </Row>
    </>
  );
};
export default CitySelector;
