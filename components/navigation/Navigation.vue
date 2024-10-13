<script lang="ts" setup>
const { nav } = useContext();
</script>

<template>
  <StarNavigation v-if="nav.design.value === 'star'" />
  <!-- add more designs here ... -->
</template>
