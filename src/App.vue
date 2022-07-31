<template>
  <div
    class="min-h-full flex flex-col justify-center items-between relative overflow-hidden"
  >
    <template v-if="showInitForm">
      <transition name="fade">
        <order v-if="!isVisible" />
      </transition>
      <transition name="slide-down">
        <send-form v-if="isVisible" />
      </transition>
    </template>
    <response-popup v-if="!showInitForm"></response-popup>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Order from "./components/Order.vue";
import SendForm from "./components/SendForm.vue";
import ResponsePopup from "./components/ResponsePopup.vue";

export default {
  name: "App",
  components: {
    Order,
    SendForm,
    ResponsePopup
  },
  computed: {
    ...mapState({
      isVisible: (state) => state.initPopup.visibleForm,
      showInitForm: (state) => state.showInitForm,
    }),
  },
};
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
