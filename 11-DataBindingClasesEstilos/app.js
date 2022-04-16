new Vue({
    el: "#app",
    data: {
        mode: false,
        logged: true,
        mensajes: {
            in: "Logeado como @Brian.",
            out: "Te has desconectado."
        },
    },
    computed:{
      mensaje(){
          return this.logged ? this.mensajes.in : this.mensajes.out
      },  
      estiloLogear(){
          return{
              'logged-in': this.logged,
              'logged-out': !this.logged,
          }
      },
      estiloModo(){
        return{
            'modo-oscuro': this.mode,
            'modo-claro': !this.mode,
        }
      },
    }
})