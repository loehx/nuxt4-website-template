<script lang="ts" setup>
import { Renderer, Transform, Box, Program, Mesh, Vec2, Triangle } from "ogl";

const container = ref<HTMLElement | null>(null);
const props = defineProps<{
  fragment: string;
  vertex: string;
}>();

if (import.meta.client) {
  const renderer = new Renderer();
  const gl = renderer.gl;

  function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    program.uniforms.u_resolution.value.x = window.innerWidth;
    program.uniforms.u_resolution.value.y = window.innerHeight;
  }

  const geometry = new Triangle(gl);
  const program = new Program(gl, {
    vertex: props.vertex,
    fragment: props.fragment,
    uniforms: {
      u_resolution: { value: new Vec2(window.innerWidth, window.innerHeight) },
      u_time: { value: 0 },
    },
  });

  const mesh = new Mesh(gl, { geometry, program });

  requestAnimationFrame(update);
  function update(t: number) {
    requestAnimationFrame(update);
    program.uniforms.u_time.value = t * 0.001;
    renderer.render({ scene: mesh });
  }

  watch(container, () => {
    if (!container.value) return;
    container.value.appendChild(gl.canvas);
  });

  onMounted(() => {
    resize();
    window.addEventListener("resize", resize);
  });
  onUnmounted(() => window.removeEventListener("resize", resize));
}
</script>

<template>
  <div ref="container"></div>
</template>
