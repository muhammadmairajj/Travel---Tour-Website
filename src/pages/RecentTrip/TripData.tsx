

const TripData = (props: any) => {
    const { cardImage, cardTitle, cardText } = props;
  return (
        <div className="cards">
            <div className="card-image">
                <img src={cardImage} alt="" />
            </div>
            <h4>{cardTitle}</h4>
            <p>{cardText}</p>
        </div>
  )
}

export default TripData