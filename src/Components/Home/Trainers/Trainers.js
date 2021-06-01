import React, { useEffect, useState } from "react";
import trainer1 from "../../../images/Fitness_Wall_Brunette_girl_Workout_Hands_566474_1280x853.jpg";
import trainer2 from "../../../images/fitness-1.jpg";
import trainer3 from "../../../images/fitness 2.jpg";
import TrainerDetails from "./TrainerDetails";
import Bounce from "react-reveal/Bounce";

const Trainers = () => {
  const [trainer, setTrainer] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5055/trainers`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTrainer(data));
  }, []);

  return (
    <div className="p-5" style={{ backgroundColor: "snow" }}>
      <Bounce top>
        <div className="mt-5">
          <h1 className="gym-brand text-center">OUR TRAINERS</h1>
        </div>
        <div className="mt-5 row ms-5">
          {trainer.map((trainer) => (
            <TrainerDetails trainer={trainer}></TrainerDetails>
          ))}
        </div>
      </Bounce>
    </div>
  );
};

export default Trainers;
