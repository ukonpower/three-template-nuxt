<template>
  <div ref="canvasWrap" class="glCanvas">
  </div>
</template>

<script lang='ts'>
import {GL} from './GL'
export default defineComponent({
	setup () {
		
		const canvasWrap = ref<HTMLDivElement>(null);
		const gl = new GL();

		onMounted(async () => {

			let renderer = await gl.scene.getRenderer()

			canvasWrap.value.appendChild( renderer.domElement );

		})

		onUnmounted(() => {

			gl.dispose();
			
		})

		return {
			canvasWrap
		}
	}
})

</script>

<style scoped>
.root {
	position: relative;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
}

.canvasWrap {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
}
</style>