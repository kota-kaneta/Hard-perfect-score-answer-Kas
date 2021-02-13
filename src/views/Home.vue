<template>
  <div class="cube">
    <Header id="top">Cube</Header>
    <h2>cube1</h2>
      <div id="cube">
        <rotate-box></rotate-box>
      </div>
    <h2 id="h2">cube2</h2>
      <div id="cube2">
        <v-btn color="red" class="cube2-btn" @click="cube2==true">click!!</v-btn>
      </div>
      <div v-show="cube2==true">
        <div class="cube2-after">
          kataino
        </div>
        <v-btn color="red" class="cube2-btn" @click="cube2==false">close</v-btn>
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
.cube2-btn{
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
    },
    data: {
      cube2: false
    }
  }
</script>