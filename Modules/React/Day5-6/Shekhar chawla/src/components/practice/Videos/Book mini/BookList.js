import { books } from "./data"
import Book from './Book'

function BookList() {
    return (
        <div>
            {books.map( (item) => (
                <div key={item.id} className="bg-dark">
                    <Book book={item}></Book>
                </div>
            ))}
        </div>
    )
}

export default BookList