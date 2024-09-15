<script lang="ts" setup>
const design = useDesign();

const primaryColor = computed(() => toShaderColor(design.primaryColor.value));
const secondaryColor = computed(() =>
  toShaderColor(design.secondaryColor.value)
);

const vertex = computed(
  () => `
attribute vec2 uv;attribute vec2 position;
void main() {gl_Position=vec4(position,0,1);}
`
);

const fragment = computed(
  () => `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
// uniform vec3 u_color1;

void main() {
	vec2 uv = (gl_FragCoord.xy - u_resolution * 0.5) / u_resolution.y;   
	
	float walk = u_time * 0.75;
	
	vec3 color = vec3(0.5, uv.x + sin(walk * 0.5) * 0.5, uv.y + sin(walk)* 0.5 );
	color = mix(color, vec3(pow( abs(uv.y), uv.x * 0.5)), color + 0.25 );

    gl_FragColor = vec4(color, 1.0);
}
`
);

function toShaderColor(hex: string) {
  const r = parseInt(hex.substring(1, 3), 16) / 255;
  const g = parseInt(hex.substring(3, 5), 16) / 255;
  const b = parseInt(hex.substring(5, 7), 16) / 255;
  return `vec3(${r.toFixed(2)}, ${g.toFixed(2)}, ${b.toFixed(2)})`;
}
</script>

<template>
  <Shader :fragment="fragment" :vertex="vertex" />
</template>
