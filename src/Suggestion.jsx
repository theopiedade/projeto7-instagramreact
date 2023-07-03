
export default function Suggestion(props) {
    return (
        <div class="sugestao">
        <div class="usuario">
          <img src={props.img} alt={props.txt}/>
          <div class="texto">
              <div class="nome">{props.txt}</div>
              <div class="razao">{props.state}</div>
          </div>
        </div>
        <div class="seguir">Seguir</div>
    </div>
    );    
}