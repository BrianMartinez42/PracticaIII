const juego = new Vue({
    el: "#juego",
    data:{
        url: 'https://jsonplaceholder.typicode.com/users',
        personas: [],
        resultado: [],
        orden: [],
        mensaje: '',
        estado: 'Empieza',
        deshabilitado: [false,false,false,false,false,false,false,false,false,false],
        verificar: function(array1,array2) { return array1.toString() === array2.toString(); },
        audio: new Audio('audio.mp3'),
        fin: false,
    },

    mounted(){
        axios.get(this.url)
            .then(respuesta => this.personas = respuesta.data)
            .catch(error => console.log(error));
    },

    methods:{
        pasar(nombre,id){
            //Pasar cada nombre al nuevo array y deshabilitar el botón correspondiente
            if (this.resultado.length<10) {
                // console.log(nombre);
                this.resultado.push(nombre);
                this.deshabilitado[id]=true;
            } 
        },
    },

    watch:{
        resultado(nuevo, antiguo){
            // Si el rango del array resultado es menor a 10, que me muestre el mensaje de continuar
            if(nuevo.length < 10){
                this.estado = "Continua";
                return false;
            }
            this.estado = "Terminaste";
            this.orden = nuevo.slice();
            this.orden.sort();
            this.fin = true;
        },
        fin(t,f){
            //Si fin es TRUE, comparar los arrays y mostrar el mensaje correspondiente
            if(t && this.verificar(this.resultado, this.orden)){
                this.mensaje = 'Está ordenado. ÉXITO';
                this.audio.play();
            }else{
                this.mensaje = 'No está ordenado. :C';
            }
        }
    }
});