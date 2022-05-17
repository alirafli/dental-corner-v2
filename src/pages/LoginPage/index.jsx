import React, { useState } from "react";
import JUMBOTRON from "../../assets/img/jumbotron-register.jpg";
import LOGO from "../../assets/img/logo.svg";
import { Header, Input, Button } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import endPoint from "../../api/endPoint";
import { useAuth } from "../../auth/Auth";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setAndGetUserId } = useAuth();
  const [Login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleUserLogin = async (e) => {
    e.preventDefault();
    const res = await endPoint.post("user/login", {
      email: Login.email,
      password: Login.password,
    });
    if (res.status === 200) {
      console.log(res.data);
      setAndGetUserId(res.data.id);
      navigate("/", { replace: true });
    }
  };
  return (
    <div className="flex">
      <Helmet>
        <title>Dental Corner | Login</title>
      </Helmet>
      <div className="m-6 w-1/2">
        <Link to="/">
          <img src={LOGO} alt="" />
        </Link>
        <div className="w-1/2 mb-10 ml-3 text-left mt-24">
          <Header bold h2>
            Login
          </Header>
        </div>
        <div className="w-full">
          <Input
            type="email"
            onChange={(e) => setLogin({ ...Login, email: e.target.value })}
          >
            E-Mail
          </Input>
          <Input
            type="password"
            onChange={(e) => setLogin({ ...Login, password: e.target.value })}
          >
            Password
          </Input>
        </div>
        <div className="text-center">
          <Button className="w-11/12 h-10" secondary onClick={handleUserLogin}>
            Login
          </Button>
          <div className="mt-4">
            <h6>
              Don't have an account?{" "}
              <span>
                <Link to="/register">Sign Up</Link>
              </span>
            </h6>
          </div>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <Button className="w-11/12 h-10" noBg bold outline>
            Sign up with Google
          </Button>
        </div>
      </div>
      <div className="w-1/2">
        <img src={JUMBOTRON} alt="Jumbotron" className="w-full h-screen" />
      </div>
    </div>
  );
};

export default LoginPage;
