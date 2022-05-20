import { Formik, Form, Field, useField } from 'formik'
import * as yup from 'yup'

const EditarContacto = () => {
  const [field, meta] = useField('text')
  return (
    <div>
      <Formik
        initialValues={{
          nombre: '',
          apellido: '',
          telefono: '',
          email: '',
          fotourl: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
        validationSchema={yup.object().shape({
          nombre: yup.string().required('El nombre es requerido'),
          apellido: yup.string().required('El apellido es requerido'),
          telefono: yup.string().required('El teléfono es requerido'),
          email: yup.string().required('El email es requerido'),
          fotourl: yup.string().required('La foto es requerida'),
        })}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor='nombre'>Nombre</label>
            <Field type='text' name='nombre' />
            <label htmlFor='apellido'>Apellido</label>
            <Field type='text' name='apellido' />
            <label htmlFor='telefono'>Teléfono</label>
            <Field type='text' name='telefono' />
            <label htmlFor='email'>Email</label>
            <Field type='text' name='email' />
            <label htmlFor='fotourl'>Foto</label>
            <Field type='text' name='fotourl' />
            <button type='submit' disabled={isSubmitting}>
              Guardar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default EditarContacto
