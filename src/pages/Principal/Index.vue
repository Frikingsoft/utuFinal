<template>
  <q-page class="row justify-center">
      <Sliders class="q-mt-md"/>
      <Cursos class="col-10"/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import Sliders from './sliders/Sliders.vue'
import Cursos  from './cursos/Cursos.vue'
export default defineComponent({
  name: 'PageIndex',
  components:{
    Sliders,
    Cursos
  },
  setup(){

  }
})
</script>
