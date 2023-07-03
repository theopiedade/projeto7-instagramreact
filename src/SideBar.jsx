import Suggestions from "./Suggestions";
import { useState } from "react";

export default function SideBar() {
    const [username, setUsername] = useState("catanomics");
    const [userImg, setUserImg] = useState("assets/img/catanacomics.svg");

    function alterUser() {
      let newUser = prompt("Informe seu username");
      if (newUser) setUsername(newUser);
    }

    function alterImg() {
        let newImg = prompt("Informe o link da sua imagem");
        if (newImg) setUserImg(newImg);
      }

    return (
        <div class="sidebar">
            <div class="usuario">
                <img onClick={() => alterImg()} src={userImg} alt="imagem de perfil"/>
                <div class="texto">
                    <span>
                    <strong>{username}</strong>
                    <ion-icon name="pencil" onClick={() => alterUser()}></ion-icon>
                    </span>
                </div>
            </div>

        <Suggestions/>

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    );
}