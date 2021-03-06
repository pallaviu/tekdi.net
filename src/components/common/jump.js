import doJump from 'jump.js';
import { navigate } from "gatsby";

const jump = (e, offset = -100) => {
  const url = e.target.dataset.link;
  const urlParts = url.split('#');

  navigate(urlParts[0]);
  //window.history.pushState('', '', urlParts[0]);
  setTimeout(() => {
    window.history.replaceState('', '', url);
    doJump(`#${urlParts[1]}`, {offset});
  }, 500)
  return false;
}

export default jump;