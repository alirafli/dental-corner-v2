import React from "react";
import JUMBOTRON from "../../assets/img/jumbotron-register.jpg";
import LOGO from "../../assets/img/logo.svg";
import { Header, Input, Button } from "../../components";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="flex">
      <div className="m-6 w-1/2">
        <img src={LOGO} alt="" />
        <div className="w-1/2 mb-10 ml-3 text-left mt-24">
          <Header bold h2>
            Register
          </Header>
        </div>
        <div className="w-full">
          <Input type="text">Nama</Input>
          <Input type="text">Tanggal Lahir</Input>
          <Input type="text">E-Mail</Input>
          <Input type="text">Password</Input>
        </div>
        <div className="text-center">
          <Button className="w-11/12 h-8" secondary>
            Register
          </Button>
          <div className="mt-4">
            <h6>
              Already have an account?{" "}
              <span>
                <Link to="/login">log in</Link>
              </span>
            </h6>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img src={JUMBOTRON} alt="Jumbotron" className="w-full h-screen" />
      </div>
    </div>
  );
};

export default RegisterPage;
