import Image1 from "../../assets/1.jpg";
import Image2 from "../../assets/2.jpg";
import Image3 from "../../assets/5.jpg";
import Image4 from "../../assets/8.jpg";
import './style.css';

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>

      <div className="first-destination">
        <div className="des-text">
          <h2>Taal Volcano, Batangas</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            temporibus quis repudiandae aliquid eaque, laborum cumque odio vel
            velit dolorem a impedit fugit possimus aperiam perspiciatis,
            architecto ipsam aspernatur unde quibusdam quas! Iusto explicabo
            accusantium atque assumenda cupiditate nulla hic. Vel laudantium
            vero qui quisquam corporis quaerat blanditiis magni quasi, rem,
            explicabo voluptatibus ipsam placeat corrupti nesciunt velit natus
            quas recusandae accusamus? Ad nostrum nesciunt sint tempore animi,
            necessitatibus excepturi, error, sit molestias consequatur dolor?
            Illo tempore libero est laborum.
          </p>
        </div>

        <div className="images">
          <img src={Image1} alt="" />
          <img src={Image2} alt="" />
        </div>
      </div>

      <div className="second-destination">
        <div className="des-text">
          <h2>Mt. Daguldul, Batangas</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            temporibus quis repudiandae aliquid eaque, laborum cumque odio vel
            velit dolorem a impedit fugit possimus aperiam perspiciatis,
            architecto ipsam aspernatur unde quibusdam quas! Iusto explicabo
            accusantium atque assumenda cupiditate nulla hic. Vel laudantium
            vero qui quisquam corporis quaerat blanditiis magni quasi, rem,
            explicabo voluptatibus ipsam placeat corrupti nesciunt velit natus
            quas recusandae accusamus? Ad nostrum nesciunt sint tempore animi,
            necessitatibus excepturi, error, sit molestias consequatur dolor?
            Illo tempore libero est laborum.
          </p>
        </div>

        <div className="images">
          <img src={Image3} alt="" />
          <img src={Image4} alt="" />
        </div>
      </div>


    </div>
  );
};

export default Destination;
