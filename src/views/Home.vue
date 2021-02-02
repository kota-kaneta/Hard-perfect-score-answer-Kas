<template>
  <div class="cube">
    <div id="nav">
      <div class="left-nav">
        <v-tabs>
          <v-tab to="/">cube</v-tab>
          <v-tab to="/hard">Hard</v-tab>
          <v-tab to="/edit">Edit</v-tab>
        </v-tabs>
      </div>
      <div class="right-nav">
        <v-btn dark color="cyan" v-scroll-to="'#top'">cube1</v-btn>
        <v-btn dark color="cyan" v-scroll-to="'#h2'">cube2</v-btn>
        <v-btn dark color="cyan" v-scroll-to="'#h3'">cube3</v-btn>
        <v-btn dark color="cyan" v-scroll-to="'#h4'">cube4</v-btn>
      </div>
    </div>
    <Header id="top">Cube</Header>
    <h2>cube1</h2>
      <div id="cube">
        <rotate-box></rotate-box>
      </div>
    <h2 id="h2">cube2</h2>
      <div id="cube2">
      </div>
    <h2 id="h3">cube3</h2>
      <div id="cube3">
      </div>
    <h2 id="h4">cube4</h2>
      <div id="cube4">
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
#cube,#cube2,#cube3,#cube4{
  height: 500px;
  display: flex;
  justify-content: center;
}
h2{
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 65px;
}
</style>

<script>
import Header from "@/components/Header.vue"
import RotateBox from "@/components/RotateBox.vue";

export default {
    name: "cube",
    components: {
      Header,
      RotateBox
    }
  }
</script>