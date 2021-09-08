<template>
  <q-toolbar class="titulo row items-center justify-between">
    <div class="col-xs-1 col-md-2">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="abrirMenu=true"/>
    </div>
    <q-toolbar-title class="elTitulo row items-center col-8 justify-center">
      Escuela Superior de Melo
      <q-icon
        name="fas fa-graduation-cap"
        class="text-white q-ml-md icono"
        style="font-size: 30px"
      />
    </q-toolbar-title>
    <div class="col-xs-1 col-md-2 flex justify-end">
      <input type="text" placeholder="...Buscar" class="buscar"/>
    </div>
  </q-toolbar>
</template>
<script>
import { defineComponent,inject } from "vue";

export default defineComponent({
  setup() {
      
      return{
        abrirMenu:inject('abrirMenu')
      }
  },
});
</script>
<style scoped>
.titulo {
  background-image: linear-gradient(
    to top,
    rgb(13, 71, 108),
    rgb(100, 154, 190)
  );
  
}
.elTitulo {
  font-size: 40px;
  font-family: "Times New Roman", Times;
  letter-spacing: 2px;
  word-spacing: 5px;
}
.buscar{
    border-radius: 10%/80%;
    background-image: url("../../../public/imagenes/lupa.png");
    background-repeat: no-repeat;
    background-size: 25px 25px;
    text-align: center; 
    font-family: "Times New Roman", Times;
    letter-spacing: 2px;
    color: rgb(13, 71, 108);
}
.buscar::placeholder{
  font-size: 15px;
  font-family: "Times New Roman", Times;
  letter-spacing: 2px;
  color: rgb(13, 71, 108);
}
.buscar:focus{
    outline: none;
    box-shadow: 0 0 8px white;
}
@media (max-width: 1023px) {
  .buscar{
    display: none;
  }
  .elTitulo{
    font-size: 25px;
    letter-spacing: 0;
    word-spacing: 0;
  }
  .icono{
    display:none ;
  }
}
</style>
