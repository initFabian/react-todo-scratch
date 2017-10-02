export interface TodoType {
    completed: boolean
    onClick: (event: Event) => void
    title: string
}

export interface StoreState {
    todos: Array<TodoType>
    filter: {
        isCompleted: boolean
    }
    errors: Array<String>
}