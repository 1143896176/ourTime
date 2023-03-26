<template>
  <section id="about" class="wrapper about accelerate" :class="{hide:!isWarn,show:isWarn}">
    <div class="cell accelerate">
      <div class="cables center accelerate">
        <div class="panel accelerate" style="padding-bottom: 20px">
          <header>
            <h1>提示</h1>
          </header>
          <p></p>
          <p>这里暂时不能看，去看另一个吧！！</p>
          <div class="social">
<!--            这里暂时不能看，去看另一个吧-->
          </div>
<!--          <ul class="links">
            <li><a class="download" href="https://github.com/wagerfield/parallax/archive/master.zip">Download</a></li>
            <li><a class="github" target="_blank" href="https://github.com/wagerfield/parallax">GitHub</a></li>
          </ul>-->
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {ref, watch} from "vue";

const props = defineProps<{
  isWarn:boolean
}>()
const isWarn = ref(false)
const emit = defineEmits(['update:modelValue'])
watch(props,(n)=>{
  console.log(n)
  isWarn.value = n.isWarn

})
</script>

<style scoped>
#about.hide{
  display: none;
  opacity: 0;
}
#about.show{
  display: inline-block;
  opacity: 1;
  animation-duration: 1s;
}

.accelerate {
  -webkit-transform: translate3d(0,0,0);
  -moz-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden; }

.center {
  max-width: 600px;
  margin: 0 auto;
  width: 88%; }

.wrapper {
  min-height: 460px;
  position: absolute;
  overflow: hidden;
  display: table;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0; }

.cell {
  vertical-align: middle;
  display: table-cell; }

.panel {
  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
  -webkit-transform: translate3d(0,0,0);
  -moz-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  position: relative; }

