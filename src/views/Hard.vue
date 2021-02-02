<template>
  <div class="hard">
    <div id="nav">
      <div class="left-nav">
        <v-tabs>
          <v-tab to="/">home</v-tab>
          <v-tab to="/hard">Hard</v-tab>
          <v-tab to="/edit">Edit</v-tab>
        </v-tabs>
      </div>
      <div class="right-nav">
        <v-tabs>
          <v-tab v-scroll-to="'#top'">hard</v-tab>
          <v-tab v-scroll-to="'#hard2'">hard2</v-tab>
          <v-tab v-scroll-to="'#hard3'">hard3</v-tab>
          <v-tab v-scroll-to="'#hard4'">hard4</v-tab>
        </v-tabs>
      </div>
    </div>
    <Header id="top">hard</Header>
      <div id="hard">
        <h2>
          hard
        </h2>
      </div>
      <div id="hard2">
        <h2>
          hard2
        </h2>
      </div>
      <div id="hard3">
        <h2>
          hard3
        </h2>
      </div>
      <div id="hard4">
        <h2>
          hard4
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
#hard,#hard2,#hard3,#hard4{
  height: 500px;
}
</style>

<script>
import Header from "@/components/Header.vue"
export default {
    name: "hard",
    components: {
      Header
    }
  }
</script>