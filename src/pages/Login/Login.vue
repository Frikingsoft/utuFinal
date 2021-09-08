<template>
  <q-page class="row justify-center items-center">
    <q-card class="my-card col-xs-10 col-sm-6 col-md-4 col-xl-3 col-lg-3">
      <q-card-section>
        <div class="text-h6 texto text-white flex flex-center">
          Formulario de Registro
          <q-icon class="q-ml-md" name="fas fa-address-card" />
        </div>
      </q-card-section>
      <hr />
      <q-card-section class="row justify-center q-mt-xl">
        <input
          type="text"
          class="col-8 datos"
          placeholder="Ingrese su Usuario"
          v-model="usuario"
        />
        <input
          type="text"
          class="col-8 q-mt-lg datos"
          placeholder="Ingrese su Contraseña"
          v-model="contra"
        />
      </q-card-section>
      <q-card-section class="flex flex-center text-white textoOlvidado">
        ¿Olvidaste la contraseña?<q-icon
          class="q-ml-md"
          name="fas fa-grin-beam-sweat"
        />
        <q-btn
          color="white"
          icon="fas fa-share-square"
          label="Enviar"
          class="q-mt-md botones"
          text-color="blue-grey-7"
          glossy
          @click="enviar"
        />
        <q-btn
          color="white"
          icon="fas fa-paper-plane"
          label="Recuperar"
          class="q-mt-md botones"
          text-color="blue-grey-7"
          glossy
        />
      </q-card-section>
      <q-card-section class="flex flex-center">
        <input type="button" class="registro botonesRegistro" />
        <input type="button" class="google botonesRegistro q-ml-md" />
        <input type="button" class="facebook botonesRegistro q-ml-md" />
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const usuario = ref("");
    const contra = ref("");
    const enviar = () => {
      fetch("/login", {
        method: "get",
        body: JSON.stringify({ usuario, contra }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then();
    };
    return { usuario, contra, enviar };
  },
});
</script>
<style scoped>
.my-card {
  max-width: 400px;
  height: 500px;
  background-image: linear-gradient(
    to top,
    rgb(13, 71, 108),
    rgb(100, 154, 190)
  );
  border: 3px double white;
}
.texto {
  text-shadow: 1px 1px 3px black;
  font-size: 1.5rem;
}
.datos {
  border-radius: 10%/90%;
  font-size: 1rem;
  border: 1px solid white;
  text-align: center;
}
.datos:focus {
  outline: none;
  border: 1px solid rgb(13, 71, 108);
}
.datos::placeholder {
  text-align: center;
}
.textoOlvidado {
  font-size: 1.5rem;
}
.botonesRegistro {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: 100% 100%;
  border: 2px solid white;
  box-shadow: 1px 1px 5px black;
}
.botonesRegistro:focus {
  outline: none;
  box-shadow: 0 0 8px white;
}
.google {
  background-image: url("../../../public/imagenes/google.svg");
}
.registro {
  background-image: url("../../../public/imagenes/registro.svg");
}
.facebook {
  background-image: url("../../../public/imagenes/facebook.svg");
}
.botones {
  width: 160px;
  height: 30px;
  margin-right: 10px;
}
</style>

