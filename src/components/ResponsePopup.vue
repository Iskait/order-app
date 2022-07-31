<template>
  <div class="self-center border-black border p-4 rounded-md">
    <span v-html="reponseData" class="text-center"></span>
  </div>
  <button
    @click="toggleBack"
    class="absolute top-2 right-5 font-extrabold text-6xl"
  >
    &#10005;
  </button>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      reponseData: (state) => state.responsePopup.responseData,
    }),
  },
  methods: {
    ...mapMutations(["toggleForms", "setVisibleForm"]),
    toggleBack() {
      this.toggleForms();
      this.setVisibleForm();
    }
  },
};
</script>
