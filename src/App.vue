<template>
  <v-app>
    <div id="app">
      <div class="left-nav">
        <v-tabs>
          <v-tab to="/">Cube</v-tab>
          <v-tab to="/hard">Hard</v-tab>
          <v-tab to="/edit">Edit</v-tab>
        </v-tabs>
      </div>
      <router-view />
    </div>
  </v-app>
</template>

<style lang="scss">
#app{
  font-family:Georgia, 'Times New Roman', Times, serif;
}
a{
  text-decoration-line: none;
}
.left-nav{
  position: fixed;
}
</style>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  export default({
    el: "#app"
  });
</script>