.about {
  -webkit-font-smoothing: auto;
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  perspective: 1000px;
  color: #666666; }
.about.hide{    display: none;
}
.about:after {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
  background-image: -moz-linear-gradient(top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
  background-image: linear-gradient(top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
  position: absolute;
  display: block;
  width: 100%;
  content: "";
  height: 5%;
  left: 0;
  top: 0; }
.about.hide .cables {
  -webkit-transform: translate3d(0,-10%,0) rotateX(-90deg);
  -moz-transform: translate3d(0,-10%,0) rotateX(-90deg);
  transform: translate3d(0,-10%,0) rotateX(-90deg);
  opacity: 0; }
.about.hide .panel {
  -webkit-transform: rotateX(-20deg);
  -moz-transform: rotateX(-20deg);
  transform: rotateX(-20deg); }
.about .panel,
.about .cables {
  -webkit-transform: translate3d(0,0,0);
  -moz-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
  position: relative; }
.about .cables {
  -webkit-transform-origin: 50% -100%;
  -moz-transform-origin: 50% -100%;
  transform-origin: 50% -100%; }
.about .cables:before {
  left: 10%;
  background: transparent url(@/assets/images/borad/cable.png) 0 0 no-repeat;
  background-size: 100% auto;

  position: absolute;
  display: block;
  height: 860px;
  width: 30px;
  content: "";
  top: -837px;
  z-index: 1; }
.about .cables:after {
  right: 10%;
  background: transparent url(@/assets/images/borad/cable.png) 0 0 no-repeat;
  background-size: 100% auto;

  position: absolute;
  display: block;
  height: 860px;
  width: 30px;
  content: "";
  top: -837px;
  z-index: 1; }
.about .panel {
  -webkit-transform-origin: 50% 0%;
  -moz-transform-origin: 50% 0%;
  transform-origin: 50% 0%;
  background: #F2F2F2 url(@/assets/images/borad/panel.jpg) -7px 0;
  background-size: 399px 357px; }
.about .panel:before {
  border-left: 1px dashed rgba(29, 31, 39, 0.2);
  position: absolute;
  display: block;
  height: 100%;
  content: "";
  left: 5%;
  top: 0; }
.about .panel:after {
  -webkit-border-radius: 0 0 6px 0;
  -moz-border-radius: 0 0 6px 0;
  border-radius: 0 0 6px 0;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
  background: transparent url(@/assets/images/borad/compass.png) 0 0 no-repeat;
  background-size: 224px 224px;
  position: absolute;
  display: block;
  height: 160px;
  width: 120px;
  opacity: 0.2;
  content: "";
  bottom: 0;
  right: 0; }
.about .panel header {
  padding: 1em 0 1em; }
.about .panel header:before {
  -webkit-border-radius: 6px 0 0 0;
  -moz-border-radius: 6px 0 0 0;
  border-radius: 6px 0 0 0;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
  background: transparent url(@/assets/images/borad/map.png) 0 0 no-repeat;
  background-size: 60.5px 82.5px;
  position: absolute;
  display: block;
  height: 150px;
  width: 110px;
  opacity: 0.8;
  content: "";
  left: 0;
  top: 0; }
.about .panel h1 {
  font-weight: 100;
  color: #D92400; }
.about .panel h1 em {
  color: #1D1F27; }
.about .panel p {
  margin: 0 8% 1.2em;
  position: relative;
  z-index: 1; }
.about .panel p strong {
  font-weight: 700;
  color: #1D1F27; }
.about .panel .social {
  margin: 1.4em 0 1em;
  position: relative;
  z-index: 1; }
.about .panel .twitter-follow-button {
  display: inline-block;
  margin-bottom: 0.8em; }
.about .panel .twitter-follow-button + .twitter-follow-button {
  margin-left: 0.4em; }
.about .panel .links {
  zoom: 1;
  -webkit-box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1; }
.about .panel .links:after, .about .panel .links:before {
  display: table;
  content: ""; }
.about .panel .links:after {
  clear: both; }
.about .panel .links li {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  float: left;
  width: 50%; }
.about .panel .links li a {
  -webkit-border-radius: 0 0 0 5px;
  -moz-border-radius: 0 0 0 5px;
  border-radius: 0 0 0 5px;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box; }
.about .panel .links li + li {
  border-left: 1px solid rgba(0, 0, 0, 0.2); }
.about .panel .links li + li a {
  -webkit-border-radius: 0 0 5px 0;
  -moz-border-radius: 0 0 5px 0;
  border-radius: 0 0 5px 0;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box; }
.about .panel .links a {
  -webkit-font-smoothing: antialiased;
  font-size: 1.33333em;
  font-family: "Dosis", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  padding: 1em 0 1.1em;
  display: block; }
.about .panel .links a.github:before, .about .panel .links a.download:before {
  content: "";
  font-family: "icons";
  text-transform: none;
  font-weight: normal;
  font-style: normal;
  line-height: 1em;
  font-size: 0.8em;
  margin-right: 0.5em;
  margin-left: -0.8em;
  position: relative;
  top: -1px; }
.about .panel .links a.download:before {
  content: "d"; }
.about .panel .links a.github:before {
  margin-right: 0.4em;
  content: "g"; }

.toggle {
  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  margin: -24px;
  position: absolute;
  bottom: 11.6%;
  left: 50%; }
.toggle.i .cross {
  -webkit-transform: rotateZ(0deg);
  -moz-transform: rotateZ(0deg);
  transform: rotateZ(0deg); }
.toggle.i .cross .x {
  margin-left: -2px;
  width: 4px;
  margin-top: -12px; }
.toggle.i .cross .y {
  margin-top: -4px;
  height: 16px; }

.cross {
  -webkit-transform: rotateZ(45deg);
  -moz-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
  position: absolute;
  left: 50%;
  top: 50%; }
.cross .x, .cross .y {
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
  background-color: #1D1F27;
  height: 4px;
  width: 4px;
  margin: -2px;
  position: absolute;
  left: 0;
  top: 0; }
.cross .x {
  margin-left: -12px;
  margin-top: -2px;
  width: 24px; }
.cross .y {
  margin-top: -12px;
  height: 24px; }

@-webkit-keyframes phase {
  0% {
    opacity: 1; }
  25% {
    opacity: 0.4; }
  50% {
    opacity: 0.8; }
  75% {
    opacity: 0.4; }
  100% {
    opacity: 1; } }
@-moz-keyframes phase {
  0% {
    opacity: 1; }
  25% {
    opacity: 0.4; }
  50% {
    opacity: 0.8; }
  75% {
    opacity: 0.4; }
  100% {
    opacity: 1; } }
@-ms-keyframes phase {
  0% {
    opacity: 1; }
  25% {
    opacity: 0.4; }
  50% {
    opacity: 0.8; }
  75% {
    opacity: 0.4; }
  100% {
    opacity: 1; } }
@keyframes phase {
  0% {
    opacity: 1; }
  25% {
    opacity: 0.4; }
  50% {
    opacity: 0.8; }
  75% {
    opacity: 0.4; }
  100% {
    opacity: 1; } }
@-webkit-keyframes tilt {
  0% {
    -webkit-transform: rotateX(-30deg);
    -moz-transform: rotateX(-30deg);
    transform: rotateX(-30deg); }
  25% {
    -webkit-transform: rotateX( 30deg);
    -moz-transform: rotateX( 30deg);
    transform: rotateX( 30deg); }
  50% {
    -webkit-transform: rotateY(-30deg);
    -moz-transform: rotateY(-30deg);
    transform: rotateY(-30deg); }
  75% {
    -webkit-transform: rotateY( 30deg);
    -moz-transform: rotateY( 30deg);
    transform: rotateY( 30deg); }
  100% {
    -webkit-transform: rotateZ( 20deg);
    -moz-transform: rotateZ( 20deg);
    transform: rotateZ( 20deg); } }
@-moz-keyframes tilt {
  0% {
    -webkit-transform: rotateX(-30deg);
    -moz-transform: rotateX(-30deg);
    transform: rotateX(-30deg); }
  25% {
    -webkit-transform: rotateX( 30deg);
    -moz-transform: rotateX( 30deg);
    transform: rotateX( 30deg); }
  50% {
    -webkit-transform: rotateY(-30deg);
    -moz-transform: rotateY(-30deg);
    transform: rotateY(-30deg); }
  75% {
    -webkit-transform: rotateY( 30deg);
    -moz-transform: rotateY( 30deg);
    transform: rotateY( 30deg); }
  100% {
    -webkit-transform: rotateZ( 20deg);
    -moz-transform: rotateZ( 20deg);
    transform: rotateZ( 20deg); } }
@-ms-keyframes tilt {
  0% {
    -webkit-transform: rotateX(-30deg);
    -moz-transform: rotateX(-30deg);
    transform: rotateX(-30deg); }
  25% {
    -webkit-transform: rotateX( 30deg);
    -moz-transform: rotateX( 30deg);
    transform: rotateX( 30deg); }
  50% {
    -webkit-transform: rotateY(-30deg);
    -moz-transform: rotateY(-30deg);
    transform: rotateY(-30deg); }
  75% {
    -webkit-transform: rotateY( 30deg);
    -moz-transform: rotateY( 30deg);
    transform: rotateY( 30deg); }
  100% {
    -webkit-transform: rotateZ( 20deg);
    -moz-transform: rotateZ( 20deg);
    transform: rotateZ( 20deg); } }
@keyframes tilt {
  0% {
    -webkit-transform: rotateX(-30deg);
    -moz-transform: rotateX(-30deg);
    transform: rotateX(-30deg); }
  25% {
    -webkit-transform: rotateX( 30deg);
    -moz-transform: rotateX( 30deg);
    transform: rotateX( 30deg); }
  50% {
    -webkit-transform: rotateY(-30deg);
    -moz-transform: rotateY(-30deg);
    transform: rotateY(-30deg); }
  75% {
    -webkit-transform: rotateY( 30deg);
    -moz-transform: rotateY( 30deg);
    transform: rotateY( 30deg); }
  100% {
    -webkit-transform: rotateZ( 20deg);
    -moz-transform: rotateZ( 20deg);
    transform: rotateZ( 20deg); } }
@-webkit-keyframes wave {
  0% {
    -webkit-transform: rotateZ(0deg) translate3d(0,10%,0) rotateZ(0deg);
    -moz-transform: rotateZ(0deg) translate3d(0,10%,0) rotateZ(0deg);
    transform: rotateZ(0deg) translate3d(0,10%,0) rotateZ(0deg); }
  100% {
    -webkit-transform: rotateZ(360deg) translate3d(0,10%,0) rotateZ(-360deg);
    -moz-transform: rotateZ(360deg) translate3d(0,10%,0) rotateZ(-360deg);
    transform: rotateZ(360deg) translate3d(0,10%,0) rotateZ(-360deg); } }
@-moz-keyframes wave {
  0% {
    -webkit-transform: rotateZ(0deg) translate3d(0,10%,0) rotateZ(0deg);
    -moz-transform: rotateZ(0deg) translate3d(0,10%,0) rotateZ(0deg);
    transform: rotateZ(0deg) translate3d(0,10%,0) rotateZ(0deg); }
  100% {
    -webkit-transform: rotateZ(360deg) translate3d(0,10%,0) rotateZ(-360deg);
    -moz-transform: rotateZ(360deg) translate3d(0,10%,0) rotateZ(-360deg);
    transform: rotateZ(360deg) translate3d(0,10%,0) rotateZ(-360deg); } }
@-ms-keyframes wave {
  0% {
    -webkit-transform: rotateZ(0deg) translate3d(0,10%,0) rotateZ(0deg);
    -moz-transform: rotateZ(0deg) translate3d(0,10%,0) rotateZ(0deg);
    transform: rotateZ(0deg) translate3d(0,10%,0) rotateZ(0deg); }
  100% {
    -webkit-transform: rotateZ(360deg) translate3d(0,10%,0) rotateZ(-360deg);
    -moz-transform: rotateZ(360deg) translate3d(0,10%,0) rotateZ(-360deg);
    transform: rotateZ(360deg) translate3d(0,10%,0) rotateZ(-360deg); } }
@keyframes wave {
  0% {
    -webkit-transform: rotateZ(0deg) translate3d(0,10%,0) rotateZ(0deg);
    -moz-transform: rotateZ(0deg) translate3d(0,10%,0) rotateZ(0deg);
    transform: rotateZ(0deg) translate3d(0,10%,0) rotateZ(0deg); }
  100% {
    -webkit-transform: rotateZ(360deg) translate3d(0,10%,0) rotateZ(-360deg);
    -moz-transform: rotateZ(360deg) translate3d(0,10%,0) rotateZ(-360deg);
    transform: rotateZ(360deg) translate3d(0,10%,0) rotateZ(-360deg); } }
@-webkit-keyframes lighthouse {
  0% {
    -webkit-transform: translate3d(15%,0,0) rotateZ(10deg);
    -moz-transform: translate3d(15%,0,0) rotateZ(10deg);
    transform: translate3d(15%,0,0) rotateZ(10deg); }
  100% {
    -webkit-transform: translate3d(-15%,0,0) rotateZ(-10deg);
    -moz-transform: translate3d(-15%,0,0) rotateZ(-10deg);
    transform: translate3d(-15%,0,0) rotateZ(-10deg); } }
@-moz-keyframes lighthouse {
  0% {
    -webkit-transform: translate3d(15%,0,0) rotateZ(10deg);
    -moz-transform: translate3d(15%,0,0) rotateZ(10deg);
    transform: translate3d(15%,0,0) rotateZ(10deg); }
  100% {
    -webkit-transform: translate3d(-15%,0,0) rotateZ(-10deg);
    -moz-transform: translate3d(-15%,0,0) rotateZ(-10deg);
    transform: translate3d(-15%,0,0) rotateZ(-10deg); } }
@-ms-keyframes lighthouse {
  0% {
    -webkit-transform: translate3d(15%,0,0) rotateZ(10deg);
    -moz-transform: translate3d(15%,0,0) rotateZ(10deg);
    transform: translate3d(15%,0,0) rotateZ(10deg); }
  100% {
    -webkit-transform: translate3d(-15%,0,0) rotateZ(-10deg);
    -moz-transform: translate3d(-15%,0,0) rotateZ(-10deg);
    transform: translate3d(-15%,0,0) rotateZ(-10deg); } }
@keyframes lighthouse {
  0% {
    -webkit-transform: translate3d(15%,0,0) rotateZ(10deg);
    -moz-transform: translate3d(15%,0,0) rotateZ(10deg);
    transform: translate3d(15%,0,0) rotateZ(10deg); }
  100% {
    -webkit-transform: translate3d(-15%,0,0) rotateZ(-10deg);
    -moz-transform: translate3d(-15%,0,0) rotateZ(-10deg);
    transform: translate3d(-15%,0,0) rotateZ(-10deg); } }
@-webkit-keyframes swing {
  0% {
    -webkit-transform: rotateZ(10deg);
    -moz-transform: rotateZ(10deg);
    transform: rotateZ(10deg); }
  100% {
    -webkit-transform: rotateZ(-10deg);
    -moz-transform: rotateZ(-10deg);
    transform: rotateZ(-10deg); } }
@-moz-keyframes swing {
  0% {
    -webkit-transform: rotateZ(10deg);
    -moz-transform: rotateZ(10deg);
    transform: rotateZ(10deg); }
  100% {
    -webkit-transform: rotateZ(-10deg);
    -moz-transform: rotateZ(-10deg);
    transform: rotateZ(-10deg); } }
@-ms-keyframes swing {
  0% {
    -webkit-transform: rotateZ(10deg);
    -moz-transform: rotateZ(10deg);
    transform: rotateZ(10deg); }
  100% {
    -webkit-transform: rotateZ(-10deg);
    -moz-transform: rotateZ(-10deg);
    transform: rotateZ(-10deg); } }
@keyframes swing {
  0% {
    -webkit-transform: rotateZ(10deg);
    -moz-transform: rotateZ(10deg);
    transform: rotateZ(10deg); }
  100% {
    -webkit-transform: rotateZ(-10deg);
    -moz-transform: rotateZ(-10deg);
    transform: rotateZ(-10deg); } }

.about .panel, .about .cables {
  -webkit-transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1);
  -moz-transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1);
  transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1);
}

.accelerate {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
}
</style>