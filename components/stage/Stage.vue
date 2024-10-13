<script lang="ts" setup>
const { design } = useContext().stage;
</script>

<template>
  <IlithyaStage v-if="design === 'ilithya'" />
  <!-- add more designs here ... -->
</template>
