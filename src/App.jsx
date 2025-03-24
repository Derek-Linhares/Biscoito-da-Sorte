import { useState } from "react";
import "./App.css";
import fechado from "./assets/biscoito.png";
import aberto from "./assets/aberto.png";
import music from "./assets/biscoitoSound.mp3";
import frasesBiscoito from "./data/Frases";

function App() {
  const [frase, setFrase] = useState("");
  const [imagem, setImagem] = useState(fechado);
  const [quebrado, setQuebrado] = useState(false);

  const tocarSom = (som) => {
    const audio = new Audio(som);
    audio.play();
  };

  const pegarFraseAleatoria = () => {
    if (!quebrado) {
      const fraseAleatoria =
        frasesBiscoito[Math.floor(Math.random() * frasesBiscoito.length)];
      setFrase(`"${fraseAleatoria}"`);
      setImagem(aberto);
      setQuebrado(true);
      tocarSom(music);
    }
  };

  const reiniciar = () => {
    setFrase("");
    setImagem(fechado);
    setQuebrado(false);
  };

  return (
    <div className="container">
      <h1>Biscoito da Sorte</h1>
      <h2>幸運餅乾</h2>
      <img
        src={imagem}
        alt="Biscoito da sorte"
        onClick={pegarFraseAleatoria}
        style={{ cursor: !quebrado ? "pointer" : "default" }}
      />
      <h3>{frase}</h3>
      {quebrado && <button onClick={reiniciar}>Pegar mais um?</button>}
    </div>
  );
}

export default App;
