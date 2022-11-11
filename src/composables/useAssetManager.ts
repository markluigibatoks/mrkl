import { Assets, utils } from "pixi.js";
import { sound } from "@pixi/sound";
interface Manifest {
  bundles: {
    name: string;
    assets: [];
  }[];
}

export class AssetManager {
  static bundle: any;

  static async initialize(manifest: Manifest) {
    await Assets.init({ manifest });

    // DANGER!! DO NOT REMOVE
    console.log(sound);
    // DANGER!! DO NOT REMOVE

    const bundles = manifest.bundles.map((x) => x.name);

    Assets.backgroundLoadBundle(bundles);

    utils.clearTextureCache();

    AssetManager.bundle = await Assets.loadBundle(bundles, () => {});
  }
}
