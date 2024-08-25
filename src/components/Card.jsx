import React from 'react'
import './Card.css'
import { FaWindowClose, FaHeart, FaRegHeart   } from "react-icons/fa";



export default function Card({cardCapaDoLivro, cardNomeDoLivro, cardNomeDoAutor, cardFavorito, aoDeletar, corDoCabecalhoDoCard, favoritarOuDesfavoritar }) {
  return (
    <div className='card'>
      <FaWindowClose 
        onClick={() => aoDeletar(cardNomeDoLivro)} 
        size={30} className='botao_deletar_card' 
      />
        <div className="cabecalho" style={{background: corDoCabecalhoDoCard}}>
            <img src={cardCapaDoLivro} alt="" />
        </div>
        <div className="rodape">
            <h3>{cardNomeDoLivro}</h3>
            <h4>{cardNomeDoAutor}</h4>
            {/* <div className='favoritar'>
              {cardFavorito ? <FaHeart onClick={() => favoritarOuDesfavoritar(cardNomeDoLivro)}/> : <FaRegHeart onClick={() => favoritarOuDesfavoritar(cardNomeDoLivro)}/>}
            </div> */}
        </div>
    </div>
  )
}
