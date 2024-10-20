<script setup lang="ts">
import { Task } from '@/models/Task';
import Checkbox from 'primevue/checkbox'
import Card from 'primevue/card';

import { ref } from 'vue';
import { TaskStorageService } from '@/services/TaskStorageService';

const initialTasks: Task[] = [
  new Task(1, "Buy groceries", false),
  new Task(2, "Read a book", false),
  new Task(3, "Write a blog post", false),
  new Task(4, "Exercise", true),
  new Task(5, "Call mom", false),
  new Task(6, "Clean the house", false),
  new Task(7, "Pay bills", false),
  new Task(8, "Fix the bike", false),
  new Task(9, "Plan the trip", false),
  new Task(10, "Cook dinner", false),
  new Task(11, "Attend meeting", false),
  new Task(12, "Finish project", true),
  new Task(13, "Water plants", false),
  new Task(14, "Walk the dog", false),
  new Task(15, "Reply to emails", false),
  new Task(16, "Organize desk", false),
  new Task(17, "Update software", false),
  new Task(18, "Backup files", false),
  new Task(19, "Learn a new skill", false),
  new Task(20, "Meditate", false)
];

const taskStorageService = new TaskStorageService()
const tasks = ref(taskStorageService.get())

if (tasks.value.length === 0) {
  tasks.value = initialTasks
}

function getTaskById(id: number): Task {
  return tasks.value.find(x => x.id === id)!;
}

function omTaskStatusChange(task: Task) {
  getTaskById(task.id).toggleCompletion()
  taskStorageService.update(tasks.value)
}
</script>

<template>
  <div class="h-full bg-surface-100 dark:bg-surface-700">
    <div class="h-full p-6 overscroll-contain overflow-auto">
      <ul class="h-full space-y-2">
        <li v-for="task in tasks" :key="task.id">
          <Card class="dark:!bg-surface-800">
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
  </div>
</template>