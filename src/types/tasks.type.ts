export interface Task {
    title: string;
    description: string;
    category: string;
    dueDate: string;
    createdDate: string;
    progress: number;
}

export interface TaskStep {
    title: string;
    data: Task[];
}

export interface TaskState {
    showAddTaskModal: boolean;
    showMoreModal: boolean;
}