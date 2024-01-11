
import './App.css'
import KanbanBoard from './components/KanbanBoard'

// Create a new Date object
const currentDate = new Date();

// Get the current year, month, and date
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Adding 1 because months are zero-based (0-11)
const date = currentDate.getDate();
const dayNumber = currentDate.getDay();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = daysOfWeek[dayNumber];
const totalFormat = (`${date}-${month}-${year}`)
 

function App() {
  return(
    <>
      <div className='h-[80px] flex items-center justify-center flex-col  '>
        <h1 className='text-3xl font-bold text-center mb-2'>{totalFormat}</h1>
        <p>{dayName}</p>
      </div>
      <KanbanBoard/>
    </>
  )
}

export default App
