<template>
  <div class="edit">
      <div class="right-nav">
        <v-tabs>
          <v-tab v-scroll-to="'#top'">edit1</v-tab>
          <v-tab v-scroll-to="'#edit2'">edit2</v-tab>
          <v-tab v-scroll-to="'#edit3'">edit3</v-tab>
          <v-tab v-scroll-to="'#edit4'">edit4</v-tab>
        </v-tabs>
      </div>
    <Header id="top">Edit</Header>
      <div id="edit">
        <h2>
          edit
        </h2>
      </div>
      <div id="edit2">
        <h2>
          edit2
        </h2>
      </div>
      <div id="edit3">
        <h2>
          edit3
        </h2>
      </div>
      <div id="edit4">
        <h2>
          edit4
        </h2>
      </div>
  </div>
</template>

<style>
#edit,#edit2,#edit3,#edit4{
  height: 500px;
}
</style>

<script>
import Header from "@/components/Header.vue"
export default {
    name: "edit",
    components: {
      Header
    }
  }
</script>