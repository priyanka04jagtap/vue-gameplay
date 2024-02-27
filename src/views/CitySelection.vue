<template>
    <div>
      <h2>Select City for Cop {{ copIndex + 1 }}</h2>
      <select v-model="selectedCity" @change="nextStep">
        <option value="">Select City</option>
        <option v-for="city in cities" :key="city.name" :value="city.name">{{ city.name }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CitySelection',
    props: ['numberOfCops'],
    data() {
      return {
        cities: [
          { name: 'Yapkashnagar', distance: 60 },
          { name: 'Lihaspur', distance: 50 },
          { name: 'Narmis City', distance: 40 },
          { name: 'Shekharvati', distance: 30 },
          { name: 'Nuravgram', distance: 20 },
        ],
        selectedCity: '',
        copIndex: 0
      };
    },
    methods: {
      nextStep() {
        if (this.selectedCity) {
          this.$emit('city-selected', this.selectedCity, this.copIndex);
          if (this.copIndex + 1 < this.numberOfCops) {
            // Move to the next cop
            this.copIndex++;
          } else {
            // Move to the next step if all cops have selected cities
            this.$router.push('/vehicle-selection');
          }
        }
      },
    },
  };
  </script>
  