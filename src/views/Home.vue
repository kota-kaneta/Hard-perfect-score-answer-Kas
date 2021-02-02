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
          <v-tab v-scroll-to="'#h2'">home2</v-tab>
          <v-tab v-scroll-to="'#h3'">home3</v-tab>
          <v-tab v-scroll-to="'#h4'">home4</v-tab>
        </v-tabs>
      </div>
    </div>
    <Header id="top">Home</Header>
    <h2>home</h2>
      <div id="home">
      </div>
    <h2 id="h2">home2</h2>
      <div id="home2">
        <rotate-box></rotate-box>
      </div>
    <h2 id="h3">home3</h2>
      <div id="home3">
      </div>
    <h2 id="h4">home4</h2>
      <div id="home4">
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
  display: flex;
  justify-content: center;
}
h2{
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 100px;
}
</style>

<script>
import Header from "@/components/Header.vue"
import RotateBox from "@/components/RotateBox.vue";

export default {
    name: "home",
    components: {
      Header,
      RotateBox
    }
  }
</script>