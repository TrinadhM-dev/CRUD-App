import './index.css';
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App(){
//state 
const [books,setBooks] = useState([]);

//edit
const editBookById = (id,newTitle)=>{
const updatedBooks = books.map((book)=>{
   if(book.id === id){
      return {...book, title: newTitle};
   }
   return book;
});
 setBooks(updatedBooks);
}


//delete
const deleteBookById=(id)=>{
   //doesnot modify the exisitng array bt it does 
   //gives a new array
   const updatedBooks = books.filter((book)=>{
      return book.id !== id;
   })
   setBooks(updatedBooks);
};



//  eventHandler
 const createBook = (title)=>{
const updatedBooks = [...books,{
   id:Math.round(Math.random()*9999),
   title}]
 console.log('Need to add the book with the',title);
 setBooks(updatedBooks);
 }
 return <div className='app'>
    {/* props */}
 <h1>Reading List</h1>
 <BookCreate onCreate={createBook}  />
 {/* props */}
 <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
 </div>
}

export default App;