<template>
  <b-container>
    <b-row align-v="center">
      <b-col cols="8" class="col-md-auto text-center">
        <b-row  class="clock">
          {{ clock }}
        </b-row>
      </b-col>
      <b-col cols="4" class="col-md-auto text-center">
        <b-row class="seconds">
          {{ seconds }}
        </b-row>
        <b-row class="date">
          {{ day }}
        </b-row>
        <b-row class="date">
          {{ date }}
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
  ];
  const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      clock: "",
      date: "",
      seconds: "",
      day: "",
    }
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow: function() {
      const now = new Date();
      const hours = `${now.getHours() < 10 ? '0' : ''}${now.getHours()}`;
      const minutes = `${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`;
      this.seconds = `${now.getSeconds() < 10 ? '0' : ''}${now.getSeconds()}`;
      this.clock = `${hours}:${minutes}`;
      this.date = `${monthNames[now.getMonth()]} ${now.getDate()}`;
      this.day = days[now.getDay()];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .centered {
    text-align: center;
  }

  .clock {
    font-size: 75pt;
    font-weight: 700;
    border-right: 3pt solid #ffffff;
  }

  .date {
    font-size: 15pt;
    font-weight: 500;
    margin-left: 1pt;
  }

  .seconds {
    font-size: 50pt;
    font-weight: 500;
    margin-left: 1pt;
  }

  .push-down {
    margin-top: 50px;
  }

  .conditions {
    font-size: 140pt;
    margin-top: 30px;
  }

  .wrapper {
    width: 1200px;
    margin: 160px auto;
  }

  .current-temp {
    font-size: 80pt;
  }

  .hilo-temp {
    font-size: 40pt;
  }

  body, a {
    color: #555;
  }

  .sun {
    font-size: 40pt;
  }

  .sun .wi {
    font-size: 70pt;
    margin: 30px 0;
  }

  .img-responsive {
    max-height: 330px;
  }
</style>
