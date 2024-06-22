import { getUser } from "../../global/state/globalstate";
import { printTemplateDashboard } from "../../pages";
import { changeColorRGB, initControler } from "../../utils";
import "./Header.css";

//!-------------------------------------------------------------------
//? ------------------1) TEMPLATE ------------------------------------
//!-------------------------------------------------------------------

const template = () => `<img
    src="https://res.cloudinary.com/dhu1it9x8/image/upload/t_GamesHubSize/v1706566872/FantasyHub_bkop7g.png"
    alt="title hub game website (app)"
    class="logo"
  />
  <nav>
    <img
      src="https://res.cloudinary.com/dhu1it9x8/image/upload/t_GamesHubSize/v1706555952/paleta-de-color_dcce5a.png"
      alt=" change to style mode page"
      id="changeColor"
    />
    <img
      src="https://res.cloudinary.com/dhu1it9x8/image/upload/t_GamesHubSize/v1706555707/mundial_qoe25m.png"
      alt=" navigate to home app"
      id="buttonDashboard"
    />
    <img
      src="https://res.cloudinary.com/dhu1it9x8/image/upload/t_GamesHubSize/v1706556255/salida_p0tfgc.png"
      alt="logout"
      id="buttonLogout"
    />
  </nav>`;

const addListeners = () => {
  const changeColor = document.getElementById("changeColor");
  changeColor.addEventListener("click", (e) => {
    const color = changeColorRGB();
    document.body.style.background = color;
  });
  const buttonDashboard = document.getElementById("buttonDashboard");
  buttonDashboard.addEventListener("click", (e) => {
    initControler("Dashboard");
  });
  const logout = document.getElementById("buttonLogout");
  logout.addEventListener("click", (e) => {
    const userState = getUser().name;
    const currentUser = localStorage.getItem(userState);
    const parseCurrentUser = JSON.parse(currentUser);
    const updateUser = { ...parseCurrentUser, token: false };
    const stringUpdateUser = JSON.stringify(updateUser);
    localStorage.removeItem(userState);
    sessionStorage.removeItem("currentUser");
    localStorage.setItem(userState, stringUpdateUser);
    initControler("Login");
  });
};

export const PrintTemplateHeader = () => {
  document.querySelector("header").innerHTML = template();
  addListeners();
};
