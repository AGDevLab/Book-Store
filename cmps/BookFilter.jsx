const { useState } = React

export function BookFilter({ filterBy, onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })

  function handleChange() {}

  function handleTitleChange({ target }) {
    const { value } = target
    console.log(value)
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, title: value }))
  }

  function handleAmountChange() {}
  function handleAuthorsChange() {}

  function onSubmitFilter(ev) {
    ev.preventDefault()
    console.log('filterByToEdit', filterByToEdit)
    onSetFilter(filterByToEdit)
  }

  const { title, amount, authors } = filterByToEdit

  return (
    <section className='book-filter'>
      <h2>Filter Books</h2>
      <form onSubmit={onSubmitFilter}>
        <label htmlFor='title'>Book Title</label>
        <input
          value={title}
          onChange={handleTitleChange}
          type='text'
          name='title'
          id='title'
        />
        <label htmlFor='authors'>Authors</label>
        <input type='text' name='authors' id='authors' />
        <label htmlFor='amount'>amount</label>
        <input type='numbers' name='amount' id='amount' />
        <button>Submit</button>
      </form>
    </section>
  )
}
