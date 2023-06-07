import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { Header, Button } from "../../components";

const MedicalLog = () => {
  const [konsultasi, setkonsultasi] = useState([]);
  const [appointment, setAppointment] = useState([]);
  const [profile, setProfile] = useState({
    id: 0,
    nama: "",
    email: "",
    password: "",
    alamat: "",
    jenis_kelamin: "",
    no_hp: "",
    createdAt: "",
    updatedAt: "",
  });

  return (
    <div className="mt-24 ml-1 mb-5">
      <Helmet>
        <title>Dental Corner | Medical Log</title>
      </Helmet>
      <div className="mt-14 px-14 grid grid-cols-2">
        <div className="">
          <Header className="font-black text-3xl mb-10" h3>
            Medical Log
          </Header>
        </div>
        <div className="flex justify-end h-14"></div>
      </div>
      <div className="mx-14">
        <table className="table-fixed rounded-md w-full text-sm text-left text-gray-500 bg-primary/40">
          <tbody>
            <tr className="border-8 border-white">
              <th className="w-24 px-6 py-3 ">Nama</th>
              <th className="w-24 px-6 py-3">Jenis Layanan</th>
              <th className="w-24 px-6 py-3">Dokter</th>
              <th className="w-24 px-6 py-3">Tanggal Pemeriksaan</th>
            </tr>

            {konsultasi.map((data, i) => (
              <tr key={i} className="border-8 border-white">
                <td className="w-24 px-6 py-3 capitalize">{profile.nama}</td>
                <td className="w-24 px-6 py-3">Konsultasi</td>
                <td className="w-24 px-6 py-3 capitalize ">
                  drg. {data.dataDokter.nama}
                </td>
                <td className="w-24 px-6 py-3">
                  {new Date(data.data.tanggal).toLocaleDateString()}
                </td>
              </tr>
            ))}
            {appointment.map((data, i) => (
              <tr key={i} className="border-8 border-white">
                <td className="w-24 px-6 py-3 capitalize">{profile.nama}</td>
                <td className="w-24 px-6 py-3">
                  {data.dataLayanan.nama_layanan}
                </td>
                <td className="w-24 px-6 py-3 capitalize ">
                  drg. {data.dataDokter.nama}
                </td>
                <td className="w-24 px-6 py-3">
                  {new Date(data.data.tanggal).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicalLog;
