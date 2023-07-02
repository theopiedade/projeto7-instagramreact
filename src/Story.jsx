export default function Story(props) {
    return (
    <div class="story">
            <div className="imagem">
              <img src={props.img} alt={props.txt}/>
            </div>
            <div class="usuario">
            {props.txt}
            </div>
          </div>
    );
}