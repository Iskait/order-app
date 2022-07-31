<template>
    <div class="flex items-center absolute right-0 left-0 top-0 bottom-0">
      <form
        @submit.prevent="send"
        class="h-[400px] pb-8 mx-auto my-auto border-2 border-black rounded-md flex flex-col items-center justify-between w-2/5 bg-slate-300">
        <p class="p-2 text-center text-3xl bg-gradient-to-r from-cyan-500 to-blue-500 w-full">
          Оставьте данные для <br />
          заказа
        </p>
        <Cities></Cities>
        <input-data
        :field="name"/>
        <input-data
        :field="email"/>
        <div
        class="w-2/3 relative">
          <input
          class="p-2 rounded-md w-full"
          type="text"
          :placeholder="phone.placeholder"
          :value="phone.value"
          v-imask="mask"
          @accept="onAccept"
          @complete="onComplete"
        />
        <p v-if="!phone.filled" class="text-red-700 absolute top-2 right-2">Заполните это поле</p>
        </div> 
        <button class="bg-blue-500 w-2/6 p-3 rounded-lg text-lg" type="submit">
          Оформить заказ
        </button>
      </form>
      <button
      @click="setVisibleForm"
      class="absolute top-2 right-5 font-extrabold text-6xl"
      >&#10005;</button>
    </div>
</template>

<script>

import { IMaskDirective } from "vue-imask";
import useSendData from "@/hooks/useSendData";
import useRequiredFields from "@/hooks/useRequiredFields";
import useClear from '@/hooks/useClear';
import Cities from "./Cities.vue";
import InputData from './InputData.vue';
import { mapMutations, mapState } from "vuex";

export default {
  components: { Cities, InputData },
  setup() {
    return {
      useSendData,
      useRequiredFields,
      useClear
    };
  },
  data() {
    return {
      name: {
        placeholder: 'Введите ваше имя', value: '', filled: true
        },
      email: {
        placeholder: 'Введите ваш email', value: '', filled: true
        },
      phone: {
        placeholder: 'Введите ваш номер телефона', value: '', filled: true
        },
      mask: {
        mask: "{+7} (000) 000-00-00",
        lazy: true,
      },
    };
  },
  computed: {
      ...mapState({
      selectedCity: (state) => state.initPopup.selectedCity,
    }),
  },
  methods: {
    ...mapMutations(['setVisibleForm', 'getResponseData', 'toggleForms']),
    onAccept(e) {
      const maskRef = e.detail;
      this.phone.value = maskRef.value;
    },
    onComplete(e) {
      const maskRef = e.detail;
    },
    send() {
      if (useRequiredFields(this.name, this.email, this.phone)) {
        useSendData({
          name: this.name.value,
          phone: this.phone.value.replace(/[() -]/g, ''),
          email: this.email.value,
          city_id: this.selectedCity,
        }).then(res=> this.getResponseData(res.data));
        useClear(this.name, this.email, this.phone);
        this.toggleForms();
      } 
    },
  },
  directives: {
    imask: IMaskDirective,
  },
};

</script>
