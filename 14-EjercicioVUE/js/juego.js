const juego = new Vue({
    el: "#juego",
    data:{
        jugar: false,
        fin: false,
        habilitado: [],
        mensaje: '',
        mensaje_error: '',
        mostrar_exito: false,
        mostrar_record: false,
        mostrar_reglas: false,
        orden: [],
        pausa: false,
        personas: [],
        resultado: [],
        sonido_error: new Audio('audios/error.mp3'),
        sonido_exito: new Audio('audios/exito.mp3'),
        sonido_pasar: new Audio ('audios/pasar.mp3'),
        sonido_pausa: new Audio ('audios/interfaz.mp3'),
        sonido_juego: new Audio ('audios/Jeremy Blake - Powerup!.mp3'),
        url: 'https://jsonplaceholder.typicode.com/users',        
  
        errores: 0,
        horas: 0,
        minutos: 0,
        segundos: 0,
        centesimas: 0,

        errores_record: 0,
        horas_record: 0,
        minutos_record: 0,
        segundos_record: 0,
        centesimas_record: 0,

        control: 0,
        record: false,
    },

    mounted(){
        this.sonido_juego.volume = 0.4;
        persona = [];
        axios.get(this.url)
            .then(respuesta => {
                res = respuesta.data;
                for (let i = 0; i < res.length; i++) {
                    this.personas.push(res[i].username);
                    this.habilitado[i] = true;
                }

                this.orden = this.personas.slice();
                this.orden.sort();

                this.personas.sort(function() { 
                    return Math.random() - 0.1 
                });
            })
            .catch(error => console.log(error));
    },

    methods:{
        pasar(nombre) {
            //PASO EL NOMBRE SELECCIONADO A RESULTADO Y DESHABILITO EL BOTON CORRESPONDIENTE
            indice = this.resultado.length;
            persona = this.orden[indice];
            if (nombre === persona) {
                this.resultado.push(nombre);
                this.mensaje_error = '';
                this.sonido_pasar.play();
                for (let i = 0; i < this.personas.length; i++) {
                    if (this.personas[i] === nombre) {
                        this.habilitado[i] = false;
                    }
                }
            }else{
                this.mensaje_error = 'El nombre seleccionado no va en esa posición';
                this.errores = this.errores + 1;
                this.sonido_error.play();
            }
        },

        reiniciar() {
            //RESETEO VARIABLES Y CAMBIO EL ORDEN DE PERSONAS
            this.resultado = [];
            this.errores = 0;
            this.mensaje = '';
            this.fin = false;
            this.sonido_juego.load();
            this.reiniciarCrono();
            this.despausar();
            for (let i = 0; i < this.habilitado.length; i++) {
                this.habilitado[i] = true;
            }

            this.personas.sort(function() { 
                return Math.random() - 0.1
            });
        },
        
        verificar(array1,array2) {
            // COMPARO ARRAYS
            return array1.toString() === array2.toString(); 
        },

        cronometro() {
            // FUNCION CRONOMETRO UTILIZANDO SUMAS Y COMPARACIONES
            if (this.centesimas < 99) {
                this.centesimas++;
                if (this.centesimas < 10) { 
                    this.centesimas = "0"+this.centesimas;
                }
            }
        
            if (this.centesimas == 99) {
                this.centesimas = -1;
            }
        
            if (this.centesimas == 0) {
                this.segundos ++;
                if (this.segundos < 10) { 
                    this.segundos = "0"+this.segundos;
                }
            }
        
            if (this.segundos == 59) {
                this.segundos = -1;
            }
        
            if ((this.centesimas == 0) && (this.segundos == 0)) {
                this.minutos++;
                if (this.minutos < 10) { 
                    this.minutos = "0" + this.minutos;
                }
            }
        
            if (this.minutos == 59) {
                this.minutos = -1;
            }
        
            if ((this.centesimas == 0) && (this.segundos == 0) && (this.minutos == 0)) {
                this.horas ++;
                if (this.horas < 10) { 
                    this.horas = "0" + this.horas 
                }
            }
        },

        pausar() {
            clearInterval(this.control);
            this.pausa = true;
            this.sonido_juego.pause();
            this.sonido_pausa.play();
        },

        despausar() {
            this.control = setInterval(this.cronometro,10);
            this.jugar = true;
            this.pausa = false;
            this.sonido_juego.play();
        },

        reiniciarCrono() {
            clearInterval(this.control);
            this.centesimas = 0;
            this.segundos = 0;
            this.minutos = 0;
            this.horas = 0;
        },

    },

    watch:{
        resultado(nuevo, antiguo) {
            // COMPARO LA LONGITUD DE RESULTADO CON LA DE PERSONAS PARA VERIFICAR SI CONTUNUA JUGANDO O NO
            if(nuevo.length == this.personas.length) {
                this.fin = true;
            }

            //SI TERMINA EL JUEGO MUESTRO SU PUNTAJE
            if (this.fin && this.verificar(nuevo, this.orden)) {
                this.mostrar_exito = true,
                this.sonido_exito.play();
                this.sonido_juego.pause();
                clearInterval(this.control);

                // VERIFICO SI TIENE RECORD Y GUARDO EL MISMO
                if(this.record){
                    if ((this.horas_record >= this.horas) || (this.minutos_record >= this.minutos) || (this.segundos_record >= this.segundos) || (this.centesimas_record >= this.centesimas)) {
                        this.horas_record = this.horas;
                        this.minutos_record = this.minutos;
                        this.segundos_record = this.segundos;
                        this.centesimas_record = this.centesimas;
                    }
                    if (this.errores_record > this.errores) {
                        this.errores_record = this.errores;
                    }
                }else{
                    this.errores_record = this.errores;
                    this.horas_record = this.horas;
                    this.minutos_record = this.minutos;
                    this.segundos_record = this.segundos;
                    this.centesimas_record = this.centesimas;
                    this.record = true;
                }

            } else {
                this.mensaje = '';
            }

        }

    }
});