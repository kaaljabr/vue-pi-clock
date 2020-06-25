<template>
  <b-container>
    <b-row align-v="center">
      <b-col cols="9" class="col-md-auto text-center">
        <b-row  class="clock">
          {{ clock }}
        </b-row>
      </b-col>
      <b-col cols="3" class="col-md-auto text-center">
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
    <b-row align-v="center" class="prayers">
      <b-col class="col-md-auto text-center">
        <b-row align-h="center">
          <i class="wi wi-sunrise"></i>
        </b-row>
        <b-row align-h="center">
          <div>Fajr</div>
        </b-row>
        <b-row align-h="center">
          <div>{{ fajr }}</div>
        </b-row>
      </b-col>
      <b-col class="col-md-auto text-center">
        <b-row align-h="center">
          <i class="wi wi-day-sunny"></i>
        </b-row>
        <b-row align-h="center">
          <div>Duhr</div>
        </b-row>
        <b-row align-h="center">
          <div>{{ duhr }}</div>
        </b-row>
      </b-col>
      <b-col class="col-md-auto text-center">
        <b-row align-h="center">
          <i class="wi wi-day-haze"></i>
        </b-row>
        <b-row align-h="center">
          <div>Asr</div>
        </b-row>
        <b-row align-h="center">
          <div>{{ asr }}</div>
        </b-row>
      </b-col>
      <b-col class="col-md-auto text-center">
        <b-row align-h="center">
          <i class="wi wi-sunrise"></i>
        </b-row>
        <b-row align-h="center">
          <div>Maghreb</div>
        </b-row>
        <b-row align-h="center">
          <div>{{ maghreb }}</div>
        </b-row>
      </b-col>
      <b-col class="col-md-auto text-center">
        <b-row align-h="center">
          <i class="wi wi-night-clear"></i>
        </b-row>
        <b-row align-h="center">
          <div>Isha</div>
        </b-row>
        <b-row align-h="center">
          <div>{{ isha }}</div>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import AthanService from '@/services/AthanService';
  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
  ];
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
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
      fajr: "",
      duhr: "",
      asr: "",
      maghreb: "",
      isha: "",
    }
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  mounted() {
    this.getAthanTimings();
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
    },
    getAthanTimings: async function() {
      const timings = await AthanService.getAthanTimings();
      this.fajr = timings.fajr;
      this.duhr = timings.duhr;
      this.asr = timings.asr;
      this.maghreb = timings.maghreb;
      this.isha = timings.isha;
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
    font-size: 100pt;
    font-weight: 700;
    border-right: 3pt solid #ffffff;
  }

  .date {
    font-size: 15pt;
    font-weight: 700;
    margin-left: 1pt;
  }

  .seconds {
    font-size: 45pt;
    font-weight: 500;
    margin-left: 1pt;
  }

  .prayers {
    margin-top: 25pt;
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
