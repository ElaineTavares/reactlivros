import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Formulario from './components/Formulario'
import SecaoLivros from './components/SecaoLivros'
import Footer from './components/Footer'

function App() {

  const [generosECores, setGeneroECores] = useState ([
    {
      genero: "Romance",
      cor: "#aa0040",
    },
    {
      genero: "Comédia",
      cor: "#ff9e30",
     
    },
    {
      genero: "Aventura",
      cor: "#457873",
 
    },
    {
      genero: "Terror",
      cor: "#332a25",
  
    },
    {
      genero: "Suspense",
      cor: "#47221a",
     
    },
    {
      genero: "Ficção",
      cor: "#004f6a", 
    }
  ])

  const inicial = [
    { 
      id: "1",
      favorito: false,
      nomeDoLivro: "A culpa é das estrelas",
      nomeDoAutor: "John Green",
      capaDoLivro: "/a_culpa_e_das_estrelas.webp",
      generoDoLivro: generosECores[0].genero 
    },
    {     
      id: 2,
      favorito: false,
      nomeDoLivro: "Como eu era antes de você",
      nomeDoAutor: "Jojo Moyes",
      capaDoLivro: "/como_eu_era_antes_de_voce.webp",
      generoDoLivro: generosECores[0].genero    
    },
    {
      id: 3,
      favorito: false,
      nomeDoLivro: "Continência ao amor",
      nomeDoAutor: "Tess Wakefield",
      capaDoLivro: "/continencia_ao_amor.webp",
      generoDoLivro: generosECores[0].genero 
    },
    {
      id: 4,
      favorito: false,
      nomeDoLivro: "É assim que acaba",
      nomeDoAutor: "Coleen Hoover",
      capaDoLivro: "/e_assim_que_acaba.webp",
      generoDoLivro: generosECores[0].genero 
    },
    {
      id: 5,
      nomeDoLivro: "Cadê você Bernadette?",
      nomeDoAutor: "Maria Semple",
      capaDoLivro: "/cade_voce_bernadette.jpeg",
      generoDoLivro: generosECores[1].genero 
    },
    {
      id: 6,
      favorito: false,
      nomeDoLivro: "A divina comédia",
      nomeDoAutor: "Dante Alighiere",
      capaDoLivro: "/a_divina_comedia.jpeg",
      generoDoLivro: generosECores[1].genero 
    },
    {
      id: 7,
      favorito: false,
      nomeDoLivro: "Melhor do que nos filmes",
      nomeDoAutor: "Lynn Painter",
      capaDoLivro: "/melhor_do_que_nos_filmes.png",
      generoDoLivro: generosECores[1].genero 
    },
    {
      id: 8,
      favorito: false,
      nomeDoLivro: "Minha vida não é uma comédia romântica",
      nomeDoAutor: "Lola Salgado",
      capaDoLivro: "/minha_vida_nao_e_uma_comedia_romantica.jpeg",
      generoDoLivro: generosECores[1].genero 
    },
    {
      id: 9,
      favorito: false,
      nomeDoLivro: "FeiticeiroTerramar",
      nomeDoAutor: "Ursula K. Leguin",
      capaDoLivro: "/feiticeiro_terramar.jpeg",
      generoDoLivro: generosECores[2].genero 
    },
    {
      id: 10,
      favorito: false,
      nomeDoLivro: "O aprendiz",
      nomeDoAutor: "Taran Matharu",
      capaDoLivro: "/o_aprendiz.jpeg",
      generoDoLivro: generosECores[2].genero 
    },
    {
      id: 11,
      favorito: false,
      nomeDoLivro: "O nome do vento",
      nomeDoAutor: "Patrick Rotbfuss",
      capaDoLivro: "/o_nome_do_vento.jpeg",
      generoDoLivro: generosECores[2].genero 
    },
    {
      id: 12,
      favorito: false,
      nomeDoLivro: "Um pouco de aventura",
      nomeDoAutor: "Christina Lauren",
      capaDoLivro: "/um_pouco_de_aventura.jpeg",
      generoDoLivro: generosECores[2].genero 
    },
    {
      id: 13,
      favorito: false,
      nomeDoLivro: "O paciente",
      nomeDoAutor: "Jasper Dewitt",
      capaDoLivro: "/o_paciente.jpeg",
      generoDoLivro: generosECores[3].genero 
    },
    {
      id: 14,
      favorito: false,
      nomeDoLivro: "O vilarejo",
      nomeDoAutor: "Raphael Montes",
      capaDoLivro: "/o_vilarejo.jpeg",
      generoDoLivro: generosECores[3].genero 
    },
    {
      id: 15,
      favorito: false,
      nomeDoLivro: "O iluminado",
      nomeDoAutor: "Stephen King",
      capaDoLivro: "/o_iluminado.jpeg",
      generoDoLivro: generosECores[3].genero 
    },
    {
      id: 16,
      favorito: false,
      nomeDoLivro: "Amigo imaginário",
      nomeDoAutor: "Stephen Chbosky",
      capaDoLivro: "/amigo_imaginario.jpeg",
      generoDoLivro: generosECores[3].genero 
    },
    {
      id: 17,
      favorito: false,
      nomeDoLivro: "Contos de suspense e terror",
      nomeDoAutor: "Edgar Allan Poe",
      capaDoLivro: "/contos_de_suspense_e_terror.jpeg",
      generoDoLivro: generosECores[4].genero 
    },
    {
      id: 18,
      favorito: false,
      nomeDoLivro: "Jantar secreto",
      nomeDoAutor: "Raphael Montes",
      capaDoLivro: "/jantar_secreto.jpeg",
      generoDoLivro: generosECores[4].genero 
    },
    {
      id: 19,
      favorito: false,
      nomeDoLivro: "A empregada",
      nomeDoAutor: "Freida McFadden",
      capaDoLivro: "/a_empregada.jpeg",
      generoDoLivro: generosECores[4].genero 
    },
    {
      id: 20,
      favorito: false,
      nomeDoLivro: "Oito assassinatos perfeitos",
      nomeDoAutor: "Peter Swanson",
      capaDoLivro: "/oito_assassinatos_perfeitos.jpeg",
      generoDoLivro: generosECores[4].genero 
    },
    {
      id: 21,
      favorito: false,
      nomeDoLivro: "Cortes de espinhos e rosas",
      nomeDoAutor: "Sarah J. Maas",
      capaDoLivro: "/corte_de_espinhos_e_rosas.jpeg",
      generoDoLivro: generosECores[5].genero 
    },
    {
      id: 22,
      favorito: false,
      nomeDoLivro: "A máquina do tempo",
      nomeDoAutor: "H. G. Wells",
      capaDoLivro: "/a_maquina_do_tempo.jpeg",
      generoDoLivro: generosECores[5].genero 
    },
    {
      id: 23,
      favorito: false,
      nomeDoLivro: "Escrevendo ficção científica e fantasia",
      nomeDoAutor: "Eldes Saullo",
      capaDoLivro: "/escrevendo_ficcao_cientifica_e_fantasia.jpeg",
      generoDoLivro: generosECores[5].genero 
    },
    {
      id: 24,
      favorito: false,
      nomeDoLivro: "A odisséia de Papanicolau",
      nomeDoAutor: "Manoel Luiz Varela",
      capaDoLivro: "/a_odisseia_de_papanicolau.jpeg",
      generoDoLivro: generosECores[5].genero 
    }
  ]

  const [livrosDaColecao, setLivrosDaColecao] = useState(inicial)

  const incluirLivroNaColecao = (livro) => {
      setLivrosDaColecao([...livrosDaColecao, livro])
      console.log("Livros da coleção => ", livrosDaColecao)
  }

  const livroDeletado = (cardNomeDoLivro) =>{
    setLivrosDaColecao(livrosDaColecao.filter ((livro) => livro.nomeDoLivro !== cardNomeDoLivro))
    // console.log("Livro Deletado => ")
    alert(`Card do livro "${cardNomeDoLivro}", foi deletado com sucesso.`)
  }

  const trocarCorDaSecaoLivros = (corDaSecao, nomeDaSecao) => {
    setGeneroECores(generosECores.map((generoECor) => {
      if(generoECor.genero === nomeDaSecao) {
        generoECor.cor = corDaSecao
      }
      return generoECor
    }))
  }

  function favoritandoOuDesfavoritandoCard(cardNomeDoLivro) {
    setLivrosDaColecao(livrosDaColecao.map((livroDaColecao) => {
     if(livroDaColecao.nomeDoLivro == cardNomeDoLivro) {
      livroDaColecao.favorito = !livroDaColecao.favorito
      return livroDaColecao
     }
    }
      
    ))
  }

  return (
    <>
      <Banner/>
      <Formulario 
        aoLivroCapturado={incluirLivroNaColecao}
      />
      {generosECores.map((item) => 
      <SecaoLivros 
          key={item.genero}
          nomeDaSecao={item.genero} 
          corDaSecao={item.cor}
          cardsDaColecao={livrosDaColecao.filter((livro) => livro.generoDoLivro === item.genero)}
          aoDeletarLivro={livroDeletado}
          trocarCor={trocarCorDaSecaoLivros}
          favoritarOuDesfavoritarCard={favoritandoOuDesfavoritandoCard}
      />
       )}  
      <Footer/>
     
    </>
  )
}

export default App
