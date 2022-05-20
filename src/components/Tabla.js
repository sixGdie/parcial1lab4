import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { insertContact, updateContact, deleteContact } from '../Funciones'
import EditarContacto from './EditarContacto'
import './Tabla.css'

const Tabla = (data) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Apellido</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.contactos.map((contacto) => (
            <tr key={contacto.id}>
              <td>
                <img src={contacto.fotourl} alt='' />
              </td>
              <td>{contacto.apellido}</td>
              <td>{contacto.nombre}</td>
              <td>{contacto.telefono}</td>
              <td>{contacto.email}</td>
              <td>
                <button onClick={deleteContact}>Eliminar</button>
                <Link to={`/editar/${contacto.id}`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Routes>
        <Route path='/editar/:id' element={<EditarContacto />} />
      </Routes>
    </div>
  )
}

export default Tabla
