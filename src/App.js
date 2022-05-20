import { Routes, Route } from 'react-router-dom'
import AgendaContacto from './components/AgendaContacto'

function App() {
  return (
    <div>
      <Routes>
        <Route to='/' />
        <Route path='/agenda' component={AgendaContacto} />
      </Routes>
      <AgendaContacto />
    </div>
  )
}

export default App
