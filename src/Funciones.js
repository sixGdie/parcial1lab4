export const insertContact = async (contacto) => {
  const response = await fetch(
    'http://168.194.207.98:8081/api_contacto/post_contacto.php',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        fotourl: contacto.fotourl,
        apellido: contacto.apellido,
        nombre: contacto.nombre,
        telefono: contacto.telefono,
        email: contacto.email,
      },
    }
  )
}

export const deleteContact = async (contacto) => {
  if (contacto) {
    await fetch(
      `http://168.194.207.98:8081/api_contacto/delete_contacto.php?id=${contacto.id}`
    )
  }
}

export const updateContact = async (contacto) => {
  const response = await fetch(
    'http://168.194.207.98:8081/api_contacto/put_contacto.php',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        id: contacto.id,
        fotourl: contacto.fotourl,
        apellido: contacto.apellido,
        nombre: contacto.nombre,
        telefono: contacto.telefono,
        email: contacto.email,
      },
    }
  )
}
