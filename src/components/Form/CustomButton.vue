<template>
  <button :id="id" :type="type" :name="name" :class="className" @click="onClick">{{label}}</button>
</template>

<script setup>
import {defineProps, toRefs} from "vue";

const props = defineProps({
  label: String,
  name: String,
  type: String,
  className: String,
  id: String,
  onClick : Function
})

const {label,name,id,type,className,onClick}  = toRefs(props)
</script>

<style scoped>

</style>