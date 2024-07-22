import {useState} from 'react';

function BookEdit({book,onSubmit}){
    const [title,setTitle] = useState(book.title);


    //BBS
    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit(book.id,title);
    };

    const handleChange =(event)=>{
        setTitle(event.target.value);
        console.log('new title is ',title);
    }

    return <form onSubmit={handleSubmit} className="book-edit">
    <label>Title</label>
    <input className="input" value={title} onChange={handleChange} />
    <button className="button is-primary">
    Save
    </button>
    </form>
    

}

export default BookEdit;