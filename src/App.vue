<template>
  <div id="app">
    <h1>Edge of the Empire Bounty Generator</h1>
    <h2>Click "Generate" to get a new bounty!</h2>
    <button @click="roll">Roll d20</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
  },
  methods: {
    generate () {
      return this.$store.commit('generate')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
