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
    <Header id="top">JavaScript①</Header>
  </div>
</template>

<style>
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