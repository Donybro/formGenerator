<template>
  <div class="field_wrapper">
    <label v-if="label" :for="id">{{label}}</label>
    <button :id="id" :type="buttonType" :name="name" :class="className" @click="onClick">{{buttonText}}</button>
  </div>
</template>

<script setup lang="ts">
import {defineProps, toRefs} from "vue";

interface Props {
  label?: string,
  buttonText: string,
  name: string,
  buttonType: string,
  className?: string,
  id: string,
  onClick ?: ()=>{}
}

const props = defineProps<Props>()

const {label,buttonText,name,id,buttonType,className,onClick}  = toRefs(props)
</script>

<style scoped>

</style>