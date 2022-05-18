import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { Header, Input, Button, InputSelect } from "../../components";
import endPoint from "../../api/endPoint";
import { useAuth } from "../../auth/Auth";
import { useNavigate } from "react-router-dom";

const day = [
  { id: 1, value: 1, input: "Senin" },
  { id: 2, value: 2, input: "Selasa" },
  { id: 3, value: 3, input: "Rabu" },
  { id: 4, value: 4, input: "Kamis" },
  { id: 5, value: 5, input: "Jumat" },
];

const Consultation = () => {
  const { user } = useAuth();
  const [Dokter, setDokter] = useState([]);
  const [DokterChange, setDokterChange] = useState("");
  const [pesanKonsul, setPesanKonsul] = useState({
    tanggal: "",
    user_id: user,
    dokter_id: 1,
  });
  // console.log(pesanKonsul);
  const navigate = useNavigate();

  const addKonsultasi = async () => {
    const res = await endPoint.post("konsultasi", {
      tanggal: Date.now(),
      user_id: pesanKonsul.user_id,
      dokter_id: DokterChange,
    });
    if (res.status === 200) {
      console.log(res.data);
      navigate("/", { replace: true });
    }
  };
  useEffect(() => {
    const getDokter = async () => {
      const res = await endPoint.get(`dokter`);
      if (res.status === 200) {
        // console.log(res.data);
        setDokter(res.data);
      }
    };
    getDokter();
  }, []);
  const handleChange = (event) => {
    setDokterChange(event.target.value);
  };
  return (
    <div className="mt-24 ml-1 mb-5 px-7">
      <Helmet>
        <title>Dental Corner | Consultation</title>
      </Helmet>
      <div className="flex flex-col items-center">
        <div className="w-1/2 mb-5 text-left ml-5">
          <Header bold h3>
            Consultation
          </Header>
        </div>

        <div className="w-1/2 mb-5">
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
            data={day.map((data) => ({
              value: data.value,
              input: data.input,
            }))}
          />
          <div className="text-center">
            <Button
              className="w-1/2 h-10 my-10 text center"
              onClick={addKonsultasi}
            >
              Pesan Sekarang
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
