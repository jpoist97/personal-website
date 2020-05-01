<template>
  
    <div id="vanta-background">

        <div class="message" data-aos="fade">
            <div class="text">Hey, I'm Justin Poist.</div>
            <div class="text">A Software Engineering Student at Cal Poly SLO!</div>
        </div>

    </div>


</template>

<script>
import Vanta from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
export default {
mounted() {
  this.vantaEffect = Vanta({
    el: "#vanta-background",
    mouseControls: false,
    touchControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x333333,
    backgroundColor: 0x23153c,
    THREE
  });
}
}
</script>

<style scoped>
.message{
    width: fit-content;
    height: fit-content;
    margin: 40vh auto;
    color: #eeeeee;
    font-size: 36px;
}
</style>