<script lang="ts" setup>
const { h1, h2 } = useStage();
</script>

<template>
  <div class="stage">
    <IlythiaShader class="stage__shader-background" />
    <div class="stage__shader-wrapper">
      <IlythiaShader class="stage__shader" />
    </div>
    <div class="stage__gradient"></div>
    <div class="stage__content">
      <h1 class="stage__headline" v-if="h1">{{ h1 }}</h1>
      <h2 class="stage__subheadline" v-if="h2">{{ h2 }}</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.stage {
  height: 100vh;
  min-height: 600px;
  max-height: 1000px;
  background-color: black;
  position: relative;
  overflow: hidden;

  > * {
    position: relative;
  }

  &__shader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__shader-wrapper {
    position: absolute;
    top: 10vh;
    left: 0;
    right: 10vw;
    bottom: 20vh;
    overflow: hidden;
  }

  &__shader-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(2);
    filter: blur(3px) brightness(0.5);
  }

  &__gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }

  &__content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 20px;
    color: white;
    text-align: center;
  }

  &__headline {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
  }

  &__subheadline {
    font-size: 1.5rem;
    font-weight: 400;
  }
}
</style>
