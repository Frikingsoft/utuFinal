<template>
 <q-carousel
      animated
      v-model="slide"
      height="300px"
      infinite
      :autoplay="autoplay"
      control-color="cyan-9"
      control-type="regular"
      control-text-color="white"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      :v-model="slide"
      thumbnails
    >
        <q-carousel-slide
        v-for="(item,index) in imagenes"
        :key="index"
        :name="item.nombre"
        :img-src="item.url"
        class="imagenes"
        />
    </q-carousel>  
</template>
<script>
import { defineComponent,ref } from 'vue'
import {sliders} from './sliders'
export default defineComponent({
    setup() {
        const slide = ref(1)
        const autoplay= ref(true)
        return{...sliders(),slide,autoplay}
    },
})
</script>
<style scoped>

.imagenes {
  width: 768px;
  border-radius: 2%;
  box-shadow: 1px 1px 5px black;
}
</style>
