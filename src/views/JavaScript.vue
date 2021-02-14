<template>
  <div id="JavaScript">
    <Header id="top">JavaScript</Header>
    <h2>#1-1</h2>
      <div class="random">
        {{random}}
      </div>
    <h2 id="h2">JavaScript2</h2>
      <div id="JavaScript2">
      </div>
    <h2 id="h3">JavaScript3</h2>
      <div id="JavaScript3">
      </div>
    <h2 id="h4">JavaScript4</h2>
      <div id="JavaScript4">
      </div>
  </div>
</template>

<style>
.title{
  display: flex;
  justify-content: center;
}
.random{
  font-size: 100px;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>

<script>
import Header from "@/components/Header.vue"
export default {
    name: "JavaScript",
    components: {
      Header
    },
    data: function(){
      return{
        random: Math.random()
      }
    }
  }
</script>