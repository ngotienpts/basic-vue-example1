<script>
import { ref } from "vue";
import axios from "axios";
import Styles from "./Styles.vue";
import TodoItem from "./TodoItem.vue";
import AddTodo from "./AddTodo.vue";

export default {
    components: { Styles, TodoItem, AddTodo },
    setup() {
        const todos = ref([]);

        const getTodo = async () => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/todos?_limit=5"
                );
                todos.value = response.data;
            } catch (error) {
                console.log(error);
            }
        };

        getTodo();

        // check
        const handleCheck = (id) => {
            todos.value = todos.value.map((todo) => {
                if (todo.id === id) todo.completed = !todo.completed;

                return todo;
            });
        };

        // delete
        const handleDelete = async (id) => {
            try {
                await axios.delete(
                    `https://jsonplaceholder.typicode.com/todos/${id}`
                );
                const newTodo = todos.value.filter((todo) => todo.id !== id);
                todos.value = newTodo;
            } catch (error) {
                console.log(error);
            }
        };

        // add item
        const handleAddItem = async (newItem) => {
            try {
                const response = await axios.post(
                    "https://jsonplaceholder.typicode.com/todos",
                    newItem
                );
                todos.value = [...todos.value, response.data];
            } catch (error) {
                throw new Error(error);
            }
        };

        return { todos, handleCheck, handleDelete, handleAddItem };
    },
};
</script>
<template>
    <AddTodo @addItem="handleAddItem" />

    <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todoProps="todo"
        @checkItemId="handleCheck"
        @deleteItemId="handleDelete"
    />
</template>
