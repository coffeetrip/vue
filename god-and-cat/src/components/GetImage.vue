<template>
  <button v-on:click="onAnimalImage">{{btnName}}</button>
</template>

<script>
export default {
    props: {  //App.vue에서 사용함
        btnName: String,
    },
    data: function(){
        return {

        }
    },
    methods: {
        onAnimalImage: function(){
            //console.log(this.btnName)
            this.$emit('getAnimalImage', this.btnName)  // app.vue 부모로 보내줌
        }
    }
}
</script>

<style>

</style>