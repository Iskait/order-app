<template>
  <div class="flex flex-row">
  <p class="mr-3 text-lg font-bold">Ваш город: </p>
  <select
  @change="chooseCity(+$event.target.value)">
    <option 
    v-for="city in cities" 
    :key="city.id" 
    :value="city.id"
    :selected="city.id === selectedCity"
    >
      {{ city.name }}
    </option>
  </select>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      selectedCity: (state) => state.initPopup.selectedCity,
      cities: (state) => state.initPopup.cities,
    })
  },
  methods: {
    ...mapMutations(['chooseCity']),
  }
};
</script>
