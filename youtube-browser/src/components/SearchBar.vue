<template>
  <div class="text-center">
    <!-- 1. 이벤트 만들기 -->
    <input class="w-75" type="text" v-on:input="onInput">
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    // 이벤트 함수 만들기(function생략가능)
    onInput: function(e){
      // 한단계 위 부모에게 전달(이벤트를 뭐라 부를지(부모객체에서 부를 이름), 사용자가 입력한 데이터)
      this.$emit('inputChange', e.target.value)
    }
  }
}
</script>

<style>

</style>