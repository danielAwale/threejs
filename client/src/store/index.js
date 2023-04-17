import { proxy } from "valtio";

const state = proxy({
  //intro is going to let us know whether we are on the home page or not
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: './threejs.png'
})

export default state;