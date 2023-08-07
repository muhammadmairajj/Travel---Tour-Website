import Navbar from "../../components/Navbar";
import BackgroundImage from "../BackgroundImage";
import ServiceImg from "../../assets/2.jpg"
import Footer from "../../components/Footer";
import RecentTrip from "../RecentTrip";

const Service = () => {
  return (
    <>
      <Navbar />
      <BackgroundImage
        cName="hero_mid"
        heroImg={ServiceImg}
        heroTitle="Service"
        url="/service"
        buttonClass="hide"
      />
      <RecentTrip />
      <Footer />
    </>
  );
};

export default Service;
