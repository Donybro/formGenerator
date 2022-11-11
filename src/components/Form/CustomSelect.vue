<template>
  <select :class="className" :name="name" :id="id" @change="onChange">
    <option value="" selected disabled hidden>{{placeholder}}</option>
    <option :class="optionClassName" v-for="opt in options" :key="opt.value" :value="opt.value">{{opt.label}}</option>
  </select>
</template>

<script setup>
import {defineProps, toRefs} from 'vue'
const props = defineProps({
  name: String,
  id: String,
  className: String,
  placeholder: String,
  optionClassName:String,
  onChange : Function,
  options:Array
})
const {name,className,optionClassName,onChange,id,options,placeholder}  = toRefs(props)
</script>

<style scoped>

</style>