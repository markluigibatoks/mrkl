import * as PIXI from "pixi.js";

export default () => {
  window.__PIXI_INSPECTOR_GLOBAL_HOOK__ &&
    window.__PIXI_INSPECTOR_GLOBAL_HOOK__.register({ PIXI: PIXI });
};
