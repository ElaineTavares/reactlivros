import React, { useState } from 'react'
import './Formulario.css'
import CampoTexto from './CampoTexto'
import PastaSuspensa from './PastaSuspensa'
import Botao from './Botao'



export default function Formulario({aoLivroCapturado}) {
    const generos = [
        "Romance",
        "Comédia",
        "Aventura",
        "Terror",
        "Suspense",
        "Ficção"
    ]

  const capturarLivro = (e) => {
    e.preventDefault()
    // console.log("Livro Capturado =>", nomeDoLivro, nomeDoAutor, capaDoLivro, generoDoLivro)
    aoLivroCapturado({
      nomeDoLivro,
      nomeDoAutor,
      capaDoLivro,
      generoDoLivro
    })
    setNomeDoLivro("")
    setNomeDoAutor("")
    setCapaDoLivro("")
    setGeneroDoLivro("")

    alert(`Card do livro "${nomeDoLivro}", foi criado com sucesso!!`)
  }

  const [nomeDoLivro, setNomeDoLivro] = useState("")
  const [nomeDoAutor, setNomeDoAutor] = useState("")
  const [capaDoLivro, setCapaDoLivro] = useState("")
  const [generoDoLivro, setGeneroDoLivro] = useState("")

  


  return (
    <section className='secao_formulario'>
        <form onSubmit={capturarLivro}>
            <h2>Preencha os campos abaixo</h2>
            <CampoTexto 
              nome="Nome do Livro" 
              placeholder="Digite o nome do livro"
              valor={nomeDoLivro}
              aoAlterado={valor => setNomeDoLivro(valor)}
            />
            <CampoTexto 
              nome="Nome do autor" 
              placeholder="Digite o nome do autor"
              valor={nomeDoAutor}
              aoAlterado={valor => setNomeDoAutor(valor)}
            />
            <CampoTexto 
              nome="Capa do Livro" 
              placeholder="Informe a url da imagem"
              valor={capaDoLivro}
              aoAlterado={valor => setCapaDoLivro(valor)}
            />
            <PastaSuspensa 
              nome="Gênero" 
              generosDoSelect={generos}
              valor={generoDoLivro}
              aoAlterado={valor => setGeneroDoLivro(valor)}
            />
            <Botao>Criar Card</Botao>
        </form>
    </section>
  )
}
