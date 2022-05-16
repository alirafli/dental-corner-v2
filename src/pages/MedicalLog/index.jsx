import React from "react";
import Helmet from "react-helmet";
import { Header, Button } from "../../components";

const MedicalLog = () => {
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
        <div className="flex justify-end h-14">
          <Button bold>Sort By</Button>
        </div>
      </div>
      <div className="mx-14">
        <div className="mb-2">
          <table className="table-fixed rounded-md w-full text-sm text-left text-gray-500 bg-primary/40">
            <tr>
              <th className="w-2 px-6 py-3">No.</th>
              <th className="w-24 px-6 py-3">Nama</th>
              <th className="w-24 px-6 py-3">Jenis Layanan</th>
              <th className="w-24 px-6 py-3">Dokter</th>
              <th className="w-24 px-6 py-3">Tanggal Pemeriksaan</th>
            </tr>
          </table>
        </div>
        <div className="mb-2">
          <table className="table-fixed rounded-md w-full text-sm text-left text-gray-500 bg-primary/40">
            <tr>
              <td className="w-2 px-6 py-3">1.</td>
              <td className="w-24 px-6 py-3">Catherine Vania</td>
              <td className="w-24 px-6 py-3">Penghitaman Gigi</td>
              <td className="w-24 px-6 py-3">Drg. Cynthia Utojo</td>
              <td className="w-24 px-6 py-3">21 Mei 2022</td>
            </tr>
          </table>
        </div>
        <div className="mb-2">
          <table className="table-fixed rounded-md w-full text-sm text-left text-gray-500 bg-primary/40">
            <tr>
              <td className="w-2 px-6 py-3">2.</td>
              <td className="w-24 px-6 py-3">Ali Rafli</td>
              <td className="w-24 px-6 py-3">Pemutihan Gigi</td>
              <td className="w-24 px-6 py-3">Drg. Vania Sahda</td>
              <td className="w-24 px-6 py-3">21 Mei 2022</td>
            </tr>
          </table>
        </div>
        <div className="mb-2">
          <table className="table-fixed rounded-md w-full text-sm text-left text-gray-500 bg-primary/40">
            <tr>
              <td className="w-2 px-6 py-3">3.</td>
              <td className="w-24 px-6 py-3">Daffa Yanuardhana</td>
              <td className="w-24 px-6 py-3">Penghijauan Gigi</td>
              <td className="w-24 px-6 py-3">Drg. Alika Raflika Replika</td>
              <td className="w-24 px-6 py-3">21 Mei 2022</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MedicalLog;
