Vue.component('foto', {
    template: `<img v-bind:src = "urlFotos">`,
    data(){
        return{
            ancho: Math.floor(Math.random() * 500) + 200,
            alto: Math.floor(Math.random() * 500) + 200,
        }
    },
    computed: {
        urlFotos(){
            return `https://baconmockup.com/${this.ancho}/${this.alto}`
        }
    }
});

new Vue({
    el: "#app",
    
    methods:{
        recargar(){
            window.location.reload();
        },
    }
});