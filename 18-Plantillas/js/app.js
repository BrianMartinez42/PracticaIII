const asado = {
    props : ["nombre","imagen","cantidad"],
    template: "#asado-template",
    methods: {
        masAsado(){
            this.cantidad++;
        },
        menosAsado(){
            this.cantidad > 0 && this.cantidad--;
        },
    }
}
new Vue({
    el: "#app",
    data: {
        asados: [
            {
                nombre: "Vacio",
                imagen: "https://cdn.shopify.com/s/files/1/0003/1916/0381/articles/El-secreto-para-un-buen-asado-tips-para-sellar-la-carne-al-carbo_CC_81n.jpg",
                cantidad: 4,
            },
            {
                nombre: "Costilla",
                imagen: "https://locosxlaparrilla.com/wp-content/uploads/2015/02/costilla-costillar-asada-parrilla-locosxlaparrilla.jpg",
                cantidad: 8,
            },
            {
                nombre: "Matambre",
                imagen: "https://img-global.cpcdn.com/recipes/2526579_05eb4bdfbac99dd9/680x482cq70/matambre-a-la-pizza-en-la-parrilla-foto-principal.webp",
                cantidad: 12,
            },
        ]
    },
    components:{
        asado,
    }

})