


new Vue({
    el: '#desafio',
    data: {
        nome: 'Christiano',
        idade: 20,
        linkPhoto: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg'
    },
    methods:{
        random: function (){
            let num = Math.random()
            return num.toFixed(2);
        }
    }
})