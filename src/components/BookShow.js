import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({book,onDelete,onEdit}){
 const [showEdit,setShowEdit] = useState(false);
//event handler so that i can pass an id for delete
const handelDeleteClick=()=>{
onDelete(book.id);
} 
const handleEditClick=()=>{
  setShowEdit(!showEdit);
 }
 //BBS
 const handleSubmit=(id,newTitle)=>{
    setShowEdit(false);
    onEdit(id,newTitle)
 }

 let content =<h3>{book.title}</h3>;
 if(showEdit){
    content = <BookEdit onSubmit={handleSubmit} book={book}/>;
 }

    return (
        <div className="book-show">
        <img
        alt="books"
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        >
        </img>
        <div>{content}</div>
        <div className="actions">
        <button className="edit" onClick={handleEditClick}>Edit</button>
        <button className="delete" onClick={handelDeleteClick}>Delete</button>
        </div>
    </div>
    )
}

export default BookShow;