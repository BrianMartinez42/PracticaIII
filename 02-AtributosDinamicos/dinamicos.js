new Vue({
    el: '#bear',
    data:{
        baseUrl: 'https://placebear.com',
        ancho: 150,
        alto: 150,
    },
    computed:{
        urlOsosCompleta(){
            return `${this.baseUrl}/${this.ancho * 3}/${this.alto * 3}`;
        }
    }
});