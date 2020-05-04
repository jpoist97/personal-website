<template>
  
    <div>
      <div id="navbar" class="fade-in sixth">
        <b-navbar>
          <b-navbar-brand href="#landing">JP</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item class="nav-link" href="#about">About</b-nav-item>
              <b-nav-item class="nav-link" href="#projects">Projects</b-nav-item>
              <b-nav-item class="nav-link" href="#interests">Interests</b-nav-item>
              <b-nav-item class="nav-link" href="#contact">Contact</b-nav-item>
            </b-navbar-nav>

          </b-collapse>
  
        </b-navbar>
      </div>

        <div class="message">
            <div class="fade-move first">Hello, my name is</div>
            <h2 class="fade-move second">Justin Poist</h2>
            <h2 class="fade-move third">I'm a Software Engineering Student at Cal Poly San Luis Obispo.</h2>
            <p class="fade-move fourth">I enjoy solving challenging problems and developing</p>

            <a class="fade-in fifth btn" href="#about">Check out my Work <b-icon-arrow-right></b-icon-arrow-right></a>
        </div>



    </div>


</template>

<script>
import gsap from 'gsap'
export default {
  mounted() {
    // timeline will go here
    let tl = gsap.timeline();
    tl.to('.first', {opacity: 1, x: 50, duration:1.5, ease: 'expo.out'});
    tl.to('.second', {opacity: 1, x: 50, duration:1.5, ease: 'expo.out'});
    tl.to('.third', {opacity: 1, x: 50, duration:1.5, ease: 'expo.out'});
    tl.to('.fourth', {opacity: 1, x: 50,duration:1.5, ease: 'expo.out'});
    tl.to('.fifth', {opacity: 1, duration:1.5, ease: 'expo.out'});
    tl.to('.sixth', {opacity: 1.0, duration:1.5, ease: 'expo.out'}, '<');
  }
}

</script>

<style scoped>
.fade-move{
  opacity: 0;
  width: fit-content;
}

.fade-in{
  opacity: 0;
}

.message{
    margin-top: 20vh;
    margin-left: 0px;
    font-size: 36px;
    text-align: left;
}

.first{
  font-size: 30px;
  color: #def2f1;

}


.second{
  font-size: 70px;
  color: #feffff;

}

.third{
  color: #def2f1;
}

.fourth{
  color: #def2f1;
}

.fifth{
  margin-left: 40px;
  background-color: #2b7a78;
  border: 1px solid #2b7a78;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
}

.fifth:hover{
  background-color: #2b7a78;
}

.fifth:active{
  background-color: #2b7a78;
}

.sixth{
  margin-top: 0;
}

.navbar-light .navbar-nav .nav-link {
  color: #feffff; 
}

.navbar-light .navbar-brand{
  color: #feffff;
}

p{
    margin-top: 40px;
    font-size: 20px;
}

a{
  color: #feffff; 
}

a:hover{
  text-decoration: none;
  color: #feffff;
}

</style>