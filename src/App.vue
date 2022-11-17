<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
* {
  font-family: 'Montserrat', sans-serif;
}


.field_wrapper{
  display: flex;
  flex-direction: column;
}

.field_wrapper > label {
  margin-bottom: 6px;
  font-weight: bold;
}
.formWrapper{
  padding: 20px;
  border-radius: 6px;
  background: #efefef;
  width: 700px;
  margin: 0px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;
  row-gap: 12px;
}
</style>
