<template>
  <div class="self-center border-black border p-4 rounded-md">
    <span v-html="responseData" class="text-center"></span>
  </div>
  <button
    @click="toggleBack"
    class="absolute top-2 right-5 font-extrabold text-6xl"
  >
    &#10005;
  </button>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const responseData = computed(() => store.state.responsePopup.responseData);
const toggleForms = () => store.commit("toggleForms");
const toggleVisibleForm = () => store.commit("toggleVisibleForm");
const toggleBack = () => {
  toggleForms();
  toggleVisibleForm();
};
</script>
