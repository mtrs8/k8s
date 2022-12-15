import { useEffect, useState } from 'react'

interface Book {
  _id: string
  title: string
  author: string
}

function App() {

  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    fetch('http://localhost:3002/books').then((response) => response.json()).then((data)=> setBooks(data))
  }, [])
  
  return (
    <div>
      {books.map((book) => (
        <ul key={book._id}>
          <li>
            {book.title} - {book.author}
          </li>
        </ul>
      ))}
 
    </div>
  )
}

export default App
