<template>
  <v-app>
    <div id="app">
      <div id="nav">
        <v-tabs>
          <v-tab><a href="#home4">home</a></v-tab>
        </v-tabs>
      </div>
      <div id="home">
        <a id="home">
          homeです
        </a>
      </div>
      <div id="home2">
        <a id="home2">
          home2です
        </a>
      </div>
      <div id="home3">
        <a id="home3">
          home3です
        </a>
      </div>
      <div id="home4">
        <a id="home4">
          home4です
        </a>
      </div>
    </div>
  </v-app>
</template>

<style lang="scss">
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
