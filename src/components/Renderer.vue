<template>
  <Renderer
    ref="renderer"
    antialias
    :orbit-ctrl="{
      enableDamping: true,
      enableZoom: false,
      enablePan: false,
      dampingFactor: 0.05,
    }"
    resize="window"
  >
    <Camera :position="{ z: 10 }" />
    <Scene ref="scene" background="#fff">
      <PointLight :position="{ y: 50, z: 100 }" />

      <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
        <LambertMaterial />
      </Box>
    </Scene>
  </Renderer>
</template>

<script>
import { Color } from "three";

export default {
  mounted() {
    console.log(this.$refs);
    const renderer = this.$refs.renderer;
    const box = this.$refs.box.mesh;

    renderer.onBeforeRender(() => {
      box.rotation.x += 0.005;
    });
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style>
canvas {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
}
</style>
