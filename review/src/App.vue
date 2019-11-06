<template>
  <div id="app">
    <h1>yang</h1>
    <!-- input tag만 양방향성이 가능하게 v-model을 사용할 수 있다. -->
    <!--  사용자가 입력하는 것(사용자입력{{INPUT}}(V-MODEL)->VIEWMODEL->V-MODEL바뀜)) -->
    <!-- 즉 둘다 바뀜(V-MODEL과 VIEWMODEL)) -->
    <input type="text" v-model="input">
    <p>{{filteredInput}}</p>
    <h3>{{time}}</h3>

    <h1>오늘의 운세</h1>
    <!-- propsLuck은 자식Todolucky에서 props로 받아온다. -->
    <!-- for문을 돌리면 component가 계속생성되기 때문에 key를 꼭 써서 고유값을 줘야한다. -->
    <TodayLucky v-for="lucky in luckys" :key="lucky" v-bind:propsLuck="lucky"/>
  </div>
</template>

<script>
import TodayLucky from './components/TodayLucky.vue'

export default {
  name: 'app',
  components: {
    TodayLucky
  },
  data: function(){
    return {
      input: '',
      luckys: [
        {
          star: '물병자리',
          luck: '오늘 괜한 조급함으로 일을 그르치게 될 수도 있으니 급할수록 돌아..'
        },
        {
          star: '물고기자리',
          luck: '전반적으로 그리 좋지 않은 상황에 위치해 있군요. 특히 금전운이 ..'
        },
        {
          star: '양자리',
          luck: '맞서 싸우기보다 한 발 물러서서 베풀어야 할 하루입니다. 그것이 ..'
        },
        {
          star: '쌍둥이자리',
          luck: '특별한 길운은 없지만 그렇다고 짓궂은 운명의 훼방을 걱정할 필요..'
        }
      ]
    }
  },
  computed: {  // 이 안의 종속된 데이터가 바뀌면 함수를 실행한다.(종속성을 띔)
    time: function(){  // 그런데 time은 바뀌지 않는다. => 종속된 데이터가 없기 때문
      return new Date()  // 그래서 첫번째 데이터만 보여준다.
    },
    filteredInput: function(){  // input값이 바뀌면 함수를 실행한다.
      // 하이를 여러번 사용해도 전부 바뀐다.
      return this.input.replace(/하이|공현아|바보|윤서영/g, '**')

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
