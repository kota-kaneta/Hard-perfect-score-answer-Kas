<template>
  <v-app>
    <div id="app">
      <div id="nav">
        <v-tabs>
          <v-tab to="/">Home</v-tab>
          <!-- <v-tab to="/new">new</v-tab>
          <v-tab to="/edit">edit</v-tab> -->
        </v-tabs>
      </div>
      <div v-cloak>
        <transition name="fade" mode="out-in">
          <div v-if="center" key="center">
            <div v-on:click="watchLeft">左の画面にいく</div>
            <div v-on:click="watchRight">右の画面にいく</div>
          </div>
             
          <div v-if="left" key="left">
            <p>左の画面</p>
            <div v-on:click="watchCenter">最初の画面に戻る</div>
            <div v-on:click="watchRight">右の画面にいく</div>
          </div>
             
          <div v-if="right" key="right">
            <p>右の画面</p>
            <div v-on:click="watchCenter">最初の画面に戻る</div>
            <div v-on:click="watchLeft">左の画面にいく</div>
          </div>
        </transition>
      </div>
    </div>
  </v-app>
</template>

<style lang="scss">
div.click{
  cursor: pointer;
}
 
[v-cloak] {
  display: none;
}
 
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
 
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  export default({
    el: "#app",
    data() {
      return {
        center: true,
        left: false,
        right: false,
      };
    },
    methods: {
      watchCenter: function () {
        this.center = true;
        this.left = false;
        this.right = false;
      },
      watchLeft: function () {
        this.center = false;
        this.left = true;
        this.right = false;
      },
      watchRight: function () {
        this.center = false;
        this.left = false;
        this.right = true;
      },
    }
  });
</script>
