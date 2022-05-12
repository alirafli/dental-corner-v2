import { Label } from "@mui/icons-material";
import React from "react";
import { Header, Input, Button } from "../../components";

const Appointment = () => {
  return (
    <div className="mt-24 ml-1 mb-5 px-7">
      <div className="">
        <h1 className="mb-10 ml-3">
          <Header className="font-black text-4xl ml-80" h3>
            Appointment
          </Header>
        </h1>
        <div className="text-center w-full mb-5">
          <Input className="w-2/4" type="text">
            Nama
          </Input>
          <Input className="w-2/4" type="text">
            Nomor Telepon
          </Input>
          <Input className="w-2/4" type="text">
            Nomor Telepon
          </Input>
          <Input className="w-2/4" type="text">
            Nomor Telepon
          </Input>
          <Input className="w-2/4" type="text">
            Nomor Telepon
          </Input>
        </div>
        <div className="text-center w-full">
          <Button className="w-2/4 h-10 my-10">Pesan Sekarang</Button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
