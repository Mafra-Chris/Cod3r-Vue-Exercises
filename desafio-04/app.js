new Vue({
	el: '#desafio',
	data: {
		classe1:'destaque',
		classe2: '',
		alertColor: 'alert-color',
		big: 'big',
		escolhaCSS: '',
		escolhaEstilo: '',
		encolher: 'false',
		width: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque'
					? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() =>{
				valor +=5;
				this.width = `${valor}%`;
				if(valor ==100) {
					clearInterval(temporizador)
				};
			}, 500);
		},
		setEncolher(event){
			if(event.target.value == "true"){
				this.encolher = true
			}else if(event.target.value == "false"){
				this.encolher = false
			}
		}
	}
})
