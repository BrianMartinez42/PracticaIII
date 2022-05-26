Vue.component('articulo-base', {
    props: ['datos'],
    template: '#articulo-base-template',
})

new Vue({
    el: '#app',
    data: {
        datos:{
            titulo: "Esto es un título desde le modelo",
        }
    }
})