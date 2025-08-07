import React from "react";
import CardDisplay from "./components/CardDisplay";
import Introduce from "./components/Introduce";

const Homepage: React.FC = () => {
  return (
    <div>
      <Introduce />
      <CardDisplay />
    </div>
  );
};

export default Homepage;
