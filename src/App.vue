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
  @import url(http://fonts.googleapis.com/css?family=Ubuntu);
  @import url(http://fonts.googleapis.com/css?family=Lato:400,700);
  @import './assets/css/weather-icons.min.css';
  body {
    font-family: 'Lato', sans-serif;
    font-size: 14pt;
    color: var(--white);
    background-color: var(--dark);

  }
</style>
