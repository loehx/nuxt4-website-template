<template>
  <div>
    <FontLoader />
    <Stage />
    <slot />
    <Navigation />
  </div>
</template>

<script lang="ts" setup>
useController();
</script>
