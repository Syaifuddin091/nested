<template>
  <div class="component">
    <h1>Component 1</h1>
    <p>Data Pesan: {{ message }}</p>
    <Component2 @child-event="handleChildEvent">
      <template v-slot:additional-content>
        <p>Ini adalah konten tambahan yang diteruskan dari Komponen 1 ke Komponen 2 melalui slot.</p>
      </template>
    </Component2>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Component2 from './Component2.vue';

const message = ref('');

function handleChildEvent(data) {
  message.value = data;
}
</script>

<style scoped>
.component {
  border: 2px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  background-color: rgb(6, 44, 78);
  color: white;
  font-weight: 300px;
}

h1{
  font-weight: 150px;
}
</style>
