import React from 'react'
import { useGlobalStates } from './utils/global.context'

const Footer = () => {
  const { state } = useGlobalStates()

  return (
    <footer className={state.theme}>
        <p>Powered by <b>Mauro Mascheroni</b></p>


        <p>
          <img className='img-footer' src="../assets/ico-whatsapp.png" alt="wsp-ico" />
          <img className='img-footer' src="../assets/ico-facebook.png" alt="wsp-ico" />
          <img className='img-footer' src="../assets/ico-instagram.png" alt="wsp-ico" />
          <img className='img-footer' src="../assets/ico-tiktok.png" alt="wsp-ico" />
        </p>
    </footer>
  )
}

export default Footer
