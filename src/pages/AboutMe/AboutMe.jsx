import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <section id="about-me">
        <div class="presentation">
          <span>Hi, my name is</span>
          <span>OLEKSANDR YATSENTYUK</span>
          <span>and I'm a Computer Engineer</span>
          <p class="presentation-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            inventore quos fugiat dolor sequi eaque eum eos ullam? Ratione
            quibusdam voluptatem cupiditate necessitatibus pariatur repellendus
            culpa iusto minus, praesentium quisquam!
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/projectsfs/image/upload/v1753738871/Rock%7BtheCode%7D/Projects/Project_3_Portfolio/foto_carne_nb_wr2rk8.png"
          alt="personal-photo"
        />
      </section>
    </>
  );
};

export default AboutMe;
