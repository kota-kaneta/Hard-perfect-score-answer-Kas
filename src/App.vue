<template>
  <v-app>
    <div id="app">
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
</style>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  export default({
    el: "#app"
  });
</script>
