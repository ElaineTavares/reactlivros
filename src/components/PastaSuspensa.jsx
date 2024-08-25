import React from 'react'
import './PastaSuspensa.css'

export default function PastaSuspensa({nome, generosDoSelect, valor, aoAlterado}) {

  const aoSelecionado = (e) => {
    aoAlterado(e.target.value)
  }
  return (
    <div className='pasta_suspensa'>
        <label>{nome}</label>
        <select value={valor} onChange={aoSelecionado}>
            <option value="" selected></option>
            {generosDoSelect.map((genero) => <option key={genero}>{genero}</option>)}
        </select>
    </div>
  )
}
