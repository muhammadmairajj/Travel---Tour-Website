import "./style.css";

const BackgroundImage = (props: any) => {
    const { cName, heroImg, heroText, heroTitle, url, buttonText, buttonClass } = props
  return (
    <div className={cName}>
      <img
        src={heroImg}
        className="hero-img"
        alt="heroImg"
      />

      <div className="hero-text">
        <h1>{heroTitle}</h1>
        <p>{heroText}</p>
        <a href={url} className={buttonClass}>
            {buttonText}
        </a>
      </div>
    </div>
  );
};

export default BackgroundImage;
