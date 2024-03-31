import { showProject } from "./showProject"

class Storage {
    constructor() {
        if (localStorage.getItem('Storage')) {
            this.storage = JSON.parse(localStorage.getItem('Storage'))
        } else {
            this.storage = {
                'Inbox': [],
                'Today': [],
                'Week': []
            }
            this.refreshLocalStorage(this.storage)
            showProject(this.storage['Inbox'])
        }
    }

    refreshLocalStorage(value) {
        localStorage.setItem('Storage', JSON.stringify(value))
    }

    createProject(projectName) {
        this.storage[projectName] = []
        this.refreshLocalStorage(this.storage)
        showProject(this.storage[projectName])
    }

    createTodo(projectName, content) {
        this.storage[projectName].push(content)
        this.refreshLocalStorage(this.storage)
        showProject(this.storage[projectName])
    }

    removeTodo(projectName, todoTitle) {
        for (let i = 0; i < this.storage[projectName].length; i++) {
            if (this.storage[projectName][i]['title'] == todoTitle) {
                this.storage[projectName].splice(i, 1)
                this.refreshLocalStorage(this.storage)
                showProject(this.storage[projectName])
            }
        }
    }

    get currentStorage() {
        return this.storage
    }
    
    set currentStorage(value) {
        this.storage = value
        
    }
}

export { Storage }