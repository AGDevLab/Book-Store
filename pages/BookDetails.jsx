import { bookService } from '../services/book.service.js'

const { useEffect, useState } = React

export function BookDetails({ bookId, onBack }) {
  const [book, setBook] = useState(null)

  useEffect(() => {
    bookService.get(bookId).then((book) => setBook(book))
  }, [])

  // const { title, authors } = book
  if (!book) return <div>Book Loading...</div>
  return (
    <React.Fragment>
      <section className='book-details'>
        <h1>Book Title: {book.title}</h1>
        <h2>Book Authors: {book.authors}</h2>
        <img src={book.thumbnail} alt='' />
        <h4>Language: {book.language}</h4>
        <h4>pagecount: {book.pageCount}</h4>
        <p>Book Description: {book.description}</p>
      </section>
      <button onClick={onBack}>back</button>
    </React.Fragment>
  )
}
