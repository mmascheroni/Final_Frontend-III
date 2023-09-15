import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const regExpEmail = /^[\w\.-]+@[\w\.-]+\.\w+$/


  const [ form, setForm ] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const [ mensaje, setMensaje ] = useState('')
  const [ show, setShow ] = useState(false)
  const [ error, setError ] = useState(false)

  const handleSubmit = (e) => {
        e.preventDefault()
        
        if( form.nombre.length > 5 && regExpEmail.test(form.email) && form.mensaje.length > 5 ) {
            setError(false)
            setShow(true)
            setMensaje(`
            Gracias ${form.nombre}, te contactaremos cuando antes vía mail
            `)
        } else {
            setError(true)
            setShow(false)
            setMensaje('Por favor verifique su información nuevamente')
        }

    }

  return (
    <div>
      <form>
        <label>Nombre Completo: </label>
        <input className="mb-10" name="name" type="text" onChange={(e) => setForm({...form, nombre: e.target.value})} />

        <label>Email: </label>
        <input className="mb-10" name="email" type="email" onChange={(e) => setForm({...form, email: e.target.value})} />

        <label>Mensaje: </label>
        <textarea className="mb-15" name="textarea" rows="5" style={{ width: '293px', minHeight: '100px' }} onChange={(e) => setForm({...form, mensaje: e.target.value})} />

          <button onClick={handleSubmit}>Enviar</button>
      </form>

      {
        error && <p className="error-msj">{mensaje}</p>
      }

      {
        show && <p style={{textAlign:'center', fontWeight:'bold'}}>{mensaje}</p>
      }
    </div>
  );
};

export default Form;
