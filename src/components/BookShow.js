function BookShow({book}){
    return <div className="book-show">
        <h1>{book.title}</h1>
        <h3>{book.id}</h3>
    </div>
}

export default BookShow;