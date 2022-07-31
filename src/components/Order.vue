<template>
  <transition name="slide-fade">
    <div class="flex justify-around">
      <order-button
      v-for="(city, index) in cities"
      @click="takeOrder(index)">{{ city }}</order-button>
    </div>
  </transition>
</template>

<script>
import OrderButton from './OrderButton.vue';
import { mapMutations } from 'vuex';
export default {
  components: {
    OrderButton,
    },
    data() {
      return {
        cities: ['Москву', 'Санкт-Петербург']
      }
    },
    methods: {
      ...mapMutations([
        'setVisibleForm',
        'chooseCity',
    ]),
    takeOrder(index) {
      this.setVisibleForm();
      this.chooseCity(index+1);
    }
  }
}

</script>
