import React from "react";
import Helmet from "react-helmet";
import { Header, PrimaryCard } from "../../components";

const DummyData = [
  {
    date: "21 April 2022",
    title: "sikat gigi menggunakan kawat lebih baik, apakah benar?",
    image:
      "https://img.okezone.com/content/2015/12/14/481/1267156/alasan-pengguna-behel-harus-pakai-sikat-gigi-khusus-914FUckxMN.jpg",
  },
  {
    date: "09 Oktober 2022",
    title: "5 makanan unik pencegah gigi berlubang!",
    image:
      "https://res.cloudinary.com/dk0z4ums3/image/upload/v1643021099/attached_image/mari-kita-cegah-gigi-keropos-sebelum-terlambat.jpg",
  },
  {
    date: "13 Januari 2022",
    title: "apa benar sikat gigi bisa menggunakan arang?",
    image:
      "https://asset-a.grid.id/crop/0x0:626x417/x/photo/2020/02/17/2011945701.jpg",
  },
  {
    date: "14 Maret 2022",
    title: "10 minuman yang menyebabkan gigi berlubang, nomor 5 bikin kaget!",
    image:
      "https://image-cdn.medkomtek.com/clwURlX5IFyGZBLmqxMq0tmpm8w=/1200x675/smart/klikdokter-media-buckets/medias/2310358/original/051559500_1578017608-6-Kebiasaan-saat-Liburan-yang-Bikin-Gampang-Sakit-By-banjongseal324-shutterstock.jpg",
  },
  {
    date: "28 Mei 2022",
    title: "apa? makan pisang bisa menyebabkan gigi berwarna hijau?",
    image:
      "https://image-cdn.medkomtek.com/KLdfVpkN1VpSo1IGjYT7682JMIg=/640x640/smart/klikdokter-media-buckets/medias/2318080/original/098309500_1598010430-Makan-Pisang-Bisa-Tingkatkan-Mood-Mitos-atau-Fakta-shutterstock_781993492.jpg",
  },
  {
    date: "01 Februari 2022",
    title: "5 fakta palsu terkait perawatan gigi",
    image:
      "https://image-cdn.medkomtek.com/bggWmcld0GBtbRRLMFj0lRNxVk0=/1200x675/smart/klikdokter-media-buckets/medias/2313431/original/004758100_1585626697-Stigma-Masyarakat-Terhadap-Dokter-Gigi-shutterstock_1197258499.jpg",
  },
  {
    date: "02 2022",
    title: "apa benar kelelawar menyerap sumsum gigi?",
    image:
      "https://i0.wp.com/gerava.com/wp-content/uploads/2020/05/kelelawar.png?fit=683%2C415&ssl=1",
  },
  {
    date: "17 Agustus 2022",
    title: "benarkah perlu mengganti sikat gigi 3 bulan sekali?",
    image:
      "https://image-cdn.medkomtek.com/XjK4OIfy5rkJZzf1GYbgjfi5DWs=/1200x675/smart/klikdokter-media-buckets/medias/2308661/original/080764700_1570518763-Bertukar-Sikat-Gigi-Ini-Bahayanya-bagi-Kesehatan-By-Nana_Studio-Shutterstock.jpg",
  },
];

const Article = () => {
  return (
    <div className="mt-40 ml-1 mb-5 px-7">
      <Helmet>
        <title>Dental Corner | Article</title>
      </Helmet>
      <div className="">
        <Header className="font-black text-4xl mb-10 text-center" h3>
          Article
        </Header>
        <div className="px-40">
          <div className="grid grid-cols-4 gap-x-30 gap-y-35">
            {DummyData.map((data, id) => (
              <PrimaryCard
                date={data.date}
                title={data.title}
                image={data.image}
              ></PrimaryCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
