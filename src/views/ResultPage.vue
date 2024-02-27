<!-- components/ResultPage.vue -->
<template>
    <div>
      <h2>Result</h2>
      <p v-if="capturedCop">The fugitive was captured by Cop {{ capturedCop }}</p>
      <p v-else>The fugitive remains at large.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResultPage',
    props: ['capturedCop'],
  };
  </script>
  