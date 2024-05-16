<template>
  <div class="component">
    <h3>Component 3</h3>
    <button @click="sendDataToChild">Kirim ke Component 2</button>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['grand-child-event']);

function sendDataToChild() {
  emit('grand-child-event', 'Hello Saya dari Component 3!');
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

.component {
  border: 1px solid #888;
  padding: 15px;
  margin-top: 15px;
  border-radius: 10px;
}

.component button{
  background-color: rgb(6, 98, 255);
  padding: 10px;
  border: 0.5px solid white ;
  border-radius: 10px;
  color: white;
  font-family: 'Arial';
}
</style>
