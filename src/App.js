import './index.css';
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App(){
//state 
const [books,setBooks] = useState([]);



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
 <h1>{books.length}</h1>
 <BookCreate onCreate={createBook} />
 {/* props */}
 <BookList books={books} />
 </div>
}

export default App;