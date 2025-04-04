import { useState, useEffect } from "react";
import "./App.css";
import fechado from "./assets/biscoito.png";
import aberto from "./assets/aberto.png";
import music from "./assets/biscoitoSound.mp3";
import { US, BR, ES } from "country-flag-icons/react/3x2";

import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const [frase, setFrase] = useState("");
  const [imagem, setImagem] = useState(fechado);
  const [quebrado, setQuebrado] = useState(false);
  const [modal, setModal] = useState(true);

  useEffect(() => {
    document.title = t("fortune_cookie");
  }, [i18n.language, t]);

  const tocarSom = (som) => {
    const audio = new Audio(som);
    audio.play();
  };

  const pegarFraseAleatoria = () => {
    if (!quebrado) {
      const frases = t("fortune_phrases", { returnObjects: true });
      const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
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

  const mudarIdioma = (idioma) => {
    i18n.changeLanguage(idioma);
    setModal(false);
  };

  return (
    <div className="container">
      <h1>{t("fortune_cookie")}</h1>
      <h2>幸運餅乾</h2>
      <img
        src={imagem}
        alt={t("fortune_cookie")}
        onClick={pegarFraseAleatoria}
        style={{ cursor: !quebrado ? "pointer" : "default" }}
      />
      <h3>{frase}</h3>
      {quebrado && <button onClick={reiniciar}>{t("get_another")}</button>}{" "}
      {!quebrado && <p>{t("click_cookie")}</p>}
      {modal && (
        <>
          <div className="modal-idioma">
            <h1>Language/Idioma</h1>
            <div className="flags">
              <div className="flagCase">
                <US className="flag" onClick={() => mudarIdioma("en")} />
                English
              </div>
              <div className="flagCase">
                <BR className="flag" onClick={() => mudarIdioma("pt")} />
                Português
              </div>
              <div className="flagCase">
                <ES className="flag" onClick={() => mudarIdioma("es")} />
                Español
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
