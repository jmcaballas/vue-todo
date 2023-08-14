import { ref } from "vue";
import { defineStore } from "pinia";

type TodoItems = {
  todoText: string;
  done: boolean;
};

export const useTodoStore = defineStore("todo", () => {
  const savedTodoItems = JSON.parse(localStorage.getItem("todoItems") || "[]");
  const todoItems = ref<TodoItems[]>(savedTodoItems);

  function addItem(newItem: string) {
    todoItems.value.push({ todoText: newItem, done: false });
    localStorage.setItem("todoItems", JSON.stringify(todoItems.value));
  }

  function editText(index: number, newText: string) {
    todoItems.value[index].todoText = newText;
    localStorage.setItem("todoItems", JSON.stringify(todoItems.value));
  }

  function editDone(index: number) {
    todoItems.value[index].done = !todoItems.value[index].done;
    localStorage.setItem("todoItems", JSON.stringify(todoItems.value));
  }

  function deleteItem(index: number) {
    todoItems.value.splice(index, 1);
    localStorage.setItem("todoItems", JSON.stringify(todoItems.value));
  }

  return { todoItems, addItem, editText, editDone, deleteItem };
});
