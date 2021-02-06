<template>
  <div class="edit">
    <Header id="top">Edit</Header>
      <div id="h1">
        <h2>
          h1
        </h2>
      </div>
      <div id="h2">
        <h2>
          h2
        </h2>
      </div>
      <div id="h3">
        <h2>
          h3
        </h2>
      </div>
      <div id="h4">
        <h2>
          h4
        </h2>
      </div>
  </div>
</template>

<style>
#h,#h2,#h3,#h4{
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