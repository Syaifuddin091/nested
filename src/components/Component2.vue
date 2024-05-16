<template>
  <div class="component">
    <h2>Component 2</h2>
    <button @click="sendDataToParent">Kirim ke Component 1</button>
    <Component3 @grand-child-event="handleGrandChildEvent" />
    <slot name="additional-content"></slot>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
import Component3 from './Component3.vue';

const emit = defineEmits(['child-event']);

function sendDataToParent() {
  emit('child-event', 'Hello Saya dari Component 2!');
}

function handleGrandChildEvent(data) {
  emit('child-event', data);
}
</script>

<style scoped>
.component {
  border: 1px solid #aaa;
  padding: 20px;
  margin-top: 20px;
  border-radius: 5px;
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
