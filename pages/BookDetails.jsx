const { useParams, Link } = ReactRouterDOM

import { bookService } from '../services/book.service.js'

const { useEffect, useState } = React

// export function BookDetails({ bookId, onBack }) {
export function BookDetails() {
  const [book, setBook] = useState(null)

  const { bookId } = useParams()

  useEffect(() => {
    console.log(bookId)
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
        <h5>Language: {book.language}</h5>
        <h5>pagecount: {book.pageCount}</h5>
        <p>Book Description: {book.description}</p>
      </section>
      <button>
        <Link to='/BookIndex'>Back</Link>
      </button>
      {/* <button onClick={onBack}>back</button> */}
    </React.Fragment>
  )
}
