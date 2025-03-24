import { useState } from "react";
import "./App.css";
import fechado from "./assets/biscoito.png";
import aberto from "./assets/aberto.png";

function App() {
  const frasesBiscoito = [
    "Grandes mudanças começam com pequenos passos.",
    "O sucesso vem para quem não desiste.",
    "Acredite em você e tudo será possível.",
    "A paciência é a chave para a sabedoria.",
    "O que você planta hoje, colhe amanhã.",
    "Nunca é tarde para ser quem você quer ser.",
    "A sorte favorece os corajosos.",
    "Uma jornada de mil milhas começa com um único passo.",
    "Aprenda com o passado, viva o presente, sonhe com o futuro.",
    "Seu maior tesouro é o tempo. Use-o bem.",
    "As oportunidades surgem para quem está preparado.",
    "Seja a mudança que você quer ver no mundo.",
    "O que parece difícil hoje será sua vitória amanhã.",
    "Boas energias atraem coisas boas.",
    "O otimismo é o ímã da felicidade.",
    "Cada novo dia é uma nova chance para ser feliz.",
    "Acredite no seu potencial e vá além.",
    "O esforço de hoje é a recompensa de amanhã.",
    "Pense positivo e coisas boas acontecerão.",
    "Nada é impossível para quem tem determinação.",
    "Siga em frente, um passo de cada vez.",
    "O segredo do sucesso está na perseverança.",
    "As dificuldades preparam pessoas comuns para destinos extraordinários.",
    "Você é mais forte do que imagina.",
    "O universo conspira a favor de quem acredita.",
    "Um sorriso pode mudar o seu dia e o de alguém.",
    "A sorte é o encontro da preparação com a oportunidade.",
    "Não tenha medo de errar, pois é errando que se aprende.",
    "A felicidade não é um destino, mas uma forma de viajar.",
    "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
    "Seja gentil e o mundo será gentil com você.",
    "A vida recompensa aqueles que não têm medo de vivê-la.",
    "A melhor maneira de prever o futuro é criá-lo.",
    "A esperança é o ingrediente secreto para grandes conquistas.",
    "A cada dia há uma nova chance de recomeçar.",
    "O tempo é agora, faça acontecer.",
    "O bem que você faz retorna para você.",
    "A confiança é a base de todas as conquistas.",
    "O segredo da felicidade está em aproveitar o momento presente.",
    "Nunca deixe para amanhã o que pode ser feito hoje.",
    "Tudo o que você precisa já está dentro de você.",
    "O amor e a gratidão transformam qualquer situação.",
    "A luz que você procura está dentro de você.",
    "O caminho para o sucesso é dar um passo de cada vez.",
    "Você atrai o que transmite, então espalhe boas vibrações.",
    "Cada dia é uma nova oportunidade para crescer.",
    "A persistência é a ponte entre o sonho e a realização.",
    "Seu destino está em suas mãos, escolha com sabedoria.",
    "O medo é apenas uma ilusão, siga em frente com coragem.",
    "Os desafios são oportunidades disfarçadas.",
    "Pequenas alegrias constroem grandes felicidades.",
    "A vida é um presente, aproveite cada instante.",
    "Confie no seu instinto, ele sabe o caminho.",
    "Você é capaz de realizar coisas incríveis.",
    "O universo tem planos maravilhosos para você.",
    "Nunca subestime o poder de um simples sorriso.",
    "Seja a luz que ilumina o caminho dos outros.",
    "Transforme dificuldades em aprendizados.",
    "A verdadeira riqueza está nas experiências vividas.",
    "Não espere, comece agora.",
    "Seu coração sabe a resposta.",
    "Não compare seu capítulo 1 com o capítulo 20 de alguém.",
    "Grandes sonhos começam com pequenas ações.",
    "A coragem leva você a lugares inesperados.",
    "Toda tempestade passa, o sol sempre volta a brilhar.",
    "Seu potencial é maior do que imagina.",
    "Acredite: você nasceu para vencer.",
    "O amor próprio é o começo de tudo.",
    "Cada dia é uma nova chance para mudar sua vida.",
    "Aprenda a se perdoar e siga em frente.",
    "Não há erros, apenas aprendizados.",
    "A magia acontece fora da zona de conforto.",
    "Você é uma obra-prima em construção.",
    "A força está na sua mente.",
    "Desafios são trampolins para o sucesso.",
    "Seu brilho ninguém pode apagar.",
    "Acredite na sua capacidade de fazer a diferença.",
    "Nada é mais valioso do que a paz interior.",
    "O mundo precisa do seu talento.",
    "Tenha fé no processo.",
    "A mente positiva atrai coisas positivas.",
    "Sonhe alto, o céu é o limite.",
    "Cada obstáculo superado te torna mais forte.",
    "Seu esforço hoje será seu orgulho amanhã.",
    "Boas coisas acontecem para quem tem paciência.",
    "Seja sua própria inspiração.",
    "Respire fundo e continue avançando.",
    "Seja gentil, a vida retribui.",
    "O tempo cura, ensina e fortalece.",
    "Nada pode parar quem tem determinação.",
    "A chave do sucesso é nunca parar de aprender.",
    "Foque no que te faz feliz.",
    "Você tem o poder de mudar sua realidade.",
    "Faça do seu dia algo extraordinário.",
    "Sua história ainda está sendo escrita.",
    "Mantenha o foco, sua vitória está próxima.",
    "Não tenha medo de recomeçar.",
    "Cada pessoa que cruza seu caminho tem algo a ensinar.",
    "O mundo muda quando você muda.",
    "Siga seu coração, mas leve o cérebro junto.",
    "A felicidade está dentro de você.",
    "Grandes coisas acontecem para quem não desiste.",
    "A única pessoa que pode te impedir de crescer é você mesmo.",
    "Acreditar é o primeiro passo para conquistar.",
    "Cultive gratidão e verá milagres acontecerem.",
    "Não tenha medo de ser diferente.",
    "Viva intensamente cada momento.",
    "O que você faz hoje define seu amanhã.",
    "Nada acontece por acaso.",
    "Plante boas sementes e colha bons frutos.",
    "Seu sorriso ilumina o mundo.",
    "A sua jornada é única, aproveite-a.",
    "Desafios são convites para crescer.",
    "O impossível é apenas uma opinião.",
    "Você está exatamente onde precisa estar.",
    "A vida te dá oportunidades todos os dias.",
    "Mude seus pensamentos e mudará sua vida.",
    "Você é mais incrível do que imagina.",
    "Nada pode te impedir, a não ser você mesmo.",
    "A vida começa onde o medo termina.",
    "Você merece tudo o que há de melhor.",
    "Acredite, o melhor ainda está por vir!",
    "Seja paciente, seu tempo chegará.",
    "O segredo da vida é nunca desistir.",
    "A felicidade começa dentro de você.",
    "Tudo tem um propósito, confie no caminho.",
    "O seu brilho ninguém pode apagar.",
    "A vida recompensa os persistentes.",
    "Seja hoje a pessoa que deseja ser amanhã.",
    "Não se limite, vá além!",
  ];

  const [frase, setFrase] = useState("");
  const [imagem, setImagem] = useState(fechado);
  const [quebrado, setQuebrado] = useState(false);

  const pegarFraseAleatoria = () => {
    if (!quebrado) {
      const fraseAleatoria =
        frasesBiscoito[Math.floor(Math.random() * frasesBiscoito.length)];
      setFrase(fraseAleatoria);
      setImagem(aberto);
      setQuebrado(true);
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
