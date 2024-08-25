import React from 'react'
import './Footer.css'
import whats from '/whats.svg'

export default function Footer() {
  return (
    <footer className='footer'>
        <h5>Desenvolvido por Elaine Tavares</h5>
        <a href="mailto:elainetavares.developer@gmail.com" target='blank'>elainetavares.developer@gmail.com</a>
        <a href="https://api.whatsapp.com/send/?phone=5521984510746&text=Ol%C3%A1%2C+desejo+informa%C3%A7%C3%A3o+sobre+seu+serv&type=phone_number&app_absent=0" target='blank'><img className='whats' src={whats} alt="whatsapp" /></a>
    </footer>
  )
}
