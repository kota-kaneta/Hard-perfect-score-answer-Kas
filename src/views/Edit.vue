<template>
  <div class="edit">
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
          <v-tab v-scroll-to="'#top'">edit</v-tab>
          <v-tab v-scroll-to="'#edit2'">edit2</v-tab>
          <v-tab v-scroll-to="'#edit3'">edit3</v-tab>
          <v-tab v-scroll-to="'#edit4'">edit4</v-tab>
        </v-tabs>
      </div>
    </div>
    <Header id="top">edit</Header>
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
#nav{
  position: fixed;
  display: flex;
}
.right-nav{
  position: fixed;
   right: 0;
}
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