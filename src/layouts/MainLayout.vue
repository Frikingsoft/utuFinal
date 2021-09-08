<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <Toolbar/>
      <Drawer/>     
    </q-header>
    <q-page-container @click="abrirMenu=false">
      <Menu/>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import Menu from './Menu/Menu.vue'
import Toolbar from '../layouts/Toolbar/Toolbar.vue'
import Drawer from '../layouts/Drawer/Drawer.vue'
import { defineComponent, ref,provide } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    Toolbar,
    Drawer,
    Menu
  },

  setup () {
    const abrirMenu = ref(false)
    provide('abrirMenu',abrirMenu)
    return {
      abrirMenu,
    }
  }
})
</script>
