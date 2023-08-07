import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import BackgroundImage from "../BackgroundImage";
import "./style.css";

interface TextAreaType {
  rows: number;
}

const Contact = (props: TextAreaType) => {
  const { rows } = props;
  return (
    <>
      <Navbar />
      <BackgroundImage
        cName="hero_mid"
        heroImg="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80"
        heroTitle="Contact"
        url="/contact"
        buttonClass="hide"
      />

      <div className="form-container">
        <h1>Send Message of Us!</h1>
        <form action="">
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter Your Email" />
          <input type="text" placeholder="Enter Your Subject" />
          <textarea placeholder="Enter Message Here ... " rows={rows}></textarea>
          <button>Send Message</button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
