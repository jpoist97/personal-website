<template>
  <div class="home">
    <landing class="landing"/>
    <about class="under" data-aos="fade"/>
    <projects data-aos="fade"/>
    <contact data-aos="fade"/>
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
.landing{
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100vw;
    padding: 15px;
}

.under{
  margin-top: 115vh;
}

*{
  height: 100vh;
}

</style>