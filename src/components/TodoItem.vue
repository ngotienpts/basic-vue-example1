<script>
import Styles from "./Styles.vue";
export default {
    components: { Styles },
    props: ["todoProps"],
    setup(props, context) {
        // check
        const handleCheck = () => {
            context.emit("checkItemId", props.todoProps.id);
        };

        // delete
        const handleDelete = () => {
            context.emit("deleteItemId", props.todoProps.id);
        };

        return { handleCheck, handleDelete };
    },
};
</script>
<template>
    <div class="todo-item">
        <div class="todo-action" @change="handleCheck">
            <input
                type="checkbox"
                :name="todoProps.title"
                :id="todoProps.id"
                :checked="todoProps.completed"
                class="todo-input"
            />
            <label
                :for="todoProps.id"
                :class="[
                    'todo-label',
                    todoProps.completed ? 'is-completed' : '',
                ]"
                >{{ todoProps.title }}</label
            >
        </div>
        <button class="btn-delete" @click="handleDelete">Delete</button>
    </div>
</template>
