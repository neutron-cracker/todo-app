import { Task } from '../models/Task'
const localStorageKey = 'Tasks'
export class TaskStorageService {
  update(tasks: Task[]) {
    const text = JSON.stringify(tasks)
    window.localStorage.setItem(localStorageKey, text)
  }
  get(): Task[] {
    const text = window.localStorage.getItem(localStorageKey)
    if (text === null) {
      return []
    }

    const obj: any[] = JSON.parse(text)
    const tasks = obj.map(x => new Task(x.id, x.title, x.completed))
    console.log(tasks)
    return tasks
  }
}