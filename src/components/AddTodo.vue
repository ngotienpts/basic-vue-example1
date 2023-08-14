<script>
import { ref } from "vue";
export default {
    setup(_, context) {
        const inputValue = ref("");
        const inputRef = ref(null);

        const handleAddItem = (e) => {
            e.preventDefault();

            if (inputValue.value.trim() === "") {
                alert("Không được để trống");
                inputRef.value.focus();
                return;
            }

            const newItem = {
                title: inputValue.value,
                completed: false,
            };

            context.emit("addItem", newItem);

            inputValue.value = "";

            inputRef.value.focus();
        };

        return { inputValue, inputRef, handleAddItem };
    },
};
</script>
<template>
    <form action="" class="form-group" @submit="handleAddItem">
        <input
            ref="inputRef"
            type="text"
            name=""
            id=""
            class="form-input"
            v-model="inputValue"
        />
        <input type="submit" value="Add" class="form-submit" />
    </form>
</template>
