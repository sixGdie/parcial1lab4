import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import './SearchContact.css'

const SearchContact = () => {
  const [contactos, setContactos] = useState([])
  const open = (url) => window.open(url)
  console.log({ photos: contactos })
  return (
    <div>
      <header>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={async (values) => {
            const response = await fetch(
              `http://168.194.207.98:8081/api_contacto/get_contactos.php?indice=${values.search}`
            )
            const data = await response.json()
            setContactos(data)
          }}
        >
          <Form>
            <Field name='search' placeholder='Buscar Contacto...' />
          </Form>
        </Formik>
      </header>
      <div className='container'>
        <div className='center'>
          <table>
            {contactos.map((contacto) => (
              <tr key={contacto.id}>
                <td>
                  <img src={contacto.fotourl} alt='' />
                </td>
                <td>{contacto.apellido}</td>
                <td>{contacto.nombre}</td>
                <td>{contacto.telefono}</td>
                <td>{contacto.email}</td>
              </tr>
            ))}
            {contactos.length === 0 && (
              <tr>
                <td colSpan='5'>
                  <h3>No se encontraron resultados</h3>
                </td>
              </tr>
            )}
          </table>
        </div>
      </div>
    </div>
  )
}

export default SearchContact
