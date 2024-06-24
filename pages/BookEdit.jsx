const { useNavigate } = ReactRouterDOM

import { bookService } from '../services/book.service.js'

const { useState } = React

export function BookEdit() {
  const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
  const navigate = useNavigate()

  function onSaveBook(ev) {
    ev.preventDefault()

    bookService
      .save(bookToEdit)
      .then(() => navigate('/BookIndex'))
      .catch((error) => console.log('error: ', error))
  }

  function handleChange({ target }) {
    const field = target.name
    // console.log(field)
    let value = target.value
    // console.log(value)

    switch (target.type) {
      case 'number':
      case 'range':
        value = +value
        break
      case 'checkbox':
        value = target.checked
        break

      default:
        break
    }
    setBookToEdit((prevBook) => ({ ...prevBook, [field]: value }))
  }

  return (
    <section className='book-edit'>
      <h1>Save Car</h1>
      <form onSubmit={onSaveBook}>
        <label htmlFor='title'>title</label>
        <input onChange={handleChange} type='text' name='title' id='title' />
        <label htmlFor='amount'>Price</label>
        <input
          onChange={handleChange}
          type='number'
          name='amount'
          id='amount'
        />

        <button>Save</button>
      </form>
    </section>
  )
}
