import React from 'react'
import { Link } from "react-router-dom";
import { useGlobalStates } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {
  const { state, dispatch } = useGlobalStates()


  return (
    <nav className={state.theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='Favs'>Favs</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={() => dispatch({type: 'toggleTheme'})}>Change theme</button>
    </nav>
  )
}

export default Navbar