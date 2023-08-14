<script>
export default {};
</script>

<style>
.header {
    background-color: #646464;
    width: 100%;
}
.header h1 {
    text-align: center;
}
.todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #f4f4f4;
    color: #333;
    border-bottom: 1px solid #dbdbdb;
}
.todo-action {
    display: flex;
    align-items: center;
    flex: 1;
}
.todo-label {
    flex: 1;
    font-size: 20px;
    margin-left: 20px;
}
.is-completed {
    text-decoration: line-through;
    color: #dbdbdb;
}
.btn-delete {
    cursor: pointer;
}

.form-group {
    display: flex;
    width: 100%;
}
.form-input {
    flex: 10;
    height: 48px;
    padding: 5px 10px;
    font-size: 1rem;
}
.form-submit {
    flex: 2;
    height: 48px;
}
ul li a:hover {
    color: aquamarine;
}
</style>
