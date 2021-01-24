const toasts = document.getElementById('toasts')
const button = document.getElementById('button')

const messages = [
    'Message One',
    'Message Two',
    'Message Tree',
    'Message Four'
]

const getRandomMessage = () => messages[Math.floor(Math.random() * messages.length)]

const createNotification = (message = null, type = null) => {
    const notification = document.createElement('div')
    notification.classList.add('toast')
    notification.classList.add(type ? type : 'info')
    notification.innerText = message ? message : getRandomMessage()
    toasts.appendChild(notification)

    setTimeout(() => {
        notification.style.opacity = '1'
    }, 10)

    setInterval(() => {
        notification.style.opacity = '0'

    }, 3000);

    setTimeout(() => {
        notification.remove()
    }, 3400)
}

button.addEventListener('click', () => createNotification())
button.addEventListener('click', () => createNotification(null, 'success'))
button.addEventListener('click', () => createNotification('Message', null))
