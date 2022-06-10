const carta = {
    props: ['carta'],
    template: '#carta-template',
    methods: {
        seleccionarCarta(){
            if (!this.seleccionada) {
                this.$emit('mostrar', this.carta.id);    
            }else{
                this.$emit('ocultar')
            }
        }
    }
}

const juego = {
    props: ['todas'],
    template: '#juego-template',
    methods: {
        mostrarCarta(id){
            alert(id);
        },
    },
    components: {
        carta,
    }
}

new Vue({
    el: "#app",
    data: {
        baraja: [],
        // valores: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T' ],
        filas: 6,
        columnas: 6,
    },

    created: function(){
        aux=[];
        cantidad = (this.filas*this.columnas)/2;
        for (let i = 0; i < cantidad; i++) {
            aux.push(String.fromCharCode(65+i));
        }

        aux = aux.concat(aux);
        aux.sort(function() { 
                return Math.random() - 0.5
            });

        for (let i = 0; i < this.filas; i++) {
            var arr = [];
            for (let j = 0; j < this.columnas; j++) {
                let elem = class {
                    id = 0;
                    nombre = '';
                    seleccionada = false;                    
                }
                elem.id = (this.columnas*i)+j; 
                elem.nombre = aux[0];                
                arr.push(elem);
                aux.shift();
            }
            this.baraja.push(arr);
        }

    },
    components: {
        juego,
    }

})