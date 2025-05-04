<script setup>
import './input.css'; 

// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template >
  <div id="app">
    <router-view />
  </div>
</template>

<style scoped>
    body {
      min-height: 100vh;
      color: var(--color-text);
      background: #ffffff !important;
      transition: color 0.5s, background-color 0.5s;
      line-height: 1.6;
      font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      font-size: 15px;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
</style>