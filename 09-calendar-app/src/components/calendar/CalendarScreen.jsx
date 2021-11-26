import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
import Navbar from "../ui/Navbar"
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'


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
    bgcolor: '#fafafa'
  }
]


const CalendarScreen = () => {
  return (
    <div className="calendar-screen">
      <Navbar />
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  )
}

export default CalendarScreen
