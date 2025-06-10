<script setup lang='ts'>
  import { computed, ref } from 'vue'
  const count =  ref(0)
  const text = computed(() => `远程按钮点击次数为：${count.value}`)
</script>

<template>
  <button type="button" class="remote-class" @click="count++">{{text}}</button>
</template>

<style scoped>
.remote-class {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #a03c3c;
  cursor: pointer;
  transition: border-color 0.25s;
}
</style>
