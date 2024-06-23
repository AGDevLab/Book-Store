import { UserPreview } from '../cmps/UserPreview.jsx'
import { bookService } from '../services/book.service.js'
import { BookList } from '../cmps/BookList.jsx'

const { useState, useEffect } = React

export function BookIndex() {
  //   console.log('book')

  const [books, setBooks] = useState(null)

  useEffect(() => {
    bookService
      .query()
      .then((books) => setBooks(books))
      .catch((err) => console.log('err ', err))
  }, [])

  if (!books) return <div>Loading...</div>

  return (
    <section className='book-index'>
      <h2>bookIndex</h2>
      {/* <p>{JSON.stringify(books)}</p> */}
      <BookList books={books} />
      {/* <UserPreview /> */}
    </section>
  )
}
