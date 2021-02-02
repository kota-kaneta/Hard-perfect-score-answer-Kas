<template>
    <header>
        <h1><slot></slot></h1>
    </header>
</template>

<style scoped>
header{
  display: flex;
  justify-content: center;
  padding: 80px 0;
}
</style>

<script>
  export default {
    name: 'Header'
  }
</script>