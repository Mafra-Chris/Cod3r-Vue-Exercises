new Vue({
    el: '#app',
    data: {
        iniciar: true,
        widthP: 100 ,
        widthM: 100,
        vidaP: 100 ,
        vidaM: 100,
        logs: []
    },
    methods: {
        iniciarJogo() {
            this.iniciar = false
            this.log = []
            this.vidaM = 100
            this.vidaP = 100
        },
        atacar() {
            danoP = (Math.floor(Math.random() * 10) + 1);
            danoM = (Math.floor(Math.random() * 10) + 1) + (Math.floor(Math.random() * 3) + 1);

            if (this.vidaP > 0 && this.vidaP >= danoM) {
                this.vidaP = this.vidaP - danoM;
                this.widthP = `${this.vidaP}%`
            } else {
                this.widthP = 0 + '%'
            }

            if (this.vidaM > 0 && this.vidaM >= danoP) {
                this.vidaM = this.vidaM - danoP;
                this.widthM = `${this.vidaM}%`
            } else {
                this.widthM = 0 + '%'
            }

            this.registerLog(`Jogador atingiu Monstro com ${danoP}`, 'player');
            this.registerLog(`Monstro atingiu Jogador com ${danoM}`, 'monster');
        },
        especial() {
            danoM = (Math.floor(Math.random() * 10) + 1);
            danoP = (Math.floor(Math.random() * 12) + 1);

            if (this.vidaP > 0 && this.vidaP >= danoM) {
                this.vidaP = this.vidaP - danoM;
                this.widthP = `${this.vidaP}%`
            } else {
                this.widthP = 0 + '%'
            }

            if (this.vidaM > 0 && this.vidaM >= danoP) {
                this.vidaM = this.vidaM - danoP;
                this.widthM = `${this.vidaM}%`
            } else {
                this.widthM = 0 + '%'
            }

            this.registerLog(`Jogador atingiu Monstro com ${danoP}`,' player');
            this.registerLog(`Monstro atingiu Jogador com ${danoM}`, 'monster');
        },
        curar() {
            danoM = (Math.floor(Math.random() * 6) + 1);
            curaP = (Math.floor(Math.random() * 12) + 1);

            if (this.vidaP > 0 && this.vidaP >= danoM) {
                this.vidaP = this.vidaP - danoM;
                this.widthP = `${this.vidaP}%`
            } else {
                this.widthP = 0 + '%'
            }

            if (this.vidaP < 100) {
                this.vidaP += curaP
            }
            this.registerLog(`Jogador curou ${curaP}`, 'player');
        },
        desistir(){
            this.vidaP = 100
            this.vidaM = 100
            this.widthP = `${this.vidaP}%`
            this.widthM = `${this.vidaM}%`
            this.iniciar = true;
        },
        registerLog(text, cls){
            this.logs.unshift({text, cls})
        }
    }
})