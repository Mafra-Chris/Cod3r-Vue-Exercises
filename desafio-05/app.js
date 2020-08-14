new Vue({
	el: '#app',
	data: {
		ver: false,
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livro: {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		},
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		},
		nomes: ['Milena', 'Chris', 'Cintia', 'Wainer']
	},
	methods: {
		alternar(){
			if(this.ver == true){
				this.ver = false
			}else if(this.ver == false){
				this.ver = true
			}
			console.log(this.ver)
		}
	}
});
