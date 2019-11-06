//todo card 컴포넌트 시작

  Vue.component('todo-card', {
    template: `
    <div>
      <h1>{{title}}</h1>
      <h2>{{content}}</h2>
    </div>
    `,
    // 함수로 만든이유 : 데이터를 독립시키기 위함(컴포넌트는 독립적인 공간을 가짐)
    data: function(){
      return {

      }
    },
    methods: {

    },
    props: {  // 부모(div id=app)가 자식(todo-x)에게 변수를 전달
      title: {  
        type: String,
        required: true,
        validator: function(input){
          if (input.length < 5){
            return false
          }
          return true
        }
      },
      content: String
    }, 
  })

//todo card 컴포넌트 끝