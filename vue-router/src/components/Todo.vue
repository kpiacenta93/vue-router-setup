<script setup>
import { ref, onMounted, computed, watch } from 'vue';

let todos = ref([]);
const name = ref('');
const input_content = ref('');
const input_category = ref(null);

const finishedTodos = ref(0);

const todosDone = computed(() => {
  return todos.value.filter(todo => todo.done).length;
});

const todos_asc = computed(() => todos.value.sort((a, b) => {
  return b.createdAt - a.createdAt;
}));

const addTodo = () => {
  if (input_content.value.trim() === '') {
    return;
  }

  todos.value.push({
    content: input_content.value,
    done: false,
    createdAt: new Date().getTime(),
  });
  input_content.value = ''; 
};

const lineThrough = (todo) => {
  todo.done = !todo.done;
  updateFinishedTodos();
};

const deleteTodo = (todo) => {
  const index = todos.value.indexOf(todo);
  if (index !== -1) {
    todos.value.splice(index, 1);
    // updateFinishedTodos();
    console.log(finishedTodos)
  }
};

const updateFinishedTodos = () => {
  finishedTodos.value++;
};

const clearTodos = () => {
   todos.value = [];
};

const finishedPercentage = (finishedCount, totalCount) => {

    if(totalCount === 0) {
        return 0;
    }
    let percentage = (finishedCount / totalCount) * 100; 

    if(percentage >= 50){
        alert('You are halfway there keep going!')
    }

    return percentage; 
}

watch(name, (newVal) => {
  localStorage.setItem('name', newVal);
});

watch(todos, (newVal) => {
  localStorage.setItem('todos', JSON.stringify(newVal));
}, {
  deep: true,
});

onMounted(() => {
  name.value = localStorage.getItem('name') || '';
});
</script>


<template>
  <div class="Todo-Container">
    <section class="greeting">
      <h2 class="title">
        What's up,
      </h2>
      <input type="text" placeholder="name here" class="nameHolder" v-model="name" />
      
    </section>
    <button v-on:click="clearTodos" class="clearTodoButton">clear todos</button>

    <section class="create-todo">
      <h3>CREATE A TODO</h3>
      <form action="" @submit.prevent="addTodo">
        <h4>What's on your todo list?</h4>
        <p>Finished Todos: {{ finishedTodos }}</p>
        <p>Percentage Finished: {{ finishedPercentage(todosDone, todos.length) }}%</p>

        <input type="text" class="todo-input" placeholder="e.g. make a video!" v-model="input_content">
        <input type="submit" value="add todo" class="addTodo">
      </form>
    </section>

    <section class="todo-list">
      
      <div class="list">
        <div v-for="todo in todos_asc" class="todo-item">
          <span :class="todo.done ? 'done' : ''">{{ todo.content }}</span>
          <button class="deleteButton" @click="lineThrough(todo)">mark todo finished</button>
          <button class="removeTodo" @click="deleteTodo(todo)">Delete Todo</button>
        </div>
      </div>
    </section>
</div>
</template>


<style scoped>
* {
    font-family: monospace;
    color: #f0ebeb; /* Text color */
    /* background-color: #2e2d2dd2; Dark gray background color */
    
}
.todo-item {
    /* background-color: #2e2d2d9d; */
    border-radius: 15px;
    border: 1px solid black;
}
.nameHolder {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-right: 10px;
    border-radius: 15px;
}

.Todo-Container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    height: 75vh;
    width: 100vh;
    font-family: monospace;
    background-color: #2e2d2de2;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 15px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
}

.todo-list {
    width: 100%;
    max-width: 350px;
    text-align: center;
    margin-bottom: 20px;
    background-color: #2e2d2d;
    border: 1px solid white;
}

.nameHolder {
    font-size: 1.2rem;
    width: 100%;
    padding: 5px;
}

.todo-input {
    width: 300px;
    padding: 10px;
    margin-top: 10px;
    background-color: rgba(176, 164, 164, 0.354);
    border-radius: 5px 5px 5px 5px;
    color: black;
    
}

.todo-item {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 5px 0;
    background-color: #2e2d2d;
}

.done {
    text-decoration: line-through;
}

.addTodo {
    justify-content: space-around;
    align-items: end;
    border: 1px solid #535bf2;
    color: grey;
    width: 100px;
    margin-top: 10px;
    border-radius: 15px;
    height: 30px;
    margin-left: 10px;
}

.addTodo:hover {
    transform: scale(1.1);
}

.deleteButton {
    display: block;
    justify-content: space-around;
    align-items: end;
    border: 1px solid #535bf2;
    color: grey;
}

.todo-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100vh;
    background-color: #2e2d2dc0;
    border-radius: 15px;
}

.removeTodo {
    display: flex;
    border: 1px solid #535bf2;
    color: grey;
}

.greeting {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 20px;
    background-color: #2e2d2d9e;
    border-radius: 15px;
    height: 200px;
    /* border: 1px solid #535bf2; */
    margin-top: 5px;
}

.greeting-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2e2d2d;
    border-radius: 15px;
}

.title {
    margin-right: 10px;
    border-radius: 15px;
    height: 100px;
    background-color: #2e2d2d4d;
}

.nameHolder {
    font-size: 1.2rem;
    border: 1px solid white;
    width: 100%;
    padding: 5px;
}

.todoList {
    border: 1px solid grey;
    background-color: #2e2d2d;
    border-radius: 15px;
    border: 1px solid white;
}

.list {
    border-radius: 15px 15px 15px 15px;
    background-color: #2e2d2d;
}

.greeting, .title {
    display: flex;
    width: 500px;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-color: #2e2d2db0;
}

.create-todo {
    width: 500px;
    height: 210px;
    /* border: 1px solid white; */
    border-radius: 15px;
    margin-bottom: 10px;
    background-color: #2e2d2d;
}

.clearTodoButton {
    margin-bottom: 35px;
    width: 50vh;
    border: 1px solid #535bf2;
    height: 50px;
    font-size: 1.5rem;
    transition: background-color 0.5s ease;
    background-color: #2e2d2dec;
}

.clearTodoButton:hover {
    transform: scale(1.1);
}

.list {
    background-color: #2e2d2d2e;
}

.todo-list, .nameHolder, .greeting, .create-todo, .list {
    background-color: inherit; 
}

.common-background {
    background-color: rgba(46, 45, 45, 0.95); 
}
</style>
