Vue.component('destino',{
    template: `<span>Destino</span>`,
});

Vue.component('boton',{
    props: ["color", "enlace", "anchorText"],
    template : `<a class ="boton" :style="'background-color:' + color" :href="enlace">{{ anchorText }}</a>` 
});

new Vue({
    el: "#app",
    data: {
        
    }
});