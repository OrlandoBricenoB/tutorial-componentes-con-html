// * Almacenar el componente modal.
const modal = document.querySelector('.modal')

// * Estado para saber si el modal está abierto.
let modalIsOpen = false

// * Acción para actualizar el estado modalIsOpen
const setModalIsOpen = value => {
  modalIsOpen = value
  if (value) {
    modal.classList.add('modal--open')
  } else {
    modal.classList.remove('modal--open')
  }
}

// * Métodos para abrir y cerrar modal.
const openModal = () => setModalIsOpen(true)
const closeModal = () => setModalIsOpen(false)

// * Funcionalidad de botones
const openModalButton = document.querySelector('.onClick-openModal')
const confirmButton = document.querySelector('.onClick-confirm')

openModalButton.addEventListener('click', () => openModal())
confirmButton.addEventListener('click', () => closeModal())

// * Lógica del Botón Ignorar del Modal.
const ignoreButton = document.querySelector('.onClick-ignore')

const shakeWorld = times => {
  if (modalIsOpen) closeModal()
  setTimeout(() => {
    console.log('openModal', times)
    openModal()
    if (times <= 0) return
    setTimeout(() => {
      shakeWorld(times - 1)
    }, 300)
  }, 300)
}

ignoreButton.addEventListener('click', () => {
  let times = 3
  shakeWorld(times)
})
