<script lang="ts" setup>
const { design } = useNavigation();
</script>

<template>
  <StarNavigation v-if="design === 'star'" />
  <!-- add more designs here ... -->
</template>
