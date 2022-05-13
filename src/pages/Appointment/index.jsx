import { Label } from "@mui/icons-material";
import React from "react";
import { Header, Input, Button, InputSelect } from "../../components";

const dummyData = [
  { id: 1, value: "a", input: "ini A" },
  { id: 2, value: "b", input: "ini B" },
];

const Appointment = () => {
  return (
    <div className="mt-24 ml-1 mb-5 px-7">
      <div className="flex flex-col items-center">
        <div className="w-1/2 mb-5 text-left ml-5">
          <Header bold h3>
            Appointment
          </Header>
        </div>

        <div className="w-1/2 mb-5 text-center">
          <Input type="text">Nama</Input>
          <Input type="text">Nomor Telepon</Input>
          <Input type="text">Nomor Telepon</Input>
          <InputSelect
            title="titlenya disini"
            data={dummyData.map((data) => ({
              value: data.value,
              input: data.input,
            }))}
          />
          <Button className="w-2/4 h-10 my-10">Pesan Sekarang</Button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
