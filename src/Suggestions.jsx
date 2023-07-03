import Suggestion from "./Suggestion";

const suggestionList = [
  { img: "/assets/img/bad.vibes.memes.svg", txt: "bad.vibes.memes", state: "Segue você" },
  { img: "/assets/img/chibirdart.svg", txt: "chibirdart", state: "Segue você" },
  { img: "/assets/img/razoesparaacreditar.svg", txt: "razoesparaacreditar", state: "Novo no Instagram" },
  { img: "/assets/img/adorable_animals.svg", txt: "adorable_animals", state: "Segue você" },
  { img: "/assets/img/smallcutecats.svg", txt: "smallcutecats", state: "Segue você" }
]

export default function Suggestions() {
    return (
      <div class="sugestoes">
                  <div class="titulo">
                      Sugestões para você
                      <div>Ver tudo</div>
                  </div>

            {
             suggestionList.map( suggest => 
                <Suggestion key={suggest.txt} img={suggest.img} txt={suggest.txt} state={suggest.state} />
             )
      
            }
            </div>

    );
  }