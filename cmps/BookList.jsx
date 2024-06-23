import { BookPreview } from './BookPreview.jsx'

export function BookList({ books, onRemoveBook, onSelectBookId }) {
  return (
    <ul className='book-list'>
      {books.map((book) => (
        <li key={book.id}>
          <BookPreview book={book} />
          <section>
            <button onClick={() => onSelectBookId(book.id)}>Details</button>
            <button onClick={() => onRemoveBook(book.id)}>Remove</button>
          </section>
        </li>
      ))}
    </ul>
  )
}
