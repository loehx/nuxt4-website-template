<script lang="ts" setup>
const { design } = useStage();
</script>

<template>
  <IlythiaStage v-if="design === 'ilythia'" />
  <!-- add more designs here ... -->
</template>
