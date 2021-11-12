import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
   return (
      <div className="notes__main-content">
         
          <NotesAppBar />

          <div className="notes__content">

            <input 
            type="text"
            placeholder="Some awesome title"
            className="notes__title-input"
            autoComplete="off"
            />

            <textarea name="" cols="30" rows="2"
            placeholder="What happened today"
            className="notes__textarea"
            >
            </textarea>

               <div className="notes__image"  style={{
          backgroundSize: "cover",
          backgroundImage: "url(https://picsum.photos/400/250?random=2)",
        }}>
                  {/* <img src="https://picsum.photos/450/200?random=2" alt="imagen"/> */}
               </div>

          </div>


      </div>
   )
}
