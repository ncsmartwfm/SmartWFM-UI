<template>
    <footer>
      <p>Netcracker Copyright &copy; "current year" </p>
    </footer>
  </template>

<script>
import { computed } from 'vue'

export default {
  setup () {
    const year = computed(() => new Date().getFullYear())
  }
}
</script>