import { Label } from "@mui/icons-material";
import React from "react";
import { Header, Input, Button, InputSelect } from "../../components";

const dummyLayanan = [
  { id: 1, value: 1, input: "Scalling" },
  { id: 2, value: 2, input: "Pencabutan" },
  { id: 3, value: 3, input: "Penambalan" },
  { id: 4, value: 4, input: "Orthodontic" },
  { id: 5, value: 5, input: "Bleaching" },
];

const dummyData = [
  { id: 1, value: 1, input: "Dummy 1" },
  { id: 2, value: 2, input: "Dummy 2" },
  { id: 3, value: 3, input: "Dummy 3" },
  { id: 4, value: 4, input: "Dummy 4" },
  { id: 5, value: 5, input: "Dummy 5" },
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

        <div className="w-1/2">
          <Input type="text">Nama</Input>
          <Input type="text">Nomor Telepon</Input>
          <InputSelect
            title="Pilih Jenis Layanan"
            data={dummyLayanan.map((data) => ({
              value: data.value,
              input: data.input,
            }))}
          />
          <InputSelect
            title="Pilih Dokter"
            data={dummyData.map((data) => ({
              value: data.value,
              input: data.input,
            }))}
          />
          <InputSelect
            title="Pilih Jadwal"
            data={dummyData.map((data) => ({
              value: data.value,
              input: data.input,
            }))}
          />
          <div className="text-center">
            <Button className="w-1/2 h-10 my-10 text center">
              Pesan Sekarang
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
