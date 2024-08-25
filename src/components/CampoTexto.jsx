import React, { useState } from 'react'
import './CampoTexto.css'

export default function CampoTexto({nome, placeholder, valor, aoAlterado}) {

 

  const aoDigitado = (e) =>{
    aoAlterado(e.target.value)
    
  }


  return (
    <div className='campo_texto'>
        <label>{nome}</label>
        <input value={valor} onChange={aoDigitado} type="text"placeholder={placeholder} />
    </div>
  )
}
