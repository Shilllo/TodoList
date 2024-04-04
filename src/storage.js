import { showProject } from "./Project"
import { openProject } from "./events"

class Storage {
    constructor() {
        if (localStorage.getItem('Storage')) {
            this.storage = JSON.parse(localStorage.getItem('Storage'))
            showProject('Inbox')

            let customProjects = document.querySelector('#customProjects')
            for (let key in this.storage) {
                let defaultt = ['Inbox', 'Today', 'Week']
                if (!defaultt.includes(key)) {
                    let project = document.createElement('button')
                    project.classList.add('project')
                    project.textContent = key
                    let id = key.split(' ').join('-')
                    project.setAttribute('id', id)
                    customProjects.appendChild(project)
                }
                openProject(key)
            }
            document.querySelector('#projectHeader').textContent = `Projects: Inbox`
        } else {
            this.storage = {
                'Inbox': [],
                'Today': [],
                'Week': []
            }
            this.refreshLocalStorage(this.storage)
            showProject('Inbox')
            for (let key in this.storage) {
                openProject(key)
            }
            document.querySelector('#projectHeader').textContent = `Projects: Inbox`
        }
    }

    refreshLocalStorage(value) {
        localStorage.setItem('Storage', JSON.stringify(value))
    }

    createProject(projectName) {
        this.storage[projectName] = []
        this.refreshLocalStorage(this.storage)
        showProject(projectName)
    }

    createTodo(projectName, content) {
        this.storage[projectName].push(content)
        this.refreshLocalStorage(this.storage)
        showProject(projectName)
    }

    removeTodo(projectName, todoTitle) {
        for (let i = 0; i < this.storage[projectName].length; i++) {
            if (this.storage[projectName][i]['title'] == todoTitle) {
                this.storage[projectName].splice(i, 1)
                this.refreshLocalStorage(this.storage)
                showProject(projectName)
            }
        }
    }

    get currentStorage() {
        return this.storage
    }
    
    set currentStorage(value) {
        this.storage = value
    }

    // get currentProject() {
    //     return 
    // }
}

export { Storage }