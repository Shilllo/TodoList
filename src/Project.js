function showProject(projectName) {
    let content = document.querySelector('#content')

    const childElements = content.querySelectorAll(':scope > :not(:first-child)');

    childElements.forEach(child => child.remove());

    let storageProject = JSON.parse(localStorage.getItem('Storage'))[projectName]
    
    if (storageProject.length) {
        for (let i = 0; i < storageProject.length; i++) {

            let block = document.createElement('div')
            block.classList.add('block')
    
            let title = document.createElement('div')
            title.classList.add('title')
            title.textContent = storageProject[i]['title']
    
            let description = document.createElement('div')
            description.classList.add('description')
            description.textContent = storageProject[i]['description']
    
            let date = document.createElement('div')
            date.classList.add('date')
            date.textContent = storageProject[i]['date']
    
            let status = document.createElement('select')
            status.classList.add('status')
            status.setAttribute('id', 'status')
            status.setAttribute('name', 'status')
    
            let optionNotStarted = document.createElement('option')
            optionNotStarted.text = 'Not started'
            optionNotStarted.value = 'notStarted'
            status.add(optionNotStarted)
    
            let optionInProgress = document.createElement('option')
            optionInProgress.text = 'In progress'
            optionInProgress.value = 'inProgress'
            status.add(optionInProgress)
    
            let optionDone = document.createElement('option')
            optionDone.text = 'Done'
            optionDone.value = 'Done'
            status.add(optionDone)
    
            let buttons = document.createElement('div')
            buttons.classList.add('buttons')
    
            let remove = document.createElement('button')
            remove.textContent = 'Remove'
            remove.classList.add('removeBtn')
            remove.setAttribute('id', storageProject[i]['title'])

            buttons.appendChild(remove)
    
            block.appendChild(title)
            block.appendChild(description)
            block.appendChild(date)
            block.appendChild(status)
            block.appendChild(buttons)
    
            content.appendChild(block)
        }
    }
}

function addProject(projectName, instance) {
    let project = document.createElement('button')
    project.textContent = projectName
    project.classList.add('project')
    let id = projectName.split(' ').join('-')
    project.setAttribute('id', id)

    if (projectName == 'Inbox' || projectName == 'Today' || projectName == 'Week') {
        let container = document.querySelector('#defaultProjects')
        container.appendChild(project)
    } else {
        let container = document.querySelector('#customProjects')
        container.appendChild(project)
    }

    instance.createProject(projectName)
}

export { showProject, addProject}