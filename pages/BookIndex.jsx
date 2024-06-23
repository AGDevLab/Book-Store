import { UserPreview } from '../cmps/UserPreview.jsx'
import { bookService } from '../services/book.service.js'
import { BookList } from '../cmps/BookList.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'
import { BookDetails } from '../pages/BookDetails.jsx'

const { useState, useEffect } = React

export function BookIndex() {
  //   console.log('book')

  const [books, setBooks] = useState(null)
  const [selectedBookId, setSelectedBook] = useState(null)
  const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

  useEffect(() => {
    loadBooks()
  }, [filterBy])

  function loadBooks() {
    bookService
      .query(filterBy)
      .then((books) => setBooks(books))
      .catch((err) => console.log('err ', err))
  }

  function onRemoveBook(bookId) {
    bookService
      .remove(bookId)
      .then(() => {
        // console.log('book removed')
        // console.log(books)
        // loadBooks()
        setBooks((books) => books.filter((book) => book.id !== bookId))
      })
      .catch((err) => console.log('err ', err))
  }

  function onSelectBookId(book) {
    setSelectedBook(book)
  }

  function onSetFilter(filterBy) {
    // console.log('filterBy ', filterBy)
    setFilterBy({ ...filterBy })
  }

  if (!books) return <div>Loading...</div>

  return (
    <section className='book-index'>
      {!selectedBookId && (
        <React.Fragment>
          <h2>bookIndex</h2>

          <BookFilter filterBy={filterBy} onSetFilter={onSetFilter} />

          <BookList
            books={books}
            onRemoveBook={onRemoveBook}
            onSelectBookId={onSelectBookId}
          />
        </React.Fragment>
      )}

      {selectedBookId && (
        <BookDetails
          onBack={() => setSelectedBook(null)}
          bookId={selectedBookId}
        />
      )}
    </section>
  )
}
