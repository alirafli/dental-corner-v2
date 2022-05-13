import React from "react";
import { Header, Input, Button, InputSelect } from "../../components";

const dummyData = [
  { id: 1, value: "a", input: "Dummy A" },
  { id: 2, value: "b", input: "Dummy B" },
  { id: 3, value: "c", input: "Dummy C" },
  { id: 4, value: "d", input: "Dummy D" },
];

const Consultation = () => {
  return (
    <div className="mt-24 ml-1 mb-5 px-7">
      <div className="flex flex-col items-center">
        <div className="w-1/2 mb-5 text-left ml-5">
          <Header bold h3>
            Consultation
          </Header>
        </div>

        <div className="w-1/2 mb-5">
          <Input type="text">Nama</Input>
          <Input type="text">Nomor Telepon</Input>
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

export default Consultation;
