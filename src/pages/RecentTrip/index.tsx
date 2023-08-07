import Image1 from "../../assets/maldives.png";
import Image2 from "../../assets/malasia.png";
import Image3 from "../../assets/dubai.png";

import "./style.css";
import TripData from "./TripData";

const RecentTrip = () => {
  return (
    <div className="recent-trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>

      <div className="trip-cards">
        <TripData
          cardImage={Image1}
          cardTitle="Maldives"
          cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae expedita quo eaque culpa omnis ad quae veniam vero odit, dolore, quaerat vitae velit possimus, dolores ut ex officiis blanditiis dicta fugit. Provident amet rem libero!"
        />
        <TripData
          cardImage={Image2}
          cardTitle="Malasyia"
          cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae expedita quo eaque culpa omnis ad quae veniam vero odit, dolore, quaerat vitae velit possimus, dolores ut ex officiis blanditiis dicta fugit. Provident amet rem libero!"
        />
        <TripData
          cardImage={Image3}
          cardTitle="Dubai"
          cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae expedita quo eaque culpa omnis ad quae veniam vero odit, dolore, quaerat vitae velit possimus, dolores ut ex officiis blanditiis dicta fugit. Provident amet rem libero!"
        />
      </div>
    </div>
  );
};

export default RecentTrip;
