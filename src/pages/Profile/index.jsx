import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import { Input, Header, Button } from "../../components";
import DUMMY from "../../assets/img/pp-dummy.jpg";
import endPoint from "../../api/endPoint";
import { useAuth } from "../../auth/Auth";

const Profile = () => {
  const { user } = useAuth();
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

  useEffect(() => {
    const handleProfile = async () => {
  
      const res = await endPoint.get(`user/${user}`);
      if (res.status === 200) {
        console.log(res.data);
        setProfile(res.data)
      }
    };

    handleProfile()
  }, [])
  

  

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
          <div className="w-full  font-black mt-10 ml-10">
            <Header bold h3>
              {profile.nama}
            </Header>
            <Button className="w-fit mt-3">Edit Profile</Button>
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
