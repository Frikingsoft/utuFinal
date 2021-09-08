import { ref } from 'vue'

export function sliders() {
    const imagenes = ref([
        { nombre: 1, url: "http://www.lagomerin.com.uy/images/utu-melo.jpg" },
        { nombre: 2, url: "https://pbs.twimg.com/media/EesD8rqXYAQ0raq.jpg" },
        { nombre: 3, url: "http://www.livosur.org/RSD_2.0.0/RSD_Joomla/images/12096232_10207747518715593_1947020386078738396_n.jpg" }
    ])
    return{imagenes}
}