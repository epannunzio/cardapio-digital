import React from 'react';
import './App.css';
import hashtauranteImg from './assets/hashtaurante.webp';
import Navegacao from './navegacao';
import Footer from './footer';
import ItemCardapio from './ItemCardapio';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio';

function App() {
  const [paginaSelecionada, alterarPaginaSelecionada] = React.useState(0);
  const secoesMenu = [pratosPrincipais, sobremesas, bebidas];

  return (
    <>
      <div className="imagem-container">
        <img src={hashtauranteImg} className="capa" alt="Restaurante"></img>
        <p className="texto-sobre-imagem">Cardápio Digital</p>
      </div>
      <Navegacao alterarPaginaSelecionada={alterarPaginaSelecionada} />
      <div className="menu">
        {secoesMenu[paginaSelecionada].map((prato) => (
          <ItemCardapio
            nome={prato.nome} //pra usar um elemento JS vai ser entre chaves
            preco={prato.preco}
            descricao={prato.descricao}
            imagem={prato.imagem}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;

//o JSX é a linguagem que entende HTML e JS juntos