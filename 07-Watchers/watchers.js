new Vue({
    el: "#app",
    data:{
        password: null,
        estado: "Introduce nueva contraseña...",
        username: 'Brian',
        novalidos: [
            "password",
            "12345678",
            "contraseña",
        ],
    },
    watch:{
        password(nuevo, antiguo){
            // Si la contraseña incluye algun valor del array, mostrar error
            if(this.novalidos.indexOf(nuevo) > -1){
                this.estado = "Contraseña no Válida";
                return false;
            }
            // Si la contraseña incluye el nombre de usuario, mostrar error
            if (nuevo.includes(this.username)) {
                this.estado = 'La contraseña debe ser diferente a su nombre';
                return false;                
                // Si la contraseña es menor a 8, mostrar error
            } else if (nuevo.length < 8){
                this.estado = "La contraseña es demasiado corta"; 
                return false;  
            }

            this.estado = "Contraseña Correcta";
        }
    }
})