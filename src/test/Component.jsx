import React from "react";
import { Button, Header, Paragraph } from "../components";

const Component = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap">
        <h1>button component</h1>
        <Button bold>button primary</Button>
        <Button secondary>button secondary</Button>
        <Button noBg bold>
          button no background
        </Button>
        <Button noBg bold outline>
          button no background with outline
        </Button>
        <br />
        <h1>Typography</h1>
        <Header>test</Header>
      </div>
    </>
  );
};

export default Component;
