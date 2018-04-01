<template>
  <div id="app">
    <h1>{{ count }}</h1>
    <button @click="increment">Add</button>
    <button @click="roll">Roll d20</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      return this.$store.commit('increment')
    },
    roll () {
      return this.$store.commit('roll')
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
