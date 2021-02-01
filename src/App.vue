<template>
  <v-app>
    <div id="app">
      <div id="nav">
        <v-tabs>
          <v-tab v-scroll-to="'#home'">home</v-tab>
          <v-tab v-scroll-to="'#home2'">home2</v-tab>
          <v-tab v-scroll-to="'#home3'">home3</v-tab>
          <v-tab v-scroll-to="'#home4'">home4</v-tab>
        </v-tabs>
      </div>
      <div id="home">
        <h2 id="home">
          homeです
        </h2>
      </div>
      <div id="home2">
        <h2 id="home2">
          home2です
        </h2>
      </div>
      <div id="home3">
        <h2 id="home3">
          home3です
        </h2>
      </div>
      <div id="home4">
        <h2 id="home4">
          home4です
        </h2>
      </div>
    </div>
  </v-app>
</template>

<style lang="scss">
#nav{
  display: flex;
}
a{
  text-decoration-line: none;
}
#home,#home2,#home3,#home4{
  height: 500px;
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
