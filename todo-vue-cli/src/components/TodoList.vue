<template>
	<!-- 하나로 묶어줘야한다. -->
	<div class="todo-list"> 
		<h1>{{category}}</h1>
		<input type="text" v-model="newTodo" v-on:keyup.enter="addTodo">
		<button v-on:click="addTodo">+</button>
		<li v-for="todo in todos" v-bind:key="todo.id">
			<span>{{ todo.content }}</span>
			<button v-on:click="removeTodo(todo.id)">x</button>
		</li>
	</div>
</template>

<script>
export default {
 props: ['category'],  // 포넌트에서 사용 할 데이터 중 변동되지 않는 데이터를 다룰 때 사용
		data: function(){
			return {
				todos: [],
				newTodo: '',
			}
		},
		methods: {
			addTodo: function() {
				if (this.newTodo.length != 0) {
					this.todos.push({
						id: Date.now(),
						content: this.newTodo,
						completed: false,
					})
					this.newTodo = ''
				}
			},
			removeTodo: function(todoID) {
				this.todos = this.todos.filter(todo => {
					return todo.id !== todoID
				})
			}  
		},
}
</script>

<style>

</style>