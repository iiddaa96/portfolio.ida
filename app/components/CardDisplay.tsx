import React from "react";
import { cardData } from "../../cardData.json";
import Card from "../components/Cards";
import "../styles/CardDisplay.css";

const CardDisplay: React.FC = () => {
  return (
    <div style={{ paddingTop: "2rem" }}>
      <div className="container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            dataImage={card.image}
            header={<h1>{card.title}</h1>}
            content={<p>{card.content}</p>}
          />
        ))}
      </div>
    </div>
  );
};

export default CardDisplay;
