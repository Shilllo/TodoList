function showProject(storage) {
    let content = document.querySelector('#content')
    content.innerText = ""

    for (let i = 0; i < storage.length; i++) {
        let block = document.createElement('div')
        block.classList.add('block')

        let title = document.createElement('div')
        title.classList.add('title')
        title.textContent = storage['title']

        let description = document.createElement('div')
        description.classList.add('description')
        description.textContent = storage['description']

        let date = document.createElement('div')
        date.classList.add('date')
        date.textContent = storage['date']

        let status = document.createElement('select')
        status.classList.add('status')

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

        let edit = document.createElement('button')
        edit.textContent = 'Edit'
        buttons.appendChild(edit)

        let remove = document.createElement('button')
        remove.textContent = 'Remove'
        buttons.appendChild(remove)

        block.appendChild(title)
        block.appendChild(description)
        block.appendChild(date)
        block.appendChild(status)
        block.appendChild(buttons)

        content.appendChild(block)
    }
}

export { showProject }