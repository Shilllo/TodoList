import { addProject } from './Project'

function startEvents(instance) {
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
                    projectForm.remove();
                }
            })

            document.querySelector('#projectForm').addEventListener('keypress', function(event) {
                if (event.keyCode === 13) {
                  // Стоп, отправка отменена!
                  event.preventDefault();
                  if (document.querySelector('#projectName').value) {
                    let projectName = document.querySelector('#projectName').value.toString()
                    addProject(projectName, instance)
                    projectForm.remove();
                    }
                }
              });
        }
    })
}

export { startEvents }