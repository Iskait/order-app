<template>
  <div
    class="min-h-full flex flex-col justify-center items-between relative overflow-hidden"
  >
    <template v-if="showInitForm">
      <transition name="fade">
        <Order v-if="!isVisible" />
      </transition>
      <transition name="slide-down">
        <SendForm v-if="isVisible" />
      </transition>
    </template>
    <ResponsePopup v-if="!showInitForm" />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import Order from "./components/Order.vue";
import SendForm from "./components/SendForm.vue";
import ResponsePopup from "./components/ResponsePopup.vue";

const store = useStore();
const isVisible = computed(() => store.state.initPopup.visibleForm);
const showInitForm = computed(() => store.state.showInitForm);
</script>
<style>
.fade-enter-active {
  transition: all 0.3s;
}

.fade-leave-active {
  transition: all 0.8s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-700px);
  opacity: 0.4;
}
</style>
