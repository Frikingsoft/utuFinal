import {ref} from 'vue'
export function mostrarCursos(){
    const cursos = ref([
      {nombre:"Inicio",descripcion:"Podrás volver a la página de inicio",icono:"menu_book",url:"/"},
      {nombre:"Cursos",descripcion:"Podrás ver todos los cursos disponibles",icono:"fas fa-graduation-cap",url:"/cursos"},
      {nombre:"Oferta",descripcion:"Podrás ver la propuesta educativa para el próximo año",icono:"local_offer",url:"/oferta"},
      {nombre:"Programas",descripcion:"Podrás ver los programas de cada curso",icono:"fas fa-tasks",url:"/programas"},
      {nombre:"Exámenes",descripcion:"Podrás ver los calendarios de Exámenes",icono:"fas fa-diagnoses",url:"/examenes"},
      {nombre:"Créditos",descripcion:"Podrás ver las personas que colaboran con la página",icono:"badge",url:"/creditos"}
    ])
    return{cursos}
}