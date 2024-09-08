<template>
  <button class="burger" @click="$emit('click')" :class="{ active: open }">
    <span class="top"></span>
    <span class="mid"></span>
    <span class="bottom"></span>
  </button>
</template>

<script lang="ts" setup>
defineEmits(["click"]);
defineProps<{
  open: boolean;
}>();
</script>

<style scoped lang="scss">
.burger {
  aspect-ratio: 1/1;
  display: block;
  width: 50px;
  height: 50px;
  border: none;
  z-index: 100;
  appearance: none;
  cursor: pointer;
  outline: none;

  span {
    display: block;
    width: 20px;
    height: 2px;
    margin: auto;
    backdrop-filter: invert(1);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 0.4s ease;

    &.top {
      transform: translateY(-8px);
    }

    &.bottom {
      transform: translateY(8px);
    }
  }
  &.active {
    .top {
      transform: rotate(-45deg);
    }
    .mid {
      transform: translateX(-20px) rotate(360deg);
      opacity: 0;
    }
    .bottom {
      transform: rotate(45deg);
    }
  }
}

.translateX-enter {
  transform: translateX(-200px);
  opacity: 0;
}

.translateX-enter-active,
.translateX-leave-active {
  transform-origin: top left 0;
  transition: 0.2s ease;
}

.translateX-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}
</style>
