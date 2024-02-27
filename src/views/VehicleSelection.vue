<!-- components/VehicleSelection.vue -->
<template>
    <div>
      <h2>Select Vehicle for Cop {{ copIndex + 1 }}</h2>
      <select v-model="selectedVehicle" @change="nextStep">
        <option value="">Select Vehicle</option>
        <option v-for="vehicle in vehicles" :key="vehicle.kind" :value="vehicle">{{ vehicle.kind }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VehicleSelection',
    props: ['copIndex', 'numberOfCops'],
    data() {
      return {
        vehicles: [
          { kind: 'EV Bike', range: 60, count: 2 },
          { kind: 'EV Car', range: 100, count: 1 },
          { kind: 'EV SUV', range: 120, count: 1 },
        ],
        selectedVehicle: '',
      };
    },
    methods: {
      nextStep() {
        if (this.selectedVehicle) {
          this.$emit('vehicle-selected', this.selectedVehicle, this.copIndex);
          if (this.copIndex + 1 < this.numberOfCops) {
            // Move to the next cop
            this.$router.push({ name: 'CitySelection', params: { numberOfCops: this.numberOfCops } });
          } else {
            // Move to the result page if all cops have selected vehicles
            this.$router.push('/result');
          }
        }
      },
    },
  };
  </script>
  