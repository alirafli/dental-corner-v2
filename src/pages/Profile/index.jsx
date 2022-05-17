import React from "react";
import Helmet from "react-helmet";
import { Input, Header, Button } from "../../components";
import DUMMY from "../../assets/img/pp-dummy.jpg";

const Profile = () => {
  return (
    <div className="mt-24 ml-1 mb-5">
      <Helmet>
        <title>Dental Corner | Profile</title>
      </Helmet>
      <div className="flex flex-col items-center">
        <div className="flex">
          <div className="w-1/2 ">
            <img src={DUMMY} alt="Dummy" className="rounded-full" />
          </div>
          <div className="w-full  font-black mt-10 ml-10">
            <Header bold h3>
              Catherine Vania
            </Header>
            <Button className="w-fit mt-3" primary>
              Edit Profile
            </Button>
          </div>
        </div>
        <div className="w-1/2 mt-7">
          <Input type="text">Nama</Input>
          <Input>Email</Input>
          <Input>Password</Input>
          <Input>Birth Date</Input>
          <Input>Address</Input>
          <Input>Nomor Telepon</Input>
        </div>
      </div>
    </div>
  );
};

export default Profile;
