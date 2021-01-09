const tagsElement = document.getElementById('tags')
const textarea = document.getElementById('textarea')
const clearBtn = document.getElementById('clearBtn')
const body = document.getElementById('body')

textarea.focus()
criarNumero()

clearBtn.addEventListener('click', () => {
    textarea.value = ''
    tagsElement.innerHTML = ''
    textarea.focus()
})

body.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        if(e.preventDefault) e.preventDefault()
        setTimeout(() => {
            // e.target.value = '' // uncomment this to clear textarea after hitting enter
        }, 10)

        randomSelect()
    }
})

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
})

function createTags(input) {
    const tags = input.split(',')
        .filter(tag => tag.trim() !== '')
        .map(tag => tag.trim())

    tagsElement.innerHTML = ''

    tags.forEach(tag => {
        const tagElement = document.createElement('span')
        tagElement.classList.add('tag')
        tagElement.innerText = tag
        tagsElement.appendChild(tagElement)
    });
}

function randomSelect() {
    const times = 20 // 2 seconds


    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100)
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}
