<template>
<div class="contador">
    <span>{{ contador }}</span>
    <button @click="subtrair">-</button>
    <button @click="adicionar">+</button>
</div>
</template>

<script>
  export default{
    data(){
      return{
        contador: 0
      }
    },
    methods: {
        adicionar(){
            this.contador++
        },
        subtrair() {
            this.contador--
        }
    }
  }
</script>

<style>
    .contador span{
        border-bottom: 1px solid #CCC;
    }

    .contador button{
      height: 30px;
      width: 30px;
      border-radius: 15px;
      background-color: coral;
      color: #FFF;
      margin-left: 10px;
      outline: none;  
    }
</style>