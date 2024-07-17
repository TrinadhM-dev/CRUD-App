import './index.css';
import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App(){
//state 
const [books,setBooks] = useState([]);



//  eventHandler
 const createBook = (title)=>{
 console.log('Need to add the book with the',title);
 }
 return <div>
    {/* props */}
 <h1>{books.length}</h1>
 <BookCreate onCreate={createBook} />
 </div>
}

export default App;