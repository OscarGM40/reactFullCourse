import { db } from "../firebase/firebase-config"



export const loadNotes = async (uid) => {
   // para obtener la información apunto a un path y le hago get.De igual manera que add devuelve una promise get al resolverse devuelve una collectionSnapshot,ojo
   const notesSnap = await db.collection(`${uid}/journal/notes`).orderBy("date", "desc").get();
   const notes = [];
   // console.log(notesSnap)
   notesSnap.forEach( snapHijo => {
      // console.log(snapHijo.data());
      notes.push({
         id: snapHijo.id,
         ...snapHijo.data(), 
      })
   })

// si no tengo notas devolveré un array vacio
   return notes;
}