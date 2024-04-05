import { createTodo, createProject } from "./events"

function startEvents(instance) {
    createProject(instance)

    createTodo(instance)
}

export { startEvents }