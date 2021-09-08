<template>
    <q-drawer
      v-model="abrirMenu"
      bordered
      overlay
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>

      
      </q-list>
    </q-drawer>
</template>
<script>
import { defineComponent,inject } from 'vue'

export default defineComponent({
    setup() {
        
      return{
         abrirMenu:inject('abrirMenu')
      }
    },
})
</script>
