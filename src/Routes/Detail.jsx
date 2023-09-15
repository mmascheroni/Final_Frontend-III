import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useGlobalStates } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { state } = useGlobalStates()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist, setDentist] = useState([])
  const { id }= useParams()

  const getData = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

      const data = await res.json();

      setDentist(data)
    }

  useEffect(() => {
      getData()
  }, [])


  return (
    <main className={state.theme} style={{textAlign: 'center', paddingBottom: '10px'}}>
      <h1>Detail Dentist id: {dentist.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        <table className='mb-30'>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Website</th>
          </tr>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </table>
      </main>
  )
}

export default Detail