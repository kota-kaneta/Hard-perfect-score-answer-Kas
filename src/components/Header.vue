<template>
    <header>
      <v-card color="basil">
        <v-card-title class="text-center justify-center py-6">
          <h1><slot></slot></h1>
        </v-card-title>
          <v-tabs vertical>
            <v-tab v-scroll-to="'#top'">#1</v-tab>
            <v-tab v-scroll-to="'#h2'">#2</v-tab>
            <v-tab v-scroll-to="'#h3'">#3</v-tab>
            <v-tab v-scroll-to="'#h4'">#4</v-tab>
        </v-tabs>
      </v-card>
    </header>
</template>

<style scoped>
header{
  position: fixed;
  right: 0;
}
</style>

<script>
  export default {
    name: 'Header'
  }
</script>