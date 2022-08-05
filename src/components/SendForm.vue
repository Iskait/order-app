<template>
  <div class="flex items-center absolute right-0 left-0 top-0 bottom-0">
    <form
      @submit.prevent="handleSubmitForm"
      class="h-[400px] pb-8 mx-auto my-auto border-2 border-black rounded-md flex flex-col items-center justify-between w-2/5 bg-slate-300"
    >
      <p
        class="p-2 text-center text-3xl bg-gradient-to-r from-cyan-500 to-blue-500 w-full"
      >
        Оставьте данные для <br />
        заказа
      </p>
      <Cities />
      <InputData :field="name" />
      <InputData :field="email" />
      <div class="w-2/3 relative">
        <input
          class="p-2 rounded-md w-full"
          type="text"
          :placeholder="phone.placeholder"
          :value="phone.value"
          v-i-mask-directive="mask"
          @accept="onAccept"
          @complete="onComplete"
        />
        <p v-if="!phone.filled" class="text-red-700 absolute top-2 right-2">
          Заполните это поле
        </p>
      </div>
      <button class="bg-blue-500 w-2/6 p-3 rounded-lg text-lg" type="submit">
        Оформить заказ
      </button>
    </form>
    <button
      @click="toggleVisibleForm"
      class="absolute top-2 right-5 font-extrabold text-6xl"
    >
      &#10005;
    </button>
  </div>
</template>

<script setup>
import { IMaskDirective as vIMaskDirective } from "vue-imask";
import useSendData from "@/hooks/useSendData";
import useRequiredFields from "@/hooks/useRequiredFields";
import useClear from "@/hooks/useClear";
import Cities from "./Cities.vue";
import InputData from "./InputData.vue";
import { useStore } from "vuex";
import { computed, ref } from "vue";

const store = useStore();
const name = ref({
  placeholder: "Введите ваше имя",
  value: "",
  filled: true,
});
const email = ref({
  placeholder: "Введите ваш email",
  value: "",
  filled: true,
});
const phone = ref({
  placeholder: "Введите ваш номер телефона",
  value: "",
  filled: true,
});
const mask = { mask: "{+7} (000) 000-00-00", lazy: true };
const selectedCity = computed(() => store.state.initPopup.selectedCity);
const toggleVisibleForm = () => store.commit("toggleVisibleForm");
const getResponseData = (payload) => store.commit("getResponseData", payload);
const toggleForms = () => store.commit("toggleForms");
const onAccept = (e) => {
  const maskRef = e.detail;
  phone.value.value = maskRef.value;
};
const onComplete = (e) => {
  const maskRef = e.detail;
};
const handleSubmitForm = () => {
  if (useRequiredFields(name, email, phone)) {
    useSendData({
      name: name.value.value,
      phone: phone.value.value.replace(/[() -]/g, ""),
      email: email.value.value,
      city_id: selectedCity.value,
    }).then((res) => getResponseData(res.data));
    useClear(name, email, phone);
    toggleForms();
  }
};
</script>
