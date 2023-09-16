import React from "react";
import { Link } from "react-router-dom";
import { useGlobalStates } from "./utils/global.context";


const Card = ({ name, username, id, dark }) => {

  const { state, dispatch } = useGlobalStates()
  
  const addFav = async () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    const newCard = {
        id: id,
        name: name,
        username: username
      };

      const confirmAddFav = confirm(`Quieres agregar al Dentista ${name} a favoritos? `)

      if ( confirmAddFav ) {
        if ( state.favs === null ) {
        const newArrayFavs = [];

        newArrayFavs.push(newCard);

        localStorage.setItem('favs', JSON.stringify(newArrayFavs))

        const data = JSON.parse(localStorage.getItem('favs'))

        dispatch({type: 'addFav', payload: data });
      } else {
        const parsedFavs = JSON.parse(localStorage.getItem('favs'));

        if ( !parsedFavs.some((el) => el.id == newCard.id) ) {
          
          parsedFavs.push(newCard);

          localStorage.setItem('favs', JSON.stringify(parsedFavs))

          const data = JSON.parse(localStorage.getItem('favs'))

          dispatch({type: 'addFav', payload: data})
        }
      }
      }
    }

  return (
    <div className={`card ${dark}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`/dentist/${id}`} style={{textAlign:'center'}}>
          <img src="../assets/doctor.jpg" alt="dentist" />
          <hr />
          {name}
        </Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <p>{id}</p>
        <p>{username}</p>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
