import React, { useState } from "react";
import Helmet from "react-helmet";
import { Input, Header } from "../../components";
import DUMMY from "../../assets/img/default.jpg";

const Profile = () => {
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
        <title>Dental Corner | Profile</title>
      </Helmet>
      <div className="flex flex-col items-center">
        <div className="flex">
          <div className="w-1/2 ">
            <img src={DUMMY} alt="Dummy" className="rounded-full bg-gray" />
          </div>
          <div className="w-full  font-black mt-10 ml-10 capitalize">
            <Header bold h3>
              {profile.nama}
            </Header>
          </div>
        </div>
        <div className="w-1/2 mt-7">
          <Input disabled>{profile.email}</Input>
          <Input disabled>{profile.alamat}</Input>
          <Input disabled>{profile.no_hp}</Input>
        </div>
      </div>
    </div>
  );
};

export default Profile;
