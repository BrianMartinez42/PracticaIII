Vue.component('tareas-todas',{
    props: ['tareas'],
    template: `
    <div>
        <h3>Todas</h3>
        <ul>
            <li v-for="tarea in tareas">
                {{ tarea.titulo }}
            </li>
        </ul>
    </div>
    `,
})

Vue.component('tareas-urgentes',{
    props: ['tareas'],
    template: `
    <div>
        <h3>Urgentes</h3>
        <ul>
            <li v-for="tarea in tareasAmostrar">
                {{ tarea.titulo }}
            </li>
        </ul>
    </div>
    `,
    computed: {
        tareasAmostrar() {
            return this.tareas.sort((a,b) => b.prioridad - a.prioridad);
        }
    }
})

Vue.component('tareas-finalizadas',{
    props: ['tareas'],
    template: `
    <div>
        <h3>Finalizadas</h3>
        <ul>
            <li v-for="tarea in tareasFinalizadas">
                {{ tarea.titulo }}
            </li>
        </ul>
    </div>
    `,
    computed: {
        tareasFinalizadas(){
            return this.tareas.filter(tarea => tarea.completado === true);
        }
    }
})

new Vue({
    el: '#app',
    data: {
        tabs: ['todas', 'urgentes', 'finalizadas'],
        actual: ['todas'],
        tareas: [
            {
                titulo: 'No reinventar la rueda',
                prioridad: 1,
                completado: false,
            },
            {
                titulo: 'Aprender Vue-cli',
                prioridad: 9,
                completado: false,
            },
            {
                titulo: 'Aprender JS',
                prioridad: 10,
                completado: true,
            },
            {
                titulo: 'Aprender a usar componentes',
                prioridad: 10,
                completado: false,
            },
        ]
    },
    computed: {
        tareasSeleccionadas(){
            return `tareas-${this.actual}`;
        }
    },
    filters: {
        capitalizar(contenido) {
            return contenido.substring(0,1).toUpperCase() + contenido.substring(1, contenido.lenght);
        }
    }
})