<template>
  <nav class="menu">
    <router-link v-for="(item, index) in cursos" :key="index" :to="item.url">{{
      item.nombre
    }}</router-link>
    <router-link to="/login">Login</router-link>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
import { mostrarCursos } from "../../pages/Principal/cursos/cursos";
export default defineComponent({
  setup() {
    return { ...mostrarCursos() };
  },
});
</script>
<style scoped>
.menu {
  margin: auto;
  margin-top: 10px;
  width: 70%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.menu a {
  width: 90px;
  height: 50%;
  margin-left: 5px;
  color: rgb(0, 131, 143);
  text-decoration: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 15px;
  border-radius: 5%;
  border-top: 2px solid rgb(13, 71, 108);
}
.menu a:hover{
  transition: .5s;
  height: 100%;
   background-image: linear-gradient(
    to top,
    rgb(13, 71, 108),
    rgb(100, 154, 190)
  );
  color: white;
  
}

.menu a.router-link-exact-active {
  background-image: linear-gradient(
    to top,
    rgb(13, 71, 108),
    rgb(100, 154, 190)
  );
  height: 100%;
  color: white;
  box-shadow: 1px 1px 4px black;
  border-top:none;
}
@keyframes animar {
  from{background-image: linear-gradient(
    to top,
    rgb(17, 90, 136),
    rgb(111, 171, 211)
  );}
  to{background-image: linear-gradient(
    to top,
    rgb(13, 71, 108),
    rgb(100, 154, 190)
  );}
}
</style>
