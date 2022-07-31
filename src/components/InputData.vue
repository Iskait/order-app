<template>
  <div class="w-2/3 relative">
    <input
      class="p-2 rounded-md w-full"
      :placeholder="field.placeholder"
      v-model="field.value"
    />
    <p v-if="!field.filled" class="text-red-700 absolute top-2 right-2">Заполните это поле</p>
  </div>
</template>

<script>
export default {
  props: ['field'],
};
</script>

