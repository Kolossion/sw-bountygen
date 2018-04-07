<template>
  <div id="app">
    <h1>Edge of the Empire Bounty Generator</h1>
    <h1>{{ test }}</h1>
    <h2>Click "Generate" to get a new bounty!</h2>
    <button @click="generate">Generate Bounty</button>
    <section v-if="bounty">
      <h2>Bounty Posted By: {{ bounty.agent }}</h2>
      <h3>
        Offering {{bounty.value}}Cr
        <span v-if="bounty.deadOrAlive">(or {{bounty.value - 3000}}Cr dead)</span>
        for the retrieval of a(n) {{bounty.target}} for the indisgression of {{ bounty.reason }}.
      </h3>
      <p>The target is to be {{ bounty.condition }}.</p>
      <p>Caution: Target is {{ bounty.threat }}</p>
    </section>
    <button @click="toggleGmInfo" v-if="bounty">GM Information</button>
    <section v-if="gmInfo">
      <p>Information Level - {{ bounty.information }}</p>
      <p>Complication - {{ bounty.complication }}</p>
    </section>

  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    bounty () {
      return this.$store.state.bounty
    },
    gmInfo () {
      return this.$store.state.showGmInfo
    }
  },
  methods: {
    generate () {
      return this.$store.commit('generate')
    },
    toggleGmInfo () {
      return this.$store.commit('toggleGmInfo')
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
