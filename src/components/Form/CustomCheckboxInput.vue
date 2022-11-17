<template>
  <div class="field_wrapper">
    <label v-if="label" :for="id">{{label}}</label>
    <div v-for="option in value" :key="option.id">
      <label :for="option.id">{{option.label}}</label>
      <input :id="option.id" :type="inputType" :name="option.name" :class="className" :value="value" @input="onChange">
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, toRefs} from 'vue'
import {IOptionInterface} from "@/types/option.interface";

interface Props {
  inputType: string,
  id: string,
  label?: string,
  className?: string,
  value?: IOptionInterface[],
  onChange ?: ()=> void
}
const props = defineProps<Props>()
const {inputType,value,id,className,onChange,label}  = toRefs(props)


</script>

<style scoped>
</style>
