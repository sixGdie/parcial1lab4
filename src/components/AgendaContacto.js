import { useState, useEffect } from 'react'
import SearchContact from './SearchContact'
import Tabla from './Tabla'

const llamada = async () => {
  const response = await fetch(
    'http://168.194.207.98:8081/api_contacto/get_contactos.php'
  )
  const data = await response.json()

  return data
}

const AgendaContacto = () => {
  const [contactos, setContactos] = useState([])

  const getContactos = async () => {
    const data = await llamada()
    setContactos(data)
  }

  useEffect(() => getContactos, [])

  return (
    <div>
      <SearchContact contactos={contactos} />
      <Tabla contactos={contactos} />
    </div>
  )
}

export default AgendaContacto
