import { getInfo, initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761508/pngwing.com_r0hr9b.png"
            alt="go to page pokemon"
          />
          <h2>POKEMON</h2>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="https://res.cloudinary.com/dhu1it9x8/image/upload/v1706571815/DragonShooter_yujgs2.png"
            alt="go to dragon shooter game"
          />
          <h2>WACKA TOPO</h2>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="https://res.cloudinary.com/dhu1it9x8/image/upload/v1706558125/libros-de-texto_nuzhc0.png"
            alt="go to fantasy quiz game"
          />
          <h2>MEMORY GAME</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

const addEventListeners = () => {
  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });
};

export const printTemplateDashboard = () => {
  document.querySelector("main").innerHTML = template();

  document.querySelector("nav").style.display = "flex";

  addEventListeners();

  getInfo();
};
