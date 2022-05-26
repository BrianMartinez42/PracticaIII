Vue.component('base-input',{
    props:['value'],
    template: `
    <div class="entradas">
        <label v-bind:for="id">
            <slot></slot>
        </label>
        <input 
            v-bind:value="value" 
            v-on:input="$emit('input', $event.target.value)"
            type="text" v-bind:id="id">
    </div>
    `,
    data(){
        return {
            id: `input-${Math.floor(Math.random() * 10) + 1}`
        }
    }
})
new Vue({
    el: "#app",
    data: {
        busqueda: "",
        nombre: "",
        correo: "",
    }
})
