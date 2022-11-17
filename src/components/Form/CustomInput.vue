<template>
  <div class="field_wrapper">
    <label v-if="label" :for="id">{{label}}</label>
    <input :id="id" :type="inputType" :name="name" :placeholder="placeholder" :class="className" :value="value" @input="onChange">
  </div>
</template>

<script setup lang="ts">
import {defineProps, toRefs} from 'vue'

interface Props {
  inputType: string,
  name: string,
  id: string,
  label?: string,
  placeholder?: string,
  className?: string,
  value?: string | number | object,
  onChange ?: ()=> void
}

const props = defineProps<Props>()
const {inputType,value,name,placeholder,id,className,onChange,label}  = toRefs(props)


</script>

<style scoped>
</style>
