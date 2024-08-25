import React from 'react'
import './SecaoLivros.css'
import Card from './Card'
import hexToRgba from 'hex-to-rgba';

export default function SecaoLivros({nomeDaSecao, corDaSecao, cardsDaColecao, aoDeletarLivro, trocarCor, favoritarOuDesfavoritarCard}) {
  return (
    (cardsDaColecao.length > 0) &&
    <section className="secao_livros" style={{background: hexToRgba(corDaSecao, '0.6') }}>
        <div className="input_color">
          <h4>Mude a cor</h4>
          <input type="color" value={corDaSecao} onChange={(evento) => trocarCor(evento.target.value, nomeDaSecao)} />
        </div>
        <h2>{nomeDaSecao}</h2>
        {cardsDaColecao.map((cardDaColecao, indice) => 
          <Card 
            key={indice}
            cardCapaDoLivro={cardDaColecao.capaDoLivro} 
            cardNomeDoLivro={cardDaColecao.nomeDoLivro} 
            cardNomeDoAutor={cardDaColecao.nomeDoAutor}
            aoDeletar={aoDeletarLivro}
            corDoCabecalhoDoCard={corDaSecao}  
            cardFavorito={cardDaColecao.favorito}
            favoritarOuDesfavoritar={favoritarOuDesfavoritarCard}
        />)}
    </section>
  )
}
