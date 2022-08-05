<template>
  <div class="flex flex-row">
    <p class="mr-3 text-lg font-bold">Ваш город:</p>
    <select @change="chooseCity(+$event.target.value)">
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

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const selectedCity = computed(() => store.state.initPopup.selectedCity);
const cities = computed(() => store.state.initPopup.cities);
const chooseCity = (payload) => store.commit("chooseCity", payload);
</script>
