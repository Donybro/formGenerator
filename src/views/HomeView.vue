<template>
  <FormGenerator/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormGenerator from "@/components/Form/FormGenerator.vue";

export default defineComponent({
  name: 'HomeView',
  components: {FormGenerator},
});
</script>
