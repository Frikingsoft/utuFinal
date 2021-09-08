<template>
  <div class="row q-gutter-lg justify-center">
    <q-card class="my-card col-2" v-for="(item, index) in cursos" :key="index">
      <q-card-section>
        <div class="text-h6 flex flex-center">{{ item.nombre }}</div>
        <hr />
        <div class="text-subtitle2 q-mt-xs">{{ item.descripcion }}</div>
        <div class="q-mt-md">
          <q-icon :name="item.icono" style="font-size: 3em" />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { mostrarCursos } from "./cursos";
export default defineComponent({
  setup() {
    return { ...mostrarCursos() };
  },
});
</script>
<style scoped>

    .my-card {
 width: 200px;
 height: 200px;
 background-image: linear-gradient(
    to top,
    rgba(13, 72, 108, 0.596),
    rgba(100, 154, 190, 0.466)
  );
  color: white;
  border: 3px double white;
}
.my-card:hover{
    background-image: linear-gradient(
    to top,
    rgb(13, 71, 108),
    rgb(100, 154, 190)
  );
}

</style>