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
  export function create(id: string, name: string): Task {
    return {
      id,
      name,
      stats: Status.NEW,
    };
  }

  export function assign(userId: string): (task: Task) => Task {
    return (task: Task) => ({
      ...task,
      stats: Status.ASSIGNED,
      assignedTo: userId,
    });
  }

  export function printable(task: Task): string {
    return `Id: ${task.id}, \nName: ${task.name}, \nStatus: ${task.stats}, Assigned to: ${task.assignedTo}`;
  }
}

const me = "1";
const task = Task.create("1", "Buy milk");
const assignableTask = Task.assign(me);
const assignedTask = assignableTask(task);
console.log(Task.printable(assignedTask));
