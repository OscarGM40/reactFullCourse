import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
import Navbar from "../ui/Navbar"
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { messages } from '../../helpers/calendar-messages'

import 'moment/locale/es'
import { CalendarEvent } from './CalendarEvent'
import { useState } from 'react'
moment.locale('es')

// Setup the localizer by providing the moment Object
// to the correct localizer.
// const localizer = BigCalendar.momentLocalizer(moment) <- forma anterior sin desestructurar
const localizer = momentLocalizer(moment)

// los eventos tienen que tener ciertas caracteristicas para que BigCalendar los pueda interpretar.Serán un arreglo de objetos por motivos obvios.

// Es obligatorio poner fecha de inicio y de fin con start y end,pero también puedo mandarle propiedades inventadas,como el bgcolor.
const events = [
  {
    title: 'Cumpleaños del jefe',
    start: moment().toDate(), //lo mismo que un new Date()
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#ff9797',
    notes: 'comprar el pastel',
    user: {
      _id: '123',
      name: 'Oscar',
    }
  }
]


const CalendarScreen = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

  // doble click en un evento de calendario
  const onDoubleClick = (e) => {
    console.log(e) //me devuelve todo el evento
  }

  // onSelect es al clickar en un evento una vez
  const onSelect = (e) => {
    console.log(e) //e me devuelve todo el evento
  }
  
  // al cambiar de vista entre mes|semana|dia|agenda
  const onViewChange = (e) => {
    // console.log(e) // e devuelve week|day|month|agenda
    setLastView(e);
    localStorage.setItem('lastView', e);
  }

  const eventStyleGetter = (event, start, end, isSelected) => {
    let style = {
      backgroundColor: '#3e9edfcf',
      borderRadius: '10px',
      opacity: 0.8,
      display: 'block',
      color: 'black',
    }
    return {
      style
    }

  }

  return (
    <div className="calendar-screen">
      <Navbar />
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
        view={lastView}
        components={{ event: CalendarEvent }}
      />
    </div>
  )
}

export default CalendarScreen
