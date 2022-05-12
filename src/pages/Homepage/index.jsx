import React from "react";
import { Button, Header } from "../../components/";
import JUMBOTRON from "../../assets/img/jumbotron.png";

const HomePage = () => {
  return (
    <div className="mt-56 px-7 mb-5 flex justify-around items-center">
      <div className="-mt-28">
        <Header h2 bold>
          Make your smile <br />
          <span className="text-primary">Brighter</span> with
        </Header>
        <Header h1 bold>
          Dental Corner
        </Header>
        <Button bold className="py-2 px-7 mt-5">
          Book Now
        </Button>
      </div>
      <div>
        <img src={JUMBOTRON} alt="jumbotron" className="scale-110" />
      </div>
    </div>
  );
};

export default HomePage;
