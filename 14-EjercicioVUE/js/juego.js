const juego = new Vue({
    el: "#juego",
    data:{
        url: 'https://jsonplaceholder.typicode.com/users',
        personas: [],
        resultado: [],
        orden: [],
        deshabilitado: [],
        mensaje: '',
        estado: 'Empieza',
        gana: new Audio('audios/gana.mp3'),
        intenta: new Audio('audios/intento.mp3'),
        pierde: new Audio('audios/pierde.mp3'),
        intentos: 2,
        fin: false,
    },

    mounted(){
        axios.get(this.url)
            .then(respuesta => {
                res = respuesta.data;
                for (let i = 0; i < res.length; i++) {
                    this.personas.push(res[i].username);
                    this.deshabilitado[i] = true;
                }
                this.orden = this.personas.slice();
                this.orden.sort();
            })
            .catch(error => console.log(error));
    },

    methods:{
        pasar(nombre){
            //Pasar cada nombre al nuevo array y deshabilitar el botón correspondiente
            if (this.resultado.length<10) {
                this.resultado.push(nombre);
                for (let i = 0; i < this.personas.length; i++) {
                    if (this.personas[i]===nombre) {
                        this.deshabilitado[i] = false;
                    }
                }
            } 
        },

        nuevoIntento(){
            //Devuelvo los valores originales a las variables
            this.resultado = [];
            this.intentos = this.intentos-1;
            this.mensaje = '';
            this.estado = 'Empieza';
            this.fin = false;
            this.intenta.play();
            for (let i = 0; i < this.deshabilitado.length; i++) {
                this.deshabilitado[i] = true;
            }
        },

        reiniciar(){
            window.location.reload();
        },

        verificar(array1,array2) {
            return array1.toString() === array2.toString(); 
        },
    },

    watch:{
        resultado(nuevo, antiguo){
            // Si el rango del array resultado es menor a 10, que me muestre el mensaje de continuar
            if((nuevo.length > 0) && (nuevo.length < this.personas.length)){
                this.estado = "Continua";
                return false;
            }else if(nuevo.length == 0){
                this.estado = "Empieza";
                return false;
            }else{
                this.estado = "Terminaste";
                this.orden = nuevo.slice();
                this.orden.sort();
                this.fin = true;
            }

            //Si fin es TRUE, comparar los arrays y mostrar el mensaje correspondiente
            if(this.fin && this.verificar(this.resultado, this.orden)){
                this.mensaje = 'Está ordenado. ÉXITO';
                this.gana.play();
            }else if(this.fin && !this.verificar(this.resultado, this.orden)){
                this.mensaje = 'No está ordenado. Vuelve a intentarlo.';
            }
            else{
                this.mensaje = '';
            }

            if((this.mensaje==='No está ordenado. Vuelve a intentarlo.') && (this.intentos === 0)){
                alert('Te has quedado sin intentos!');
                this.pierde.play();
            }
        }

    }
});