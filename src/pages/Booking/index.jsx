import React from "react";
import JUMBOTRON from "../../assets/img/jumbotron-booking.jpg";
import { Header, SecondaryCard } from "../../components";

const Booking = () => {
  return (
    <div
      className="pt-24 pl-20 mb-5 bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${JUMBOTRON})` }}
    >
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
        />
        <SecondaryCard
          btnContent="Book Consultation"
          title="Consultation"
          content="Pilih jadwal untuk melakukan konsultasi tentang keluhan anda terkait kesehatan gigi"
        />
      </div>
    </div>
  );
};

export default Booking;
