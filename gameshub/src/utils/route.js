import { getUser } from "../global/state/globalstate";
import {
  Login,
  PrintPokemonPage,
  printQuizPage,
  printTemplateDashboard,
} from "../pages";

//! ----------------------------------------------------------------------------------------------------------------------
//? ------------ CONTROLADOR DE LO QUE SE RENDERIZA EN CADA MOMENTO------------------------------
//! ----------------------------------------------------------------------------------------------------------------------

export const initControler = (pagesRender) => {
  switch (pagesRender) {
    case undefined:
      localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
      break;
    case "Pokemon":
      PrintPokemonPage();
      break;
    case "Dashboard":
      printTemplateDashboard();
      break;
    case "Quiz":
      printQuizPage();
      break;
    case "Login":
      Login();
      break;
  }
};
