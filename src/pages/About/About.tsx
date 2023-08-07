import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import BackgroundImage from "../BackgroundImage";
import './style.css';

const About = () => {
  return (
    <>
      <Navbar />
      <BackgroundImage
        cName="hero_mid"
        heroImg="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        heroTitle="About"
        url="/about"
        buttonClass="hide"
      />

      <div className="about-container">
        <h1>Our History</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime error
          enim, accusantium excepturi ipsum voluptatum eligendi commodi magni
          consequuntur neque quasi reprehenderit rem deserunt quibusdam voluptas
          soluta repellat aspernatur inventore nobis. Atque nihil maxime aperiam
          id deleniti, eligendi hic quia quidem cupiditate sed natus totam, sit
          incidunt accusamus. Officiis quis adipisci consequuntur labore in
          molestias deleniti incidunt cupiditate, explicabo at recusandae nihil
          ea eligendi aperiam, dolore commodi et distinctio nostrum quasi eos
          eius ratione assumenda! A, dicta perferendis nostrum totam aspernatur
          tempora obcaecati omnis exercitationem sit quod rem distinctio, sunt
          commodi fugiat, nisi eligendi suscipit minima. Commodi voluptatem
          mollitia facere!
        </p>
        <h1>Our Mission</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime error
          enim, accusantium excepturi ipsum voluptatum eligendi commodi magni
          consequuntur neque quasi reprehenderit rem deserunt quibusdam voluptas
          soluta repellat aspernatur inventore nobis. Atque nihil maxime aperiam
          id deleniti, eligendi hic quia quidem cupiditate sed natus totam, sit
          incidunt accusamus. Officiis quis adipisci consequuntur labore in
          molestias deleniti incidunt cupiditate, explicabo at recusandae nihil
          ea eligendi aperiam, dolore commodi et distinctio nostrum quasi eos
          eius ratione assumenda! A, dicta perferendis nostrum totam aspernatur
          tempora obcaecati omnis exercitationem sit quod rem distinctio, sunt
          commodi fugiat, nisi eligendi suscipit minima. Commodi voluptatem
          mollitia facere!
        </p>
        <h1>Our Vision</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime error
          enim, accusantium excepturi ipsum voluptatum eligendi commodi magni
          consequuntur neque quasi reprehenderit rem deserunt quibusdam voluptas
          soluta repellat aspernatur inventore nobis. Atque nihil maxime aperiam
          id deleniti, eligendi hic quia quidem cupiditate sed natus totam, sit
          incidunt accusamus. Officiis quis adipisci consequuntur labore in
          molestias deleniti incidunt cupiditate, explicabo at recusandae nihil
          ea eligendi aperiam, dolore commodi et distinctio nostrum quasi eos
          eius ratione assumenda! A, dicta perferendis nostrum totam aspernatur
          tempora obcaecati omnis exercitationem sit quod rem distinctio, sunt
          commodi fugiat, nisi eligendi suscipit minima. Commodi voluptatem
          mollitia facere!
        </p>
      </div>

      <Footer />
    </>
  );
};

export default About;
