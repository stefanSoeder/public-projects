import { setUSer, setUserData } from "../../global/globalstate";
import { initControler } from "../../utils/route";
import "./Login.css";

const template = () => `
  <div id="containerLogin">
    <h1 id="titleLogin">LOGIN</h1>
    <input type="text" name="username" id="username" />
    <button id="buttonLogin">enviar</button>
  </div>
`;

// login es que comprueba si ya tenemos un usuario
// en el local con datos dee algun usuario con el mismo nombre
// y asi lo asocia para coger los me gusta de los pokemon

const addEventListeners = () => {
  const buttonLogin = document.getElementById("buttonLogin");
  const username = document.getElementById("username");
  buttonLogin.addEventListener("click", (e) => {
    const valueInput = username.value;
    if (localStorage.getItem(`${valueInput}USER`)) {
      const localUser = localStorage.getItem(`${valueInput}USER`);
      const parseUser = JSON.parse(localUser);
      parseUser.token = true;
      const stringUser = JSON.stringify(customUser);
      localStorage.setItem(`${valueInput}USER`, stringUser);
      sessionStorage.setItem("currentUser", `${valueInput}USER`);
      setUser(`${valueInput}USER`);
      setUserData(customUser);
    }
    initControler();
  });
};

export const Login = () => {
  document.querySelector("nav").style.display = "none";
  document.querySelector("main").innerHTML = template();
  addEventListeners;
};
