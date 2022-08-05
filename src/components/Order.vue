<template>
  <transition name="slide-fade">
    <div class="flex justify-around">
      <OrderButton v-for="(city, index) in cities" @click="takeOrder(index)">
        {{ city }}
      </OrderButton>
    </div>
  </transition>
</template>

<script setup>
import OrderButton from "./OrderButton.vue";
import { useStore } from "vuex";

const store = useStore();
const cities = ["Москву", "Санкт-Петербург"];
const toggleVisibleForm = () => store.commit("toggleVisibleForm");
const chooseCity = (payload) => store.commit("chooseCity", payload);
const takeOrder = (index) => {
  toggleVisibleForm();
  chooseCity(index + 1);
};
</script>
