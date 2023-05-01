import { pipe, curry } from "./tools";

enum Status {
  NEW = "NEW",
  ASSIGNED = "ASSIGNED",
  DONE = "DONE",
}

type Task = {
  id: string;
  name: string;
  stats: Status;
  assignedTo?: string;
};

namespace Task {
  export function create({ id, name }: Partial<Task>): Task {
    return {
      id: id || Math.random().toString(36).substr(2, 9),
      name: name!,
      stats: Status.NEW,
    };
  }

  export function assign(userId: string, task: Task): Task {
    return {
      ...task,
      stats: Status.ASSIGNED,
      assignedTo: userId,
    };
  }

  export function printable(task: Task): string {
    return `Id: ${task.id}, \nName: ${task.name}, \nStatus: ${task.stats}, Assigned to: ${task.assignedTo}`;
  }
}

const me = "1";

const assignToMe = curry(Task.assign, me);
const createInitialTask = Task.create;

const assignedPipe = pipe(createInitialTask, assignToMe);

console.log(Task.printable(assignedPipe({ name: "Task 1", id: "1" } as Task)));
