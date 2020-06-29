<template>
  <Display/>
</template>

<script>
import Display from './components/Display.vue'

export default {
  name: 'App',
  components: {
    Display
  }
}
</script>

<style>
  @import url(https://fonts.googleapis.com/css2?family=MuseoModerno:wght@500);
  @import './assets/css/weather-icons.min.css';
  body {
    font-family: 'MuseoModerno', 'sans-serif';
    font-size: 14pt;
    color: var(--white);
    background-color: var(--dark);
  }
</style>
