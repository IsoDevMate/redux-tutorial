import { useState } from "react"
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { postAdded } from "./posts/postSlice"

export const AddFormPost = () => {

  const [title,setTitle] = useState('') 
const [message,setMessage] = useState('') 
const dispatch = useDispatch()

/* const handleTitleChange= e =>{setTitle(e.target.value)}
const handleMessageChange= e =>{setMessage(e.target.value)} */
const onSaveButtonClick=()=>{
  if( title && message){
  dispatch( postAdded({
     id:nanoid(),
     title,
     message
  })
  )
  setTitle('')
  setMessage('')
}
}

  return (
    <>
    <section>
      <h2>Add New Post</h2>
  <form>

  {/*<label htmlFor="">Post Title</label>
    <input 
    type="text"
    name="postTitle"
    id="postTitle"
    value={title}
    onChange={handleTitleChange}
    />
    <label htmlFor="">Message</label>
    <textarea 
    cols="30" 
    rows="10" 
    id="postMessage"
    name="postmessage"
    value={message}
    onChange={handleMessageChange}
    /> */}
    <button type="button"onClick={onSaveButtonClick}>Save Post</button>
  </form>
    </section>
    </>
  )
}

