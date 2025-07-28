import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <section id="home">
        <div class="introduction">
          <span class="intro-text">Hola, mi nombre es</span>
          <span class="name">OLEKSANDR YATSENTYUK</span>
          <span class="profesion">y soy FullStack Developer.</span>
        </div>
        <div class="details-card">
          <p>
            Soy un estudiante de ingeniería informática, apasionado por la
            programación y en constante búsqueda de la perfección en mi trabajo.
            Me encanta la idea de crear aplicaciones y sitios web útiles para
            las personas, y siempre estoy en constante actualización y
            aprendizaje de las últimas tendencias y herramientas en el mercado.
            Si necesitas un desarrollador comprometido y apasionado, ¡no dudes
            en contactarme!
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
