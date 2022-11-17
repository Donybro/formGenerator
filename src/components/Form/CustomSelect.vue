<template>
  <div class="field_wrapper">
    <label v-if="label" :for="id">{{label}}</label>
    <select :class="className" :name="name" :id="id" @change="onChange">
      <option value="" selected disabled hidden>{{placeholder}}</option>
      <option :class="optionClassName" v-for="opt in options" :key="opt.value" :value="opt.value">{{opt.label}}</option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, toRefs} from 'vue'
import {IOptionInterface} from "@/types/option.interface";
interface Props {
  name: string,
  id: string,
  className?: string,
  label?: string,
  placeholder?: string,
  optionClassName?:string,
  onChange ?: ()=>void,
  options:IOptionInterface[]
}
const props = defineProps<Props>()
const {name,className,label,optionClassName,onChange,id,options,placeholder}  = toRefs(props)
</script>

<style scoped>

</style>