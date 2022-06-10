const carta = {
    props: ['nombre', 'seleccionada'],
    template: '#carta-template',
    methods: {
        seleccionarCarta(){
            if (!this.seleccionada) {
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
        baraja: [],
        mat:[
            {nombre: 'A', seleccionada: false},
            {nombre: 'B', seleccionada: false},
            {nombre: 'C', seleccionada: false},
            {nombre: 'D', seleccionada: false},
            {nombre: 'E', seleccionada: false},
            {nombre: 'F', seleccionada: false},
            {nombre: 'G', seleccionada: false},
            {nombre: 'H', seleccionada: false},
            {nombre: 'I', seleccionada: false},
            {nombre: 'J', seleccionada: false},
            {nombre: 'K', seleccionada: false},
            {nombre: 'L', seleccionada: false},
            {nombre: 'M', seleccionada: false},
            {nombre: 'N', seleccionada: false},
            {nombre: 'O', seleccionada: false},
            {nombre: 'P', seleccionada: false},
            {nombre: 'Q', seleccionada: false},
            {nombre: 'R', seleccionada: false},
            {nombre: 'S', seleccionada: false},
            {nombre: 'T', seleccionada: false},
        ],
        filas: 4,
        columnas: 6,
    },

    created: function(){
        for (let i = 0; i < this.filas; i++) {
            var arr = [];
            for (let j = 0; j < this.columnas; j++) {
                if(((this.columnas*i)+j) < ((this.filas*this.columnas)/2)){
                    var indice = ((this.columnas*i)+j);
                    var elem = this.mat[indice];
                    arr.push(elem);
                }else{
                    var indice = ((this.columnas*i)+j)-((this.filas*this.columnas)/2);
                    var elem = this.mat[indice];

                    arr.push(elem);
                }
            }
            this.baraja.push(arr);
        }

        // for (let i = 0; i < this.baraja.length; i++) {
        //     this.baraja[i].sort(function() { 
        //         return Math.random() - 0.5
        //     });
        // }
        // this.baraja.sort(function() { 
        //     return Math.random() - 0.5
        // });

    },
    components: {
        carta,
    }

})