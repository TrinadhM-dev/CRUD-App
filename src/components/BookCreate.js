import { useState  } from "react";

function BookCreate({onCreate}){
 const [Field,setFormField] = useState('');


 //eventHandler
 const handleChange = (event)=>{
    setFormField(event.target.value);
    console.log(`triggered ,${event.target.value}`);
 }

 //another event handler for passing the Field into Oncreate
 const handleSubmit =(e)=>{
  e.preventDefault();
  onCreate(Field);
  setFormField('');
 }


    return <div className="book-create">
        <h3>Add a Book</h3>
        <form>
        <label>Enter the book : </label>
        <input className="input" value={Field} onChange={handleChange} type="text"></input> <br></br>
        <button className="button" onClick={handleSubmit}>Create!</button>
        </form>

    </div>
}

export default BookCreate;