const asado = {
    props : ["nombre","imagen","cantidad"],
    template: "#asado-template",
    methods: {
        masAsado(){
            this.$emit('mas');
        },
        menosAsado(){
            if (this.cantidad > 0) {
                this.$emit('menos');
            }
        },
    }
}
new Vue({
    el: "#app",
    data: {
        totalAsados:0,
        asados: [
            {
                nombre: "Vacio",
                imagen: "https://cdn.shopify.com/s/files/1/0003/1916/0381/articles/El-secreto-para-un-buen-asado-tips-para-sellar-la-carne-al-carbo_CC_81n.jpg",
            },
            {
                nombre: "Costilla",
                imagen: "https://locosxlaparrilla.com/wp-content/uploads/2015/02/costilla-costillar-asada-parrilla-locosxlaparrilla.jpg",
            },
            {
                nombre: "Matambre",
                imagen: "https://img-global.cpcdn.com/recipes/2526579_05eb4bdfbac99dd9/680x482cq70/matambre-a-la-pizza-en-la-parrilla-foto-principal.webp",
            },
        ]
    },
    components:{
        asado,
    }

})