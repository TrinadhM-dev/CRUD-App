import './index.css';
import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
function App(){
//state 
const [books,setBooks] = useState([]);
const fetchBooks = async()=>{
   const response = await axios.get("http://localhost:3001/books")
      setBooks(response.data);
 }
 useEffect(()=>{
   fetchBooks();
 },[])

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
 const createBook = async(title)=>{
  const response = await axios.post("http://localhost:3001/books",{
      title:title
   });
   const updatedBooks = [...books,response.data]
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