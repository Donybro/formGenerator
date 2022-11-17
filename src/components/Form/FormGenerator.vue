<template>
  <form class="formWrapper">
    <template v-for="field in fieldsArray" :key="field.id">
      <CustomInput v-if="field.fieldType === 'input'" v-bind="field"/>
      <CustomButton v-if="field.fieldType === 'button'" v-bind="field"  />
      <CustomSelect v-if="field.fieldType === 'select'" v-bind="field"  />
    </template>
  </form>
</template>

<script setup>
  import CustomInput from "@/components/Form/CustomInput";
  import CustomButton from "@/components/Form/CustomButton";
  import CustomSelect from "@/components/Form/CustomSelect";

  const fieldsArray = [
    {
      fieldType :'input',
      type:'text',
      name:'first-input',
      placeholder:'Hello World',
      id:'first-input',
      className:"input_text_class",
      value:"first-input value",
      onChange:(e)=> console.log(e)
    },
    {
      fieldType :'button',
      type:"button",
      name:'first-button',
      id:'first-button',
      label:'Click me',
      className:"btn_class",
      onClick:(e)=> console.log(e,'Clicked by button')
    },{
      fieldType :'select',
      name:'first-select',
      placeholder: 'Donybro',
      id:'first-select',
      optionClassName:'select_option_class',
      className:"select_class",
      onChange:(e)=> console.log(e,'Changed select'),
      options:[
        {value:'option1',label:'option 1'},
        {value:'option2',label:'option 2'},
        {value:'option3',label:'option 3'},
      ]
    },
  ]
</script>

<style scoped>
.formWrapper{
  background: #f89f9f;
  width: 700px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-items: center;
}
</style>
