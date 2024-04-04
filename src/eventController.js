import { createTodo, createProject, openProject } from "./events"

function startEvents(instance) {
    createProject(instance)

    createTodo(instance)
}

export { startEvents }