import React from 'react'
import Form from '../Components/Form'
import { useGlobalStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useGlobalStates()

  return (
    <main className={state.theme}>
      <h2 className='center'>Want to know more?</h2>
      <p className='center mb-30'>Send us your questions and we will contact you</p>
      <Form/>
    </main>
  )
}

export default Contact