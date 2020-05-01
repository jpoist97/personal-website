<template>
  
    <div>

      <div class="fade-in sixth">
        <b-navbar>
          <b-navbar-brand href="#">JP</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto nav-link">
              <b-nav-item href="#">About</b-nav-item>
              <b-nav-item href="#">Projects</b-nav-item>
              <b-nav-item href="#">Interests</b-nav-item>
              <b-nav-item href="#">Contact</b-nav-item>
            </b-navbar-nav>

          </b-collapse>
  
        </b-navbar>
      </div>

        <div class="message">
            <div class="fade-in first">Hello, my name is</div>
            <h2 class="fade-in second">Justin Poist</h2>
            <h2 class="fade-in third">and I'm a Software Engineering Student</h2>
            <p class="fade-in fourth">I'm currently studying at Cal Poly San Luis Obispo. </p>
            <b-button class="fade-in fifth">Check out my Work <b-icon-arrow-right></b-icon-arrow-right></b-button>
        </div>

    </div>


</template>

<script>
import gsap from 'gsap'
export default {
  mounted() {
    // timeline will go here
    let tl = gsap.timeline();
    tl.to('.first', {opacity: 1, x: 40, duration:1.5, ease: 'expo.out'});
    tl.to('.second', {opacity: 1, x: 40, duration:1.5, ease: 'expo.out'});
    tl.to('.third', {opacity: 1, x: 40, duration:1.5, ease: 'expo.out'});
    tl.to('.fourth', {opacity: 1, x: 40,duration:1.5, ease: 'expo.out'});
    tl.to('.fifth', {opacity: 1, x: 40, duration:1.5, ease: 'expo.out'});
    tl.to('.sixth', {opacity: 1, duration:1, ease: 'expo.out'});
  }
}
</script>

<style scoped>
.fade-in{
  opacity: 0;
}

.message{
    margin-top: 20vh;
    margin-left: 0px;
    color: #111111;
    font-size: 36px;
    text-align: left;
}

p{
  margin-top: 20px;
}

.nav-link{
  color: #eeeeee;
}
</style>