<template>
  <div class="root">
    <canvas ref="canvas" class="canvas" ></canvas>
  </div>
</template>

<script>
import {GL} from './GL'

export default {
  name: 'GLCanvas',
  mounted() {
    let gl = new GL( this.$refs.canvas );
  }
}
</script>

<style scoped>
.root {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.canvas {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
