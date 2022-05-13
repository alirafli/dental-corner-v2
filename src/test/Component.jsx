import React from "react";
import {
  Button,
  Header,
  Paragraph,
  PrimaryCard,
  SecondaryCard,
  Input,
  InputSelect,
} from "../components";

const Component = () => {
  return (
    <div className="mt-24 ml-1 mb-5">
      <div className="grid grid-rows-1 grid-flow-col gap-4 w-full ">
        <div className="shadow-2xl flex flex-col p-2">
          <h1 className="font-bold mb-5 text-center">button component</h1>
          <Button bold>button primary</Button>
          <Button secondary>button secondary</Button>
          <Button noBg bold>
            button no background
          </Button>
          <Button noBg bold outline>
            button no background with outline
          </Button>
        </div>
        <div className="shadow-2xl p-2">
          <h1 className="font-bold mb-5 text-center">Typography</h1>
          <Header h1>header h1</Header>
          <Header h2>header h2</Header>
          <Header h3>header h3</Header>
          <Header h6>header h6</Header>
          <Header h7>header h7</Header>
          <Paragraph b1>Paragraph Body 1</Paragraph>
          <Paragraph b1 bold>
            Paragraph Body 1 bold
          </Paragraph>
        </div>
        <div className="shadow-2xl p-2">
          <h1 className="font-bold mb-5 text-center">card</h1>
          <PrimaryCard title="primary card" />
          <PrimaryCard
            title="i'm a long title YUHUUUUUUUUUUUUUU"
            date="dd-mm-yyyy"
          />
          <SecondaryCard />
          <SecondaryCard
            title="Consultation"
            content="Pilih jadwal untuk melakukan konsultasi tentang keluhan anda terkait kesehatan gigi"
            btnContent="Book Consultation"
          />
        </div>
        <div className="shadow-2xl p-2">
          <h1 className="font-bold mb-5 text-center">Field Input</h1>
          <Input type="email">email</Input>
          <Input type="password" icon="human">
            password
          </Input>
          <InputSelect
            title="titlenya disini"
            data={[
              { value: "test data", input: "ini data test" },
              { value: "test data", input: "ini data test" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Component;
