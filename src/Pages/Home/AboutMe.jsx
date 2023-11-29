export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section mobile-padding">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description about-description">
            A computer science professional proficient in the MERN stack,
            utilizing NodeJS and ExpressJS for server-side scripting, MongoDB
            for database management, and ReactJS for creating interactive user
            interfaces. Complemented by a strong foundation in Java and MySQL,
            enhancing my capabilities in server-side development and database
            management. Also proficient in mobile app development using Flutter.
            My diverse skill set positions me effectively for challenging roles
            in the dynamic field of software development.
          </p>
        </div>
      </div>
    </section>
  );
}
