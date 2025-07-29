import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <section id="home">
        <div class="introduction">
          <span class="intro-text">Hi, my name is</span>
          <span class="name">OLEKSANDR YATSENTYUK</span>
          <span class="profesion">and I'm a Computer Engineer</span>
        </div>
        <div class="details-card">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            inventore quos fugiat dolor sequi eaque eum eos ullam? Ratione
            quibusdam voluptatem cupiditate necessitatibus pariatur repellendus
            culpa iusto minus, praesentium quisquam!
          </p>
          <img
            class="intro-emoji"
            src="https://res.cloudinary.com/projectsfs/image/upload/v1753738871/Rock%7BtheCode%7D/Projects/Project_3_Portfolio/foto_carne_nb_wr2rk8.png"
          />
        </div>
      </section>
    </>
  );
};

export default AboutMe;
