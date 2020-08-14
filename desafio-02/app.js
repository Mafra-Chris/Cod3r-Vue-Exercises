new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta: function(){
            alert("Exibindo Alerta");
        },
        lerValor: function(){
            return this.valor = event.target.value;
        }
    }
})