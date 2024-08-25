import React from 'react'
import './Botao.css'

export default function Botao({children}) {
  return (
    <button className='botao_criar_card'>{children}</button>
  )
}
