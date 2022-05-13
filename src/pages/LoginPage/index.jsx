import React from "react";
import JUMBOTRON from "../../assets/img/jumbotron-register.jpg";
import LOGO from "../../assets/img/logo.svg";
import { Header, Input, Button } from "../../components";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex">
      <div className="m-6 w-1/2">
        <img src={LOGO} alt="" />
        <div className="w-1/2 mb-10 ml-3 text-left mt-24">
          <Header bold h2>
            Login
          </Header>
        </div>
        <div className="w-full">
          <Input type="email">E-Mail</Input>
          <Input type="password">Password</Input>
        </div>
        <div className="text-center">
          <Button className="w-11/12 h-10" secondary>
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
          <div class="relative flex py-5 items-center">
            <div class="flex-grow border-t border-gray-400"></div>
            <span class="flex-shrink mx-4 text-gray-400">or</span>
            <div class="flex-grow border-t border-gray-400"></div>
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
