<!-- components/SelectCops.vue -->
<template>
    <div>
      <h2>Select Number of Cops</h2>
      <select v-model="numberOfCops">
        <option value="">Select</option>
        <option v-for="num in maxCops" :key="num">{{ num }}</option>
      </select>
      <button @click="nextStep" :disabled="!numberOfCops">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SelectCops',
    data() {
      return {
        maxCops: 3,
        numberOfCops: ''
      };
    },
    methods: {
        nextStep() {
    if (this.numberOfCops) {
        this.$router.push({ name: 'CitySelection', props: { numberOfCops: this.numberOfCops } });
    } else {
      console.error("Please select the number of cops.");
    }
  }
    }
  };
  </script>
  