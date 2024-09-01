<template>
  <div
    class="grid"
    :class="{
      'grid--open': isOpen,
      // 'grid--pulse': pulse,
    }"
  >
    <div class="row" v-for="(row, rowIndex) in rows" :key="rowIndex">
      <div
        class="cube"
        v-for="(cube, cubeIndex) in row.cubes"
        :key="cubeIndex"
        :style="cube.style"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const boxSize = 50;
const delay = 6;
const rows = ref<{ cubes: { style: Record<string, string> }[] }[]>([]);
const pulse = ref(false);
let runningDelay = 0;

defineProps<{
  isOpen: boolean;
}>();

function init() {
  const colCount = Math.ceil(window.innerWidth / boxSize + 1);
  const rowCount = Math.ceil(window.innerHeight / boxSize + 1);
  rows.value = [];

  // Generate rows and cubes
  for (let y = 0; y < rowCount; y++) {
    const row = { cubes: [] as { style: Record<string, string> }[] };

    for (let x = 0; x < colCount; x++) {
      runningDelay += delay;
      const offset = Math.round(Math.random() * 50);
      const style = {
        transitionDelay: `${runningDelay}ms`,
        transform: `translate(${offset}vw, 100vh)`,
        width: `${boxSize}px`,
        height: `${boxSize}px`,
      };
      row.cubes.push({ style });
    }

    rows.value.push(row);
    runningDelay -= colCount * (delay * 0.7);
  }
}

if (import.meta.client) {
  init();

  // const interval = setInterval(() => {
  //   pulse.value = props.isOpen && !pulse.value;
  // }, 2000);
  // onUnmounted(() => clearInterval(interval));

  window.addEventListener("resize", () => init());
}
</script>

<style scoped lang="scss">
.grid {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transition: all 1000ms ease-in-out;

  &--open {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
}

.row {
  display: flex;
}

.cube {
  aspect-ratio: 1 / 1;
  background-color: black;
  top: 100%;
  transition: all 1000ms ease-in-out;
  opacity: 0.7;
  border-radius: 2px;

  .grid--open & {
    transform: translate(0, 0) !important;
  }

  // .grid--pulse & {
  //   border-radius: 0px;
  //   transform: translate(0, 0) rotate(20deg) !important;
  // }
}
</style>
