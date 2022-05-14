import React from "react";
import Helmet from "react-helmet";
import JUMBOTRON from "../../assets/img/jumbotron-booking.jpg";
import { Header, SecondaryCard } from "../../components";

const Booking = () => {
  return (
    <div
      className="pt-24 pl-20 mb-5 bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${JUMBOTRON})` }}
    >
      <Helmet>
        <title>Dental Corner | Booking</title>
      </Helmet>
      <div className="ml-2 mb-5">
        <Header h3 bold>
          Our Service
        </Header>
      </div>
      <div className="flex">
        <SecondaryCard
          btnContent="Book Appointment"
          title="Appointment"
          content="Pilih jadwal untuk perawatan gigi anda"
          extra={[
            "Scaling",
            "Pencabutan",
            "Penambalan",
            "Orthodontic",
            "Bleaching",
          ]}
          linkTo="/appointment"
        />
        <SecondaryCard
          btnContent="Book Consultation"
          title="Consultation"
          content="Pilih jadwal untuk melakukan konsultasi tentang keluhan anda terkait kesehatan gigi"
          linkTo="/consultation"
        />
      </div>
    </div>
  );
};

export default Booking;
