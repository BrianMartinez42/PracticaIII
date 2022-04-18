const vm = new Vue({
    created(){
        var url ="http://jsonplaceholder.typicode.com/users";
        fetch(url)
        .then(respuesta =>respuesta.json())
            .then(respuesta => {this.usuarios = respuesta })
    },
    el: '#app',
    data: {
        usuarios: [],
    }
});