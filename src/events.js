import { addProject, showProject } from './Project'

function createProject(instance) {
    document.querySelector(".addProject").addEventListener('click', function() {
        if (!document.querySelector('#projectForm')) {
            let projectForm = document.createElement('form')
            projectForm.setAttribute('id', 'projectForm')
            projectForm.method = 'GET'

            let label = document.createElement('label')
            label.setAttribute('for', 'projectName')
            label.textContent = `Your project's title`

            let input = document.createElement('input')
            input.setAttribute('type', 'text')
            input.setAttribute('id', 'projectName')

            let button = document.createElement('button')
            button.type = 'button'
            button.textContent = 'Create'
            button.classList.add('createProject')

            projectForm.appendChild(label)
            projectForm.appendChild(input)
            projectForm.appendChild(button)

            document.querySelector('#sidebar').appendChild(projectForm)

            button.addEventListener('click', function() {
                if (document.querySelector('#projectName').value) {
                    let projectName = document.querySelector('#projectName').value.toString()
                    addProject(projectName, instance)
                    openProject(projectName, instance)
                    instance.refreshEvents() 
                    projectForm.remove();
                }
            })

            document.querySelector('#projectForm').addEventListener('keypress', function(event) {
                if (event.keyCode === 13) {
                  event.preventDefault();
                  if (document.querySelector('#projectName').value) {
                    let projectName = document.querySelector('#projectName').value.toString()
                    addProject(projectName, instance)
                    openProject(document.querySelector('#projectName').value, instance)
                    instance.refreshEvents() 
                    projectForm.remove();
                    }
                }
            });
        }
    })
}

function createTodo(instance) {
    document.querySelector("#createTodo").addEventListener('click', function() {
        let title = document.querySelector('#title').value
        let description = document.querySelector('#description').value
        let date = document.querySelector('#date').value

        if (title && description && date) {
            let todo = {
                'title': title,
                'description': description,
                'date': date
            }
            document.querySelector('#title').value = ""
            document.querySelector('#description').value = ""
            document.querySelector('#date').value = ""

            instance.createTodo(document.querySelector('#projectHeader').textContent.slice(10), todo)
        }
    })
}

function openProject(projectName, instance) {
    let name = projectName.split(' ').join('-')
    document.querySelector(`#${name}`).addEventListener('click', function() {
        showProject(projectName)
        instance.refreshEvents()
        document.querySelector('#projectHeader').textContent = `Projects: ${projectName}`
    })
}

export {
    createProject, 
    createTodo,
    openProject,
}
