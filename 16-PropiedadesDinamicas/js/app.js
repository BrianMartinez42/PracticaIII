Vue.component('boton', {
    template: `<a class="boton" :style="'background-color:' + color" :href="enlace">{{ anchorText }}</a>`,
    props: {
        color: String,
        enlace: {
            type: String,
            default: ""
        },
        anchorText: String,
    }
});
new Vue({
    el: "#app",
    data: {
        botones: [
            {enlace: "http://www.sedesonline.edu.ar", anchorText: "Campus", color: "cornflowerblue"},
            {enlace: "https://github.com/marbrian", anchorText: "GitHub", color: "gray"},
            {enlace: "https://www.linkedin.com/in/brian-ezequiel-mart%C3%ADnez-040a73208/", anchorText: "LinkedIn", color: "dodgerblue"},
        ]
    }
});