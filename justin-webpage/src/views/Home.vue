<template>
  <div class="home">
    <landing id="landing" class="landing"/>
    <about id="about" class="under" data-aos="fade-left"/>
    <projects id="projects" data-aos="fade-right"/>
    <contact id="contact" data-aos="fade-left"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from '../components/Landing.vue'
import About from '../components/About.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'

export default {
  name: 'Home',
  components: {
    landing: Landing,
    about: About,
    projects: Projects,
    contact: Contact
  }
}
</script>

<style scoped>
/* 
COLOR PALETTE:
#17252a
#2b7a78
#3aafa9
#def2f1
#feffff 
*/

#home{
  width: 90px;
}

.landing{
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100vw;
}

.under{
  margin-top: 100vh;
}

*{
  height: 95vh;
}


</style>