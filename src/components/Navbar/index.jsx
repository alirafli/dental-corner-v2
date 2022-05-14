import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Paragraph, Button, Footer } from "../";
import LOGO from "../../assets/img/logo.svg";

const Navbar = () => {
  return (
    <div>
      <div className="fixed min-w-monitor bg-white/50 shadow-xl  z-10 px-5 py-3 top-0">
        <div className="flex items-center justify-between w-screen">
          <Link to="/">
            <img src={LOGO} alt="logo" />
          </Link>

          {/* udah login */}
          {/* <div className="flex mr-24 w-96 justify-between items-center ">
            <Button noBg>
              <Link to="/booking">
                <Paragraph h7 bold>
                  Book
                </Paragraph>
              </Link>
            </Button>
            <Button noBg>
              <Link to="/article">
                <Paragraph h7 bold>
                  article
                </Paragraph>
              </Link>
            </Button>
            <Button noBg>
              <Link to="/medical-log">
                <Paragraph h7 bold>
                  Medical Log
                </Paragraph>
              </Link>
            </Button>
            <Link to="/profile">
              <div className="bg-gray rounded-full w-10 h-10" />
            </Link>
          </div> */}

          {/* belum login */}
          <div className="mr-20 flex  w-52 justify-between ">
            <Link to="/login">
              <Button noBg bold>
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button bold>Register</Button>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Navbar;
