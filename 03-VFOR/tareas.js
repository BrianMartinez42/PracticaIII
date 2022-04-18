new Vue({
    el: "#app",
    data: {
        usuario: {
            username: 'Brian',
            role: 'admin'
        },
        tareas: [
            {nombre: 'Aprender JavaScript moderno', tiempo: 3},
            {nombre: 'Aprender Vue.js', tiempo: 7},
            {nombre: 'Reparar el coche', tiempo: 22},
            {nombre: 'Viajar más', tiempo: 16},
            {nombre: 'Comprar la cena', tiempo: 12},
            {nombre: 'Mejorar como desarrollador', tiempo: 9},
            {nombre: 'Dar un curso', tiempo: 14},
        ]
    },
});

