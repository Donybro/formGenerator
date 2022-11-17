<template>
  <div class="field_wrapper">
    <label :for="id">LAbel</label>
    <input :id="id" :type="type" :name="name" :class="className" :value="value" @input="onChange">
  </div>
</template>

<script setup>
import {defineProps, toRefs} from 'vue'
const props = defineProps({
  type: String,
  name: String,
  id: String,
  className: String,
  value: String || Number || Object,
  onChange : Function
})
const {type,value,name,id,className,onChange}  = toRefs(props)
console.log(
    {type,value,name,id,className,onChange}
)

</script>

<style scoped>

.field_wrapper{
  display: flex;
  flex-direction: column;
}
</style>
