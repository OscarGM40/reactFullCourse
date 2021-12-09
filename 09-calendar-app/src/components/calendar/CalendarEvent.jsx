import { useMemo } from "react";




export const CalendarEvent = ({ event }) => {


  const { title, user } = event;

const username = useMemo( () =>{
  return user.name.charAt(0).toUpperCase() + user.name.slice(1);
},[user.name]);

  return (
    <div>
      <span>{title} - </span>
      <strong>{ username }</strong>
    </div>
  )
}
