const carta = {
    props: ['info','nombre', 'bool'],
    template: '#carta-template',
    methods: {
        seleccionarCarta(){
            if (!this.bool) {
                this.$emit('mostrar');    
            }else{
                this.$emit('ocultar')
            }
        }
    }
};

new Vue({
    el: "#app",
    data: {
        baraja:[
            {name: 'Hola', selected: false},
            {name: 'Buenas', selected: false},
            {name: 'Chau', selected: false},
            {name: 'Hola', selected: false},
            {name: 'Buenas', selected: false},
            {name: 'Chau', selected: false},
        ],
    },
    created: function(){
        this.baraja.sort(function() { 
            return Math.random() - 0.5 
        });
    },
    components: {
        carta,
    }

})


// for to a {
//     linea = []
//     for n to b {
//         aux Object new class Carta{}
//         asignar valores por defecto
//         linea.push(aux Object)
//     }
//     baraja.push(linea)
// }

// v-for="linea in baraja"
//     v-for="celda in linea"
//         v-on-click="click(celda)"