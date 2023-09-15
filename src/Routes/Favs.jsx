import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useGlobalStates()
  const [boolean, setBoolean] = useState(false)

  useEffect(() => {
    if ( state.favs === null ) {
      setBoolean(false)
    } else {
      setBoolean(true)
    }
  }, []);
  

  return (
    <main className={state.theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {boolean
      ? state.favs.map((fav) => (
          <Card dark={state.theme} key={fav.id} name={fav.name} username={fav.username} id={fav.id} />
        ))
      : <p>Don't have favourites. Add your first Dentist to favs</p>}
      </div>
    </main>
  );
};

export default Favs;
