import React, { useState } from "react";
import JUMBOTRON from "../../assets/img/jumbotron-register.jpg";
import LOGO from "../../assets/img/logo.svg";
import { Header, Input, Button } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import { useAuthFirebase } from "../../context/AuthContext";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { signup, addUserDocument } = useAuthFirebase();

  const [register, setRegister] = useState({
    nama: "",
    email: "",
    password: "",
    alamat: "",
    jenis_kelamin: "",
    no_hp: "",
  });

  const handleUserLogin = async () => {
    console.log(register);
  };

  const handleRegister = async (e) => {
    const { nama, email, alamat, jenis_kelamin, no_hp } = register;
    e.preventDefault();
    try {
      await signup(register.email, register.password);
      await addUserDocument(email, nama, alamat, jenis_kelamin, no_hp);
      navigate("/");
      handleUserLogin();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex">
      <Helmet>
        <title>Dental Corner | Register</title>
      </Helmet>
      <div className="m-6 w-1/2">
        <Link to="/">
          <img src={LOGO} alt="" />
        </Link>
        <div className="w-1/2 mb-10 ml-3 text-left mt-24">
          <Header bold h2>
            Register
          </Header>
        </div>
        <div className="w-full">
          <Input
            type="text"
            onChange={(e) => setRegister({ ...register, nama: e.target.value })}
          >
            Nama
          </Input>
          <Input
            type="email"
            onChange={(e) =>
              setRegister({ ...register, email: e.target.value })
            }
          >
            Email
          </Input>
          <Input
            type="password"
            onChange={(e) =>
              setRegister({ ...register, password: e.target.value })
            }
          >
            Password
          </Input>
          <Input
            type="text"
            onChange={(e) =>
              setRegister({ ...register, alamat: e.target.value })
            }
          >
            alamat
          </Input>
          <Input
            type="text"
            onChange={(e) =>
              setRegister({ ...register, jenis_kelamin: e.target.value })
            }
          >
            jenis kelamin
          </Input>
          <Input
            type="number"
            onChange={(e) =>
              setRegister({ ...register, no_hp: e.target.value })
            }
          >
            nomor handphone
          </Input>
        </div>
        <div className="text-center">
          <Button className="w-11/12 h-8" secondary onClick={handleRegister}>
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
