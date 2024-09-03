<script lang="ts" setup>
const { items, isOpen } = useNavigation();
const { primaryColor } = useDesign()
</script>

<template>
  <div class="navigation" :class="isOpen && 'navigation--open'">
    <CubeOverlay :isOpen="isOpen" />
    <nav class="navigation__overlay">
      <ul class="navigation__items">
        <li v-for="item in items" :key="item.link" class="navigation__item">
          <a :href="item.link">{{ item.text }}</a>
        </li>
        <li class="navigation__item">
          <a @click.prevent="isOpen = false" href="">X</a>
        </li>
      </ul>
    </nav>
    <button @click.prevent="isOpen = !isOpen" class="navigation__toggle">
      {{ isOpen ? 'Close Navi' : 'Open Navi' }}
    </button>
  </div>
</template>

<style scoped lang="scss">

.navigation {
  &__overlay {
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 1s ease;
    pointer-events: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &--open &__overlay {
    opacity: 1;
    pointer-events: all;
  }

  &__items {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  &__item {
    line-height: 3;

    a {
      display: block;
      padding: 10px;
      color: #fff;
      text-decoration: none;

      &:hover {
        color: v-bind(primaryColor);
      }
    }
  }

  &__toggle {
    position: fixed;
    bottom: 0px;
    right: 0px;
    padding: 10px;
    background-color: aquamarine;
  }
}
</style>