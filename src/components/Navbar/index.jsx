import React from "react";
import { Outlet } from "react-router-dom";
import { Paragraph, Button, Footer } from "../";
import LOGO from "../../assets/img/logo.svg";

const Navbar = () => {
  return (
    <div>
      <div className="fixed min-w-monitor bg-white/50 shadow-xl  z-10 px-5 py-3 top-0">
        <div className="flex items-center justify-between w-screen">
          <img src={LOGO} alt="logo" />

          {/* udah login */}
          {/* <div className="flex mr-36 w-96 justify-between">
          <Button noBg>
            <Paragraph h7 bold>
              Book
            </Paragraph>
          </Button>
          <Button noBg>
            <Paragraph h7 bold>
              article
            </Paragraph>
          </Button>
          <Button noBg>
            <Paragraph h7 bold>
              Medical Log
            </Paragraph>
          </Button>
        </div> */}

          {/* belum login */}
          <div className="mr-20 flex  w-52 justify-between ">
            <Button noBg bold>
              Login
            </Button>
            <Button bold>Register</Button>
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Navbar;
