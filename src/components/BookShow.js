import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({book,onDelete}){
 const [showEdit,setShowEdit] = useState(false);
//event handler so that i can pass an id for delete
const handelDeleteClick=()=>{
onDelete(book.id);
} 
const handleEditClick=()=>{
  setShowEdit(!showEdit);
 }
 let content =<h3>{book.title}</h3>;
 if(showEdit){
    content = <BookEdit book={book} />;
 }
    return (<div className="book-show">
        <div>{content}</div>
        <div className="actions">
        <button className="edit" onClick={handleEditClick}>Edit</button>
        <button className="delete" onClick={handelDeleteClick}>Delete</button>
 

        </div>
    </div>
    )
}

export default BookShow;