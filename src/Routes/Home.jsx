import React from 'react'
import Card from '../Components/Card'
import { useGlobalStates } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useGlobalStates()

  const data = state.data

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {
          data.map((dentist) => {
            return <Card dark={state.theme} key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
          })
        }
      </div>
    </main>
  )
}

export default Home