const vm = new Vue({
    el: "#app",
    data:{
        form:{
            nombre: '',
            apellido: '',
            mensaje: '',
            contacto: '',
            productos: '',
            acepta: false,
        }
    },
});
vm.$watch('form', (nuevo, viejo) => {
    console.log(nuevo);

}, {deep: true})