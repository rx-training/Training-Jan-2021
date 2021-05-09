function Book({ book }) {

    return (
        <div className="card mb-3 text-dark book-card" >
            <div className="row g-0">
                <div className="col-md-5">
                    <img src={book.img} alt={book.title} width="225" height="280" />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title mb-4">Title: {book.title}</h5>
                        <p className="card-text lead">Author: {book.author}</p>
                    </div>
                </div>
            </div>
        </div>
        

    )
}

export default Book