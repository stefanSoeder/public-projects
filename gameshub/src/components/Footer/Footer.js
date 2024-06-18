import "./Footer.css";

const template = () => `
<h3><span>This is the </span>FOOTER</h3>
`;

export const PrinTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
};
