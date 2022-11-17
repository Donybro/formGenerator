<template>
  <form class="formWrapper">
    <template v-for="field in fieldsList" :key="field.id">
      <CustomInput v-if="field.fieldType === 'input' && field.inputType=== 'text'" v-bind="field"/>
      <CustomRadioInput v-if="field.fieldType === 'input' && (field.inputType=== 'radio' || field.inputType=== 'checkbox')" v-bind="field"/>
      <CustomButton v-if="field.fieldType === 'button'" v-bind="field"  />
      <CustomSelect v-if="field.fieldType === 'select'" v-bind="field"  />
    </template>
  </form>
</template>

<script setup lang="ts">
  import CustomInput from "@/components/Form/CustomInput";
  import CustomButton from "@/components/Form/CustomButton";
  import CustomSelect from "@/components/Form/CustomSelect";
  
  import fieldsList from "@/utils/fieldsList";
  import CustomRadioInput from "@/components/Form/CustomRadioInput.vue";
  
</script>

<style scoped>
</style>
