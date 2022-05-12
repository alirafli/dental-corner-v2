import React from "react";
import LOGO from "../../assets/img/logo.svg";
import { Paragraph, Header } from "../";

const footer = () => {
  return (
    <div className="bg-trueWhite grid grid-rows-3 grid-flow-col gap-4 pt-10">
      <img src={LOGO} alt="logo" className="" />
      <div className=""></div>
      <div className=""></div>
      <div className="">
        <Paragraph bold>
          Jl. Taman Surya Boulevard No.27, <br /> Cengkareng, Kota Jakarta
          Barat, <br /> DKI Jakarta 11830
        </Paragraph>
      </div>
      <div className="">
        <Paragraph>(021) 54376087</Paragraph>
      </div>
      <div className="">
        <Paragraph>dentalcorner@gmail.com</Paragraph>
      </div>
      <div className="">
        <Header h6 bold>
          Quick Links
        </Header>
        <Paragraph b1>
          Book Appointment <br />
          Book Consultation <br />
          Article <br />
          Medical Log
        </Paragraph>
      </div>
      <div className=""></div>
      <div className="">
        <Paragraph b1>© 2022 Dental Corner. All rights reserved</Paragraph>
      </div>
      <div className="">
        <Header h6 bold>
          Social Media
        </Header>
        <Paragraph b1>
          Instagram <br />
          Facebook
        </Paragraph>
      </div>
      <div className=""></div>
    </div>
  );
};

export default footer;
