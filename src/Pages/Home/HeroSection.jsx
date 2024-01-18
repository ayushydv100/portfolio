export default function HeroSection() {
  const handleDownload = () => {
    const link =
      "https://drive.google.com/file/d/15uZlIAC9yIVvsu78is_42gu1jxDWvcda/view?usp=drive_link";
    window.open(link, "_blank");
  };
  //direct download cv link = "https://download941.mediafire.com/inof095qryzgCedzUm0ayIwY20Zd1ChTru7qvy6CwwJEGhPlScmtlTXKrTpLTSGJOSy6k44TTOQe53KkUf_HMbP_tMm6WZr_36tbmUpEQl1529oOIm7yCQ4jPsoCfW3UfI-h73IRDeWiJWKAr_FD1cFuJT5feTZWE1vt2HPvC3NApuTu/tu1jg200dc3t3g0/AyushYadavResume.pdf";
  return (
    <section id="heroSection" className="hero--section mobile-padding-high">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Ayush</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">A Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Building Web Solutions with Node.js,
            <br />
            Express.js, React and MongoDB.
          </p>
        </div>
        <button className="btn btn-primary" onClick={handleDownload}>
          View Resume
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
