<template>
  <div class="home">
    <div id="nav">
      <div class="left-nav">
        <v-tabs>
          <v-tab to="/">Home</v-tab>
          <v-tab to="/hard">Hard</v-tab>
          <v-tab to="/edit">Edit</v-tab>
        </v-tabs>
      </div>
      <div class="right-nav">
        <v-tabs>
          <v-tab v-scroll-to="'#top'">home</v-tab>
          <v-tab v-scroll-to="'#home2'">home2</v-tab>
          <v-tab v-scroll-to="'#home3'">home3</v-tab>
          <v-tab v-scroll-to="'#home4'">home4</v-tab>
        </v-tabs>
      </div>
    </div>
    <Header id="top">Home</Header>
      <div id="home">
        <h2>
          home
        </h2>
      </div>
      <div id="home2">
        <h2>
          home2
        </h2>
      </div>
      <div id="home3">
        <h2>
          home3
        </h2>
      </div>
      <div id="home4">
        <h2>
          home4
        </h2>
      </div>
  </div>
</template>

<style>
#nav{
  position: fixed;
  display: flex;
}
.right-nav{
  position: fixed;
   right: 0;
}
#home,#home2,#home3,#home4{
  height: 500px;
}
</style>

<script>
import Header from "@/components/Header.vue"
export default {
    name: "home",
    components: {
      Header
    }
  }
</script>