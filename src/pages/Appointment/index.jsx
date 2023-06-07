import React, { useState } from "react";
import Helmet from "react-helmet";
import { Header, Button, InputSelect } from "../../components";
import { useNavigate } from "react-router-dom";

const dummyLayanan = [
  { id: 1, value: 1, input: "Scalling" },
  { id: 2, value: 2, input: "Pencabutan" },
  { id: 3, value: 3, input: "Penambalan" },
  { id: 4, value: 4, input: "Orthodontic" },
  { id: 5, value: 5, input: "Bleaching" },
];

const dummyData = [
  { id: 1, value: 1, input: "Senin" },
  { id: 2, value: 2, input: "Selasa" },
  { id: 3, value: 3, input: "Rabu" },
  { id: 4, value: 4, input: "Kamis" },
  { id: 5, value: 5, input: "Jumat" },
];

const Appointment = () => {
  const [Dokter, setDokter] = useState([]);
  const [layanan, setLayanan] = useState([]);
  const [DokterChange, setDokterChange] = useState("");
  const [layananChange, setlayananChange] = useState("");
  const [pesanApp, setPesanApp] = useState({
    tanggal: Date.now(),
    user_id: user,
    dokter_id: DokterChange,
    layanan_id: layananChange,
  });
  // console.log(pesanApp);
  const navigate = useNavigate();

  const addAppointment = async () => {};

  const handleChange = (event) => {
    setDokterChange(event.target.value);
  };
  const layananChanges = (event) => {
    setlayananChange(event.target.value);
  };
  return (
    <div className="mt-24 ml-1 mb-5 px-7">
      <Helmet>
        <title>Dental Corner | Appointment</title>
      </Helmet>
      <div className="flex flex-col items-center">
        <div className="w-1/2 mb-5 text-left ml-5">
          <Header bold h3>
            Appointment
          </Header>
        </div>

        <div className="w-1/2">
          <InputSelect
            title="Pilih Jenis Layanan"
            value={layananChange}
            data={layanan.map((data) => ({
              value: data.id,
              input: data.nama_layanan,
            }))}
            onChange={layananChanges}
          />
          <InputSelect
            title="Pilih Dokter"
            value={DokterChange}
            data={Dokter.map((data) => ({
              value: data.id,
              input: data.nama,
            }))}
            onChange={handleChange}
          />
          <InputSelect
            title="Pilih Jadwal"
            data={dummyData.map((data) => ({
              value: data.value,
              input: data.input,
            }))}
          />
          <div className="text-center">
            <Button
              className="w-1/2 h-10 my-10 text center"
              onClick={addAppointment}
            >
              Pesan Sekarang
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
