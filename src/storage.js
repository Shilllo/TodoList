import { showProject } from "./Project"

class Storage {
    constructor() {
        if (localStorage.getItem('Storage')) {
            this.storage = JSON.parse(localStorage.getItem('Storage'))
            showProject('Inbox')
            let self = this
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
                let name = key.split(' ').join('-')
                document.querySelector(`#${name}`).addEventListener('click', function() {
                    showProject(key)
                    document.querySelector('#projectHeader').textContent = `Projects: ${key}`
                    self.refreshEvents()
                })
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
            this.refreshEvents()
            let self = this
            for (let key in this.storage) {
                let name = key.split(' ').join('-')
                document.querySelector(`#${name}`).addEventListener('click', function() {
                    showProject(key)
                    document.querySelector('#projectHeader').textContent = `Projects: ${key}`
                    self.refreshEvents()
                })
            }
            document.querySelector('#projectHeader').textContent = `Projects: Inbox`
        }
        this.refreshEvents()
    }

    refreshLocalStorage(value) {
        localStorage.setItem('Storage', JSON.stringify(value))
    }

    createProject(projectName) {
        this.storage[projectName] = []
        this.refreshLocalStorage(this.storage)
        showProject(projectName)
        this.refreshEvents()
    }

    createTodo(projectName, content) {
        this.storage[projectName].push(content)
        this.refreshLocalStorage(this.storage)
        showProject(projectName)
        this.refreshEvents()
    }

    removeTodo(projectName, todoTitle) {
        for (let i = 0; i < this.storage[projectName].length; i++) {
            if (this.storage[projectName][i]['title'] == todoTitle) {
                this.storage[projectName].splice(i, 1)
                this.refreshLocalStorage(this.storage)
            }
        }
        showProject(projectName)
        this.refreshEvents()
        
    }

    get currentStorage() {
        return this.storage
    }
    
    set currentStorage(value) {
        this.storage = value
    }

    refreshEvents() {
        let self = this
        let btns = document.querySelectorAll('.removeBtn')
        let projectName = document.querySelector('#projectHeader').textContent.slice(10)
        for (let i = 0; i < btns.length; i++) {
            let id = btns[i].id
            document.querySelector(`#${id}`).addEventListener('click', function() {
                self.removeTodo(projectName, id)
            })
        }
    }
}

export { Storage }