import React from "react";
import Header from "./Heading";
import Footer from "./Footer";

function App() {

  const [mytitle,setTitle]=React.useState("");

  const [mynote,setNote]=React.useState("");

  const [list,updatelist]=React.useState([]);

  function updateTitle(event)
  {
    setTitle(event.target.value);
  }

  function updateNote(event)
  {
    setNote(event.target.value);
  }

  function AddNote(e)
  {
    e.preventDefault();
      
      var myarr = {
      title:mytitle,
      content:mynote
    }

    updatelist(prev=>{
      return [...prev,myarr]
    })
    
  }

  function AddNoteTo(item,index)
  {
    return <Note id={index} title={item.title} content={item.content} />
    
  }

  function Note(props) {
    return (
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={()=>{
          DeleteNote(props.id)
        }}>DELETE</button>
      </div>
    );
  }

  function DeleteNote(id)
  {
    updatelist(prev=>{
      return prev.filter((item,index)=>{
        return id!==index;
      })
    })
  }

  return (
    <div>
      <Header />
      <div>
        <form>
          <input id="1" onChange={updateTitle} name="title" placeholder="Title" autoComplete="off" />
          <textarea id="2" onChange={updateNote} name="content" placeholder="Take a note..." rows="3"/>
          <button type="submit" onClick={(e)=>{
            if(document.getElementById("1").value!=="" && document.getElementById("2").value!=="")
            {
                AddNote(e);
                document.getElementById("1").value="";
                document.getElementById("2").value="";
            }
            else
            {
                e.preventDefault();
            }
          }}>Add</button>
        </form>
      </div>
      {list.map(AddNoteTo)}
      <Footer />
    </div>
  );
}

export default App;
