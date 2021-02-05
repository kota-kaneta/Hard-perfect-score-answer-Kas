<template>
  <div class="hard">
      <div class="right-nav">
        <v-tabs>
          <v-tab v-scroll-to="'#top'">hard1</v-tab>
          <v-tab v-scroll-to="'#hard2'">hard2</v-tab>
          <v-tab v-scroll-to="'#hard3'">hard3</v-tab>
          <v-tab v-scroll-to="'#hard4'">hard4</v-tab>
        </v-tabs>
      </div>
    <Header id="top">Hard</Header>
      <div id="hard">
        <h2>hard1</h2>
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