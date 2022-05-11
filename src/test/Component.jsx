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
        <Header h1>header h1</Header>
        <Header h2>header h2</Header>
        <Header h3>header h3</Header>
        <Header h6>header h6</Header>
        <Header h7>header h7</Header>
        <Paragraph b1>Paragraph Body 1</Paragraph>
      </div>
    </>
  );
};

export default Component;
