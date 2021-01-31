<template>
  <v-app>
    <div id="app">
      <div id="nav">
        <v-tabs>
          <v-tab to="/">Home</v-tab>
          <!-- <v-tab to="/hard">hard</v-tab>
          <v-tab to="/edit">edit</v-tab> -->
        </v-tabs>
      </div>
      <div v-cloak>
        <transition name="fade" mode="out-in">
          <div v-if="home" key="home">
            home
            <div v-on:click="watchhard">hardへ</div>
            <div v-on:click="watchPerfect">perfectへ</div>
          </div>
             
          <div v-if="hard" key="hard">
            hard
            <div v-on:click="watchHome">homeへ</div>
            <div v-on:click="watchPerfect">perfectへ</div>
          </div>
             
          <div v-if="perfect" key="perfect">
            perfect
            <div v-on:click="watchHome">homeへ</div>
            <div v-on:click="watchhard">hardへ</div>
          </div>
        </transition>
      </div>
    </div>
  </v-app>
</template>

<style lang="scss">
div.click{
  cursor: pointer;
}
 
[v-cloak] {
  display: none;
}
 
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
 
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  export default({
    el: "#app",
    data() {
      return {
        home: true,
        hard: false,
        perfect: false,
      };
    },
    methods: {
      watchHome: function () {
        this.home = true;
        this.hard = false;
        this.perfect = false;
      },
      watchhard: function () {
        this.home = false;
        this.hard = true;
        this.perfect = false;
      },
      watchPerfect: function () {
        this.home = false;
        this.hard = false;
        this.perfect = true;
      },
    }
  });
</script>
