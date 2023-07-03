import { useState } from "react"

export default function Post(props) {
    const [bookmark, setBookmark] = useState("bookmark-outline");
    const [heartLike, setHeartLike] = useState("heart-outline");
    const [heartColor, setHeartColor] = useState("black");
    const [likeCount, setLikeCount] = useState(props.likes);

    function alterBookMark() {
      bookmark === "bookmark-outline" ? setBookmark("bookmark") : setBookmark("bookmark-outline"); 
    }

    function alterLike(props) {
      if (heartLike === "heart-outline") { 
        setHeartLike("heart");
        setHeartColor("red");
        setLikeCount(likeCount+1);
       }
      else if (props !== "img")  {
        setHeartLike("heart-outline");
        setHeartColor("black");
        setLikeCount(likeCount-1);
      }
    }

    return (
        <div class="post" data-test="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.profileImg} alt={props.profile}/>
                {props.profile}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img data-test="post-image" src={props.img} alt={props.imgTxt} onDoubleClick={() => alterLike("img")}/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon data-test="like-post" name={heartLike} color={heartColor} onClick={() => alterLike()} ></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon data-test="save-post" name={bookmark} onClick={() => alterBookMark()}></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.likedImg} alt={likeCount}/>
                <div class="texto">
                  Curtido por <strong>{props.liked}</strong> e <strong>outras <span data-test="likes-number">{likeCount}</span> pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    )
}