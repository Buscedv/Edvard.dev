<template>
  <div class="section container-fluid" id="about">
    <div class="row inner">
      <div id="main" class="col-md-6 col-sm-12">
        <div id="inner-main">
          <h2 data-aos="fade-in">About Me
            <mark>.</mark>
          </h2>
          <div data-aos="flip-left" data-aos-delay="50" class="line"></div>
          <p>I have 5+ years of of software engineering experience. I enjoy
            learning about new things, and I'm constantly growing and improving my skills as a developer. I've worked on
            internal tools, big SAAS products, backend services, and a wide variety of frontend web applications. I've
            also been involved in planning and leading big migration projects, including transferring large amounts of
            business logic from a TypeScript frontend to PHP backend services, and the upgrading of the JavaScript
            runtime of a
            Google Apps Script connector. <br/><br/>
            Outside of work I do all sorts of music and audio related things. I play weddings, parties, and other similar events. I have also done theater and musical band work.
            I also do recording sessions, both as a session musician, and also as an audio engineer. I can also run small live sound events, and I have experience working as a festival stage hand.
          </p>
          <ul>
            <li>
              <mark>Software</mark>
              Engineer.
            </li>
            <li>
              <mark>Drummer</mark>
              & Musician.
            </li>
            <li>
              <mark>Live sound</mark>
              & <mark>Audio</mark> Engineer.
            </li>
            <li>Located in
              <mark>Raseborg</mark>
              &
              <mark>Helsinki</mark>
              .
            </li>
          </ul>
        </div>
      </div>

      <div id="skills" class="col-md-6 col-sm-12">
        <div id="skills-inner">
          <div class="row">
            <div class="col-xs-3 skill" data-balloon-blunt aria-label="TypeScript" data-balloon-pos="up"
                 data-aos="fade-in"
                 data-aos-delay="25">
              <img src="../assets/typescript.svg" alt="php">
            </div>
            <div class="col-xs-3 skill" data-balloon-blunt aria-label="React.js" data-balloon-pos="up"
                 data-aos="fade-in"
                 data-aos-delay="25">
              <i class="fab fa-react"></i>
            </div>
            <div class="col-xs-3 skill" data-balloon-blunt aria-label="Node.js" data-balloon-pos="up" data-aos="fade-in"
                 data-aos-delay="25">
              <i class="fab fa-node-js"></i>
            </div>
            <div class="col-xs-3 skill" data-balloon-blunt aria-label="Drums" data-balloon-pos="up"
                 data-aos="fade-in" data-aos-delay="25">
              <i class="fas fa-drum"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xs-12">
        <Resume :resume="showResume" @toggle="toggleResume()"></Resume>
      </div>
    </div>

  </div>
</template>

<script>
const Resume = () => import('../components/Resume.vue')
export default {
  name: 'About',
  components: {Resume},
  data() {
    return {
      showResume: false,
    }
  },
  methods: {
    toggleResume() {
      this.showResume = !this.showResume;
    },
  },
}
</script>

<style scoped>
#about {
  align-items: center;
}

#main {
  display: flex;
  align-items: center;
}

#main ul {
  padding-top: 2vh;
  padding-bottom: 2vh;
}

#main li mark {
  color: var(--accent-hover);
  font-family: 'Open Sans', 'Roboto', 'Jost', sans-serif;
  font-weight: bold;
}

#skills {
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 8vh;
}

.skill * {
  font-size: 8vw;
  color: var(--secondary-hover);
  padding: 1vw;
}

.skill *:hover {
  color: var(--accent);
}

#php-logo {
  display: flex;
  align-items: center;
}

#php-logo img {
  width: 9vw;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (max-width: 900px) {
  #skills {
    margin-top: 2vh;
    margin-bottom: 2vh;
  }

  .skill * {
    font-size: 14vw;
  }

  #php-logo img {
    width: 14vw;
  }
}
</style>
