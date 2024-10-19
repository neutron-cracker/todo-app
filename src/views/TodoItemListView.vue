<script setup lang="ts">
import { TodoItem } from '@/models/TodoItem';
import Checkbox from 'primevue/checkbox'
import Card from 'primevue/card';

import { ref } from 'vue';

const initialTodos: TodoItem[] = [
  new TodoItem(1, "Buy groceries", false),
  new TodoItem(2, "Read a book", false),
  new TodoItem(3, "Write a blog post", false),
  new TodoItem(4, "Exercise", true),
  new TodoItem(5, "Call mom", false),
  new TodoItem(6, "Clean the house", false),
  new TodoItem(7, "Pay bills", false),
  new TodoItem(8, "Fix the bike", false),
  new TodoItem(9, "Plan the trip", false),
  new TodoItem(10, "Cook dinner", false),
  new TodoItem(11, "Attend meeting", false),
  new TodoItem(12, "Finish project", true),
  new TodoItem(13, "Water plants", false),
  new TodoItem(14, "Walk the dog", false),
  new TodoItem(15, "Reply to emails", false),
  new TodoItem(16, "Organize desk", false),
  new TodoItem(17, "Update software", false),
  new TodoItem(18, "Backup files", false),
  new TodoItem(19, "Learn a new skill", false),
  new TodoItem(20, "Meditate", false)
];

const todos = ref(initialTodos)

function getTaskById(id: number): TodoItem {
  return todos.value.find(x => x.id === id)!;
}

function omTaskStatusChange(task: TodoItem) {
  getTaskById(task.id).toggleCompletion()
}
</script>

<template>
  <div class="h-full">
    <ul class="h-full space-y-2">
      <li v-for="task in todos" :key="task.id">
        <Card>
          <template #content>
            <div class="space-x-4 flex">
              <Checkbox class="flex-none" :model-value="task.completed" :binary="true" :input-id="task.id.toString()" v-on:change="_ => omTaskStatusChange(task)" />
              <label class="flex-grow" :class="task.completed ? 'line-through' : ''" :for="task.id.toString()">{{ task.title }}</label>
            </div>
          </template>
        </Card>
      </li>
    </ul>
  </div>
</template>